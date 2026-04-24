import { NextRequest } from 'next/server';

const API_BASE = process.env.API_BASE || 'http://localhost:3001';

export async function GET(req: NextRequest, { params }: { params: { reportType: string, memberId: string } }) {
  const { reportType, memberId } = params;
  const url = `${API_BASE}/api/contributions/report/${reportType}/${memberId}`;
  const res = await fetch(url, { headers: { 'x-user-role': 'admin' } });
  const data = await res.json();
  return Response.json(data);
}
