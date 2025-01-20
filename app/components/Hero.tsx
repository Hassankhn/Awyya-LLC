import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1920&q=80"
        alt="Dubai business district with modern architecture"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Welcome to Ayywa Trading</h2>
        <a 
          href="#contact" 
          className="inline-flex items-center bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

