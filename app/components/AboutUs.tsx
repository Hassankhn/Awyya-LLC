import Image from 'next/image'
import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              alt="Ayywa Trading Company office"
              width={800}
              height={600}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Ayywa Trading Company LLC</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Ayywa Trading Company LLC has established itself as a leading player in the global trading industry. Based in the heart of Dubai, we leverage our strategic location to connect businesses across continents.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experienced professionals brings together a wealth of knowledge in international trade, logistics, and market analysis. We pride ourselves on our ability to navigate complex global markets and deliver tailored solutions to our clients.
            </p>
            <p className="text-gray-600">
              At Ayywa, we believe in building long-lasting relationships with our partners and clients. Our commitment to quality, reliability, and innovation has made us a trusted name in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

