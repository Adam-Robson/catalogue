'use client';

import Link from 'next/link';
import { 
  LinkedinLogoIcon, 
  GithubLogoIcon, 
  InstagramLogoIcon 
} from '@phosphor-icons/react';


export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800 w-full">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="text-sm">&copy; {new Date().getFullYear()}</div>
        <div className="flex gap-4">
          <Link href="https://linkedin.com/in/adamrayrobson" aria-label="social-1" className="text-sm"><LinkedinLogoIcon /></Link>
          <Link href="https://github.com/adam-robson" aria-label="social-2" className="text-sm"><GithubLogoIcon /></Link>
          <Link href="https://instagram.com/adamrayrobson" aria-label="social-3" className="text-sm"><InstagramLogoIcon /></Link>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
    </footer>
  );
}
