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
            Ayywa Trading Company LLC, based in the heart of Dubai, is a dynamic and customer-focused enterprise specializing in sourcing and procurement solutions. We take pride in connecting businesses with reliable suppliers and high-quality products, leveraging Dubai's position as a global trade hub to deliver exceptional value and efficiency.
            </p>
            <p className="text-gray-600 mb-4">
            At Ayywa Trading Company, we simplify the complexities of international trade by offering tailored services that meet the unique needs of our clients. Our expertise spans various industries, ensuring we can source a wide range of products while adhering to the highest standards of quality, timeliness, and cost-effectiveness.
            </p>
            <p className="text-gray-600">
            Driven by a commitment to excellence, transparency, and innovation, our team of skilled professionals works closely with clients to understand their requirements and deliver optimal solutions. Whether you are looking for trusted suppliers, competitive pricing, or seamless logistics, Ayywa Trading Company LLC is your trusted partner in global trade.
            </p>
            <p className="text-gray-600">
            Let us help you navigate the global market with confidence and ease. Together, we build long-term partnerships and pave the way for your business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

