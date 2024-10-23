import './App.css'
import { ConnectButton } from 'thirdweb/react'
import { client } from './lib/client.ts'
import { baseSepolia } from 'thirdweb/chains'

function App() {
  console.log("Janat App rendered");

  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <>
      {/* Logo and Navbar */}
      <header>
        <div className="logo-container">
          <a href="https://janat.ma" target="_blank">
            <img src="https://example.com/janat-logo.png" className="logo" alt="Janat logo" />
          </a>
          <button onClick={toggleNavbar} className="navbar-toggle">
            {showNavbar ? "Hide Menu" : "Show Menu"}
          </button>
        </div>

        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#irrigation">Irrigation System</a></li>
            <li><a href="#nursery">Our Nursery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <main>
        <section id="home">
          <h1>Welcome to Janat.ma</h1>
          <p>Your solution for sustainable agriculture and landscaping in Morocco.</p>
      <div>
        <a href="https://thirdweb.com" target="_blank">
          <img src="https://thirdweb.com/brand/thirdweb-icon.png" className="logo" alt="thirdweb logo" />
        </a>
      </div>
      <h1>Build a PWA with thirdweb</h1>
      <div className="card">
        <ConnectButton chain={baseSepolia} client={client} />
      </div>
        </section>

        <section id="irrigation">
          <h2>The Janat Irrigation System</h2>
          <p>Our unique underground irrigation system provides consistent soil humidity through evaporation without direct water discharge. By installing 60cm diameter canals between plant rows, the system uses the evaporation of stored water to cool the soil and maintain root moisture throughout the year. When empty, the air chambers created in the canals help regulate soil temperature, ensuring optimal growth conditions.</p>
        </section>

        <section id="nursery">
          <h2>Our Nursery in Salé Maamoura</h2>
          <p>Janat.ma also offers a wide range of plants at our nursery in Salé Maamoura. We specialize in fruit trees, ornamental plants, and provide all the necessary greenery for landscaping projects.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Underground irrigation system installations</li>
            <li>Landscaping design and implementation</li>
            <li>Garden decoration and maintenance</li>
            <li>Custom planting solutions</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@janat.ma</p>
          <p>Phone: +212 6 XX XX XX XX</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Janat.ma | All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com/janat" target="_blank">Facebook</a>
          <a href="https://instagram.com/janat" target="_blank">Instagram</a>
          <a href="https://twitter.com/janat" target="_blank">Twitter</a>
        </div>
      </footer>
    </>
  );
}

export default App;

