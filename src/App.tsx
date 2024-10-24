
import { useState } from 'react'
import { Menu, X, Droplet, Leaf, BookOpen, Facebook, Twitter, Instagram } from 'lucide-react'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-green-600">Janat</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
              <a href="#about" className="text-gray-600 hover:text-green-500">About</a>
              <a href="#services" className="text-gray-600 hover:text-green-500">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-green-500">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-gray-600 hover:text-green-500 py-2">Home</a>
              <a href="#about" className="block text-gray-600 hover:text-green-500 py-2">About</a>
              <a href="#services" className="block text-gray-600 hover:text-green-500 py-2">Services</a>
              <a href="#contact" className="block text-gray-600 hover:text-green-500 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Innovative Underground Irrigation Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">Sustainable and efficient watering for a greener future.</p>
          <a href="#contact" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Get Started
          </a>
        </div>
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/placeholder.svg?height=600&width=1600"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Janat</h2>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Janat is dedicated to revolutionizing agriculture through innovative underground irrigation solutions. 
                Our focus is on developing sustainable watering systems that conserve water, enhance crop yields, 
                and promote environmental stewardship. By harnessing the power of technology and nature, 
                we're paving the way for a more sustainable and productive agricultural future.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Underground irrigation system"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplet, title: 'Underground Irrigation', description: 'Efficient water delivery systems for optimal plant growth.' },
              { icon: Leaf, title: 'Sustainable Gardening', description: 'Eco-friendly landscaping solutions for homes and businesses.' },
              { icon: BookOpen, title: 'Agricultural Consulting', description: 'Expert advice on modern farming techniques and water management.' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-green-500 hover:text-green-600 font-medium">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">Email: info@janatproject.com</p>
              <p className="text-gray-600 mb-4">Phone: +1 (555) 123-4567</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-500"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Janat Project</h3>
              <p className="text-gray-400">Innovative irrigation solutions for a sustainable future.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-500"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-green-500"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Janat Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
