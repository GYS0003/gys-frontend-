'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyAdmin } from '@/services/apis';

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await verifyAdmin(form.email, form.password);
      sessionStorage.setItem('Token', response.token);
      setError('');
      router.push('/admingystechnologies/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err?.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 p-8 rounded-xl max-w-sm w-full shadow-md dark:shadow-lg transition-all"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Admin Email"
          className="w-full mb-4 px-4 py-2 rounded bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
