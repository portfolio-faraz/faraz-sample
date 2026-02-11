import { useState } from 'react'
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1 className="brand-title">Faraz</h1>
          </div>

          {/* Desktop menu */}
          <div className="navbar-menu desktop">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="small"
                onClick={() => window.location.href = item.href}
                className="navbar-button"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-btn"
            >
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="medium"
              onClick={() => {
                window.location.href = item.href
                setIsOpen(false)
              }}
              className="mobile-navbar-button"
              style={{ width: '100%', justifyContent: 'flex-start' }}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
