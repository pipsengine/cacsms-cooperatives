import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">This page could not be found</h2>
      <p className="mb-6 text-lg">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all">Go to Home</Link>
    </div>
  );
}
