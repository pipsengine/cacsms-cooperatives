import { NextRequest } from 'next/server';

const API_BASE = process.env.API_BASE || 'http://localhost:3001';

export async function POST(req: NextRequest) {
  // Proxy payment requests to backend payment/ledger module
  const body = await req.json();
  const res = await fetch(`${API_BASE}/api/payments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-role': 'admin' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data);
}
