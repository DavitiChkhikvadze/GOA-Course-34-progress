import React, { useState } from 'react';

const LogIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const savedUserRaw = localStorage.getItem('userAccount');
    if (!savedUserRaw) {
      setStatus({ type: 'error', message: 'No account found. Please sign up first!' });
      return;
    }

    const savedUser = JSON.parse(savedUserRaw);
    if (formData.email === savedUser.email && formData.password === savedUser.password) {
      setStatus({ 
        type: 'success', 
        message: `Welcome back, ${savedUser.name || 'User'}! Login successful.` 
      });
    } else {
      setStatus({ type: 'error', message: 'Invalid email or password. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 antialiased">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-4xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient from-indigo-900 to-slate-950 relative overflow-hidden border-r border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-24px"></div>
          
          <div className="relative z-10 flex items-center gap-2 font-bold text-xl tracking-wide">
            <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center text-white font-black text-sm">▲</div>
            TODO APP
          </div>
          
          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight bg-gradient from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Welcome back to the nexus.
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Log in to access your tasks 
            </p>
          </div>
          
          <div className="relative z-10 text-xs text-slate-500">
            smth
          </div>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center relative">
          
          {status.message && (
            <div className={`absolute top-4 left-4 right-4 border text-sm py-3 px-4 rounded-xl flex items-center gap-2 transition-all duration-300 ${
              status.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
            }`}>
              <span>{status.type === 'success' ? 'yes' : 'no'}</span> {status.message}
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Account Login</h2>
            <p className="text-slate-400 text-sm">
              Don't have an account? <a href="#signup" className="text-violet-400 hover:underline font-medium">Sign up</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition duration-200"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</label>
                <a href="#forgot" className="text-xs text-violet-400 hover:underline">Forgot?</a>
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition duration-200"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 rounded border-slate-800 bg-slate-950 text-violet-600 focus:ring-violet-500 accent-violet-500"
              />
              <label htmlFor="rememberMe" className="text-xs text-slate-400 select-none">
                Keep me logged in on this device
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-600/20 active:scale-[0.98] transition-all duration-150 mt-2"
            >
              Sign In
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LogIn;