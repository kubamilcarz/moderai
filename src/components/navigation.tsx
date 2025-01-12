"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navigation" className="fixed left-0 w-full top-2 z-50 m-2">
            <div className="w-full container mx-auto bg-slate-900 p-5 rounded-xl">
                <div className="flex flex-row justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>


                    {/* Hamburger Icon */}
                    <div
                        className="sm:hidden cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </div>

                    {/* Menu for larger screens */}
                    <ul className="hidden sm:flex flex-row space-x-5">
                        <li><a href="#features">Features</a></li>
                        {/* <li><a href="#">ModerKit</a></li> */}
                        {/* <li><a href="#">Try it</a></li> */}
                        <li><Link href="/blog">Blog</Link></li>
                        {/* <li><a href="#">Sign up</a></li> */}
                    </ul>
                </div>

                {/* Dropdown Menu for small screens */}
                {menuOpen && (
                    <ul className="flex flex-col mt-4 sm:hidden bg-slate-800 p-2 rounded-md">
                        <li><a href="#" className="block text-white p-2 hover:bg-slate-600 rounded-md">Features</a></li>
                        <li><a href="#" className="block text-white p-2 hover:bg-slate-600 rounded-md">ModerKit</a></li>
                        <li><a href="#" className="block text-white p-2 hover:bg-slate-600 rounded-md">Try it</a></li>
                        <li><a href="#" className="block text-white p-2 hover:bg-slate-600 rounded-md">Blog</a></li>
                        <li><a href="#" className="block text-white p-2 hover:bg-slate-600 rounded-md">Sign up</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}