import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="border border-red-500 max-w-screen-md mx-auto h-screen px-4 py-12">
      <Link href="/" className="text-sm text-blue-600">&larr; Home</Link>

      <section className="mt-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image src="/images/adaam.png" alt="About image" width={600} height={400} className="rounded shadow" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">About</h1>
          <p className="text-base leading-relaxed">This is a placeholder paragraph for your about page. Replace this text with your bio or information about the project. The layout places an image adjacent to this paragraph on larger screens and stacks on smaller screens.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
