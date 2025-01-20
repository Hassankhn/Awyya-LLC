import { ShoppingCart, Search, TrendingUp } from 'lucide-react'

const services = [
  {
    title: "Import/Export",
    description: "Streamline your international trade with our comprehensive import/export services.",
    icon: ShoppingCart
  },
  {
    title: "Sourcing",
    description: "Find the best suppliers and products worldwide with our expert sourcing solutions.",
    icon: Search
  },
  {
    title: "Procurement",
    description: "Optimize your supply chain with our efficient procurement strategies and services.",
    icon: TrendingUp
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

