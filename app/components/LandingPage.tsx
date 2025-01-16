'use client'

import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react';

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)

  const spring = useSpring({
    transform: isOpen ? 'translateY(-100%)' : 'translateY(0%)',
    config: { mass: 1, tension: 280, friction: 60 }
  })

  return (
    <animated.div 
      style={spring} 
      className="fixed inset-0 z-50 bg-black"
    >
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai skyline featuring Burj Khalifa and modern skyscrapers"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ayywa Trading Company LLC</h1>
          <p className="text-xl md:text-2xl mb-8">Your Global Trading Partner</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Explore
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </animated.div>
  )
}

