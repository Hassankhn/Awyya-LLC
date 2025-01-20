import Header from "./components/Header";
import Hero from "./components/Hero"
import Services from "./components/Services"
import GlobalPresence from "./components/GlobalPresence"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <GlobalPresence />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

