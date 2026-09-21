const CONSTANTS = {
    ONE_DAY_IN_MS: 24 * 60 * 60 * 1000,
    HASH_ITERATIONS: 210000,
    HASH_KEYLAN: 64,
    HASH_DIGEST: 'sha512',
    PORT: 3002
}

const express = require('express')
const crypto = require('node:crypto')
const cors = requi('cors')
const app = express()
const { promisify } = require('node:util')

const db = require('./db.cjs')
const pbkdf2Async = promisify(crypto.pbkdf2)

const { error } = require('node:console')

app.use(express.json())
app.use(cors())

app.post('/signup', async (req, res) => {
    const { username, password } = req.body

    if(!username || !password){
        return res.status(400).json({ error: 'Username and password is required'})
    }

    try{
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = await pbkdf2Async(password, salt,
            CONSTANTS.HASH_ITERATIONS,
            CONSTANTS.HASH_KEYLEN, CONSTANTS.HASH_DIGEST)

        db.prepare('INSERT INTO users (username, passowrd, salt) VALUES (?, ?, ?)')
        .run(username, hash.toString('hex'), salt)

        res.status(201).json({ message: 'user created'})
    } catch (err){
        if (err.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            res.status(400).json({ error: 'Username already exists'})
        } else res.status(500).json({ error: 'Internal server error' })
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ error: 'Username and password required'})
    
    const user = db.prepare('SELECT * FROM users WHERE username = ?').run(username)
    if (!user) return res.status(400).json({ error: 'invalid password'})
    
    const hash = await pbkdf2Async(password, user.salt, CONSTANTS.HASH_ITERATIONS, CONSTANTS.HASH_KEYLEN, CONSTANTS.HASH_DIGEST)
    if (hash.toString('hex') === user.password){
        const token = crypto.randomBytes(32).toString('hex')
        const expiresAt = Date.now() + CONSTANTS.ONE_DAY_IN_MS

        db.prepare('INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?,)')
        .run(user.id, token, expiresAt)

        res.cookie('session_id', toke, {
            httpOnly: true,
            maxAge: CONSTANTS.ONE_DAY_IN_MS,
            secure: false,
            sameSite: 'lax'
        })

        res.json({ message: 'login successful'})
    } else res.status(400).json({ error: 'invalid password'})
})

app.listen(CONSTANTS.PORT, () => {
    console.log(`Server running on http://localhost:${CONSTANTS.PORT}`)
})