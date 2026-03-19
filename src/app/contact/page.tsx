'use client';

import Link from 'next/link';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-blue-600">&larr; Back to home</Link>

      <section className="mt-6">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <p className="mb-6">Use the form below to get in touch. I'll wire this up to a backend later.</p>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
