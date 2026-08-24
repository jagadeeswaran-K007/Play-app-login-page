import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setServerError('');

    let hasError = false;

    if (!email) {
      setEmailError('Please enter your email address.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        setIsLoggedIn(true);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setServerError(err.response.data.message);
      } else {
        setServerError('Something went wrong. Please try again.');
      }
    }
  };

  if (isLoggedIn) {
    return <Dashboard email={email} onSignOut={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col justify-between relative">
      {/* Top Left Logo: Red Play Icon aligned & sized with letter 'P' */}
      <header className="p-4 sm:p-6 max-w-7xl mx-auto w-full z-10 flex justify-start items-center">
        <div className="flex items-center gap-2 text-[#e50914]">
          <svg
            className="w-[1em] h-[1em] text-5xl sm:text-4xl fill-current leading-none"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <h1 className="font-bold text-5xl sm:text-4xl tracking-tighter leading-none">
            Play
          </h1>
        </div>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center z-10 px-4 py-8">
        <div className="bg-black/75 p-8 sm:p-16 rounded-md w-full max-w-[450px] shadow-2xl border border-zinc-900 sm:border-none">
          <h2 className="text-3xl font-bold mb-7">Sign In</h2>

          {serverError && (
            <div className="bg-[#e87c03] text-white text-sm p-3.5 rounded mb-4">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#333333] text-white rounded px-4 py-3.5 text-sm focus:outline-none focus:bg-[#454545] ${
                  emailError ? 'border-b-2 border-red-600' : ''
                }`}
              />
              {emailError && (
                <p className="text-red-600 text-xs mt-1.5">{emailError}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-[#333333] text-white rounded px-4 py-3.5 text-sm focus:outline-none focus:bg-[#454545] ${
                  passwordError ? 'border-b-2 border-red-600' : ''
                }`}
              />
              {passwordError && (
                <p className="text-red-600 text-xs mt-1.5">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#e50914] hover:bg-red-700 text-white font-semibold py-3 rounded mt-6 transition duration-200"
            >
              Sign In
            </button>

            <div className="flex items-center justify-between text-xs text-[#b3b3b3] mt-2">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-[#333] accent-zinc-500"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline hover:text-white">
                Need help?
              </a>
            </div>
          </form>

          <div className="mt-12 text-[#737373] text-sm flex flex-col gap-4">
            <p>
              New to this project?{' '}
              <a href="#" className="text-white hover:underline font-semibold">
                Sign up now.
              </a>
            </p>
            <p className="text-xs leading-relaxed">
              This page is a Play-inspired educational project. Your information will not be stored.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-500 z-10">
        Play-inspired React Login Project
      </footer>
    </div>
  );
}