//N1 - Automorphic Number (Special Numbers Series #6)
function automorphic(n){
  let len = n.toString().length
  let num = (n * n).toString().slice(-len)
  return (n == num) ? 'Automorphic' : 'Not!!'
}

//N2 - Ensure question
function ensureQuestion(s) {
  return s.endsWith("?")?s:s+"?"
}

//N3 - Merging sorted integer arrays (without duplicates)
function mergeArrays(a, b) {
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a,b)=> a-b)
}

//N4 - Who ate the cookie?
function cookie(x) {
  var t = typeof x
  var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}

//N5 - Hungarian Vowel Harmony (easy)
function dative(word){
  var str = word;
  var nekArr = ["e","é","i","í","ö","ő","ü","ű"];
  var nakArr = ["a","á","o","ó","u","ú"];
  for(var i=str.length-1;i>=0;i--){
    if(nekArr.indexOf(str[i])!==-1) return str + "nek";
    if(nakArr.indexOf(str[i])!==-1) return str + "nak";
  }
}

// Bonus - Function 1 - hello world
function greet(){
  return "hello world!"
}