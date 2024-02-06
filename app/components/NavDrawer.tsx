'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Cairo_Play } from 'next/font/google';
import NavButton from './NavButton';
import DarkModeButton from './DarkModeButton';

const cairo = Cairo_Play({ subsets: ["latin"] })

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <NavButton onClick={toggleIsOpen} />
      <div className={`drawer ${cairo.className} flex flex-col items-start justify-between absolute top-10 left-0 h-1/2 w-32 mt-10 pt-6 transform ${isOpen ? 'translate-x-2' : '-translate-x-full'} transition-transform duration-1000 ease-in-out z-20`}>

        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/" onClick={closeMenu}>
          home
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/bio" onClick={closeMenu}>
          bio
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/resume" onClick={closeMenu}>
          resume
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/projects" onClick={closeMenu}>
          projects
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/music" onClick={closeMenu}>
          music
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/writing" onClick={closeMenu}>
          writing
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 tracking-tighter subpixel-antialiased" href="/photos" onClick={closeMenu}>
          photos
        </Link>
        <DarkModeButton />
      </div>
    </>
  )
}