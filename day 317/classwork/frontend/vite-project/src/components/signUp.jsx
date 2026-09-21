import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('userAccount', JSON.stringify(formData));
    setIsSubmitted(true);
    setFormData({ name: '', email: '', password: ''});
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 antialiased">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-4xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient from-violet-600 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-24px"></div>
          
          <div className="relative z-10 flex items-center gap-2 font-bold text-xl tracking-wide">
            <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-indigo-600 font-black text-sm"></div>
            TODO APP
          </div>
          
          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
              smth
            </h1>
            <p className="text-indigo-200 text-sm leading-relaxed">
              do something gng
            </p>
          </div>
          
          <div className="relative z-10 text-xs text-indigo-300">
            smth
          </div>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center relative">
          
          {isSubmitted && (
            <div className="absolute top-4 left-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm py-3 px-4 rounded-xl flex items-center gap-2 animate-fade-in">
              <span>✓</span> Account successfully saved to LocalStorage!
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Create an account</h2>
            <p className="text-slate-400 text-sm">
              Already have an account? <a href="#login" className="text-violet-400 hover:underline font-medium">Log in</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Daviti Chkhikvadze"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition duration-200"
              />
            </div>

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
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
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

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                required
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-violet-600 focus:ring-violet-500 accent-violet-500"
              />
              <label htmlFor="agreeToTerms" className="text-xs text-slate-400 leading-normal select-none">
                I agree to the <a href="#terms" className="text-violet-400 hover:underline">Terms of Service</a> and <a href="#privacy" className="text-violet-400 hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-600/20 active:scale-[0.98] transition-all duration-150 mt-2"
            >
              Create Account
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;