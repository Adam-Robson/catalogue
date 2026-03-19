'use client';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      // Placeholder: no backend yet
      await new Promise((r) => setTimeout(r, 500));
      setStatus('sent');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        setStatus('error');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="mb-4">
        <label htmlFor='name' className="block text-sm mb-1">Name</label>
        <input id='name' value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor='email' className="block text-sm mb-1">Email</label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor='message' className="block text-sm mb-1">Message</label>
        <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border px-3 py-2 rounded h-32" />
      </div>
      <div className="flex items-center gap-4">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        {status === 'sent' && <div className="text-sm text-green-600">Sent!</div>}
        {status === 'error' && <div className="text-sm text-red-600">Error sending</div>}
      </div>
    </form>
  );
}
