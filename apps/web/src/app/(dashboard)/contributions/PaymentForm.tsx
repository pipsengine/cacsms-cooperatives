import React, { useState } from 'react';

export function PaymentForm({ memberId, obligationId, onSuccess }: { memberId: string, obligationId: string, onSuccess?: () => void }) {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('bank_transfer');
  const [reference, setReference] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, obligationId, amount: Number(amount), method, reference }),
      });
      if (!res.ok) throw new Error('Payment failed');
      setSuccess(true);
      setAmount('');
      setReference('');
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '24px 0', padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <h3>Record Payment</h3>
      <div>
        <label>Amount: <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required min="0.01" step="0.01" /></label>
      </div>
      <div>
        <label>Method: 
          <select value={method} onChange={e => setMethod(e.target.value)}>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="ussd">USSD</option>
            <option value="wallet">Wallet</option>
          </select>
        </label>
      </div>
      <div>
        <label>Reference: <input value={reference} onChange={e => setReference(e.target.value)} placeholder="e.g. Bank Txn Ref" /></label>
      </div>
      <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Submit Payment'}</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Payment recorded successfully!</div>}
    </form>
  );
}
