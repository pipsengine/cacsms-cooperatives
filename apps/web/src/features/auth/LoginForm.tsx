import React, { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // TODO: Integrate with backend auth API
    await new Promise(res => setTimeout(res, 1000));
    setLoading(false);
    // Simulate login
    if (form.email && form.password) {
      window.location.href = '/(dashboard)';
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-24 p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6">
      <h2 className="text-2xl font-bold mb-2">Sign in to Cacsms Cooperatives</h2>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" required className="w-full border px-4 py-2 rounded" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      </div>
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input type="password" required className="w-full border px-4 py-2 rounded" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
      </div>
      {error && <div className="text-red-600 font-medium">{error}</div>}
      <button type="submit" className="bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-800 transition-all" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
      <div className="text-sm text-slate-500 mt-2">Don’t have an account? <a href="/register-cooperative" className="text-blue-900 underline">Register Cooperative</a></div>
    </form>
  );
}
