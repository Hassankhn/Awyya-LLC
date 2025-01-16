import { Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Ayywa Trading Company LLC</span>
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="#global-presence" className="text-gray-600 hover:text-blue-600">Global Presence</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

