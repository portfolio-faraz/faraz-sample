import Navbar from '../components/ui/Navbar'
import Button from '../components/ui/Button'
import './ComponentsPage.css'
import ProductCarousel from '../components/ui/ProductCarousel'

const ComponentsPage = () => {
  return (
    <div className="components-page">
      <Navbar />
      
      <main className="components-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">UI Components Library</h1>
            <p className="hero-subtitle">Explore all available components with different variants and states</p>
          </div>
        </section>

        {/* Button Component */}
        <section className="component-section">
          <div className="section-content">
            <h2 className="section-title">Button Component</h2>
            <div className="component-demo">
              <div className="demo-group">
                <h3>Button Variants</h3>
                <div className="demo-grid">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              <div className="demo-group">
                <h3>Button Sizes</h3>
                <div className="demo-grid">
                  <Button variant="primary" size="small">Small</Button>
                  <Button variant="primary" size="medium">Medium</Button>
                  <Button variant="primary" size="large">Large</Button>
                  <Button variant="primary" size="xlarge">XLarge</Button>
                </div>
              </div>

              <div className="demo-group">
                <h3>Button States</h3>
                <div className="demo-grid">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button variant="primary" className="btn-loading">Loading</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ProductCarousel Component */}
        <section className="component-section">
          <div className="section-content">
            <h2 className="section-title">ProductCarousel Component</h2>
            <p className="section-text">
              Interactive carousel with smooth animations and drag functionality.
            </p>
            <div className="component-demo">
              <div className="demo-group">
                <h3>Default Carousel</h3>
                <div className="carousel-demo">
                  <ProductCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navbar Component */}
        <section className="component-section">
          <div className="section-content">
            <h2 className="section-title">Navbar Component</h2>
            <div className="component-demo">
              <div className="demo-group">
                <h3>Features</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <h4>✅ Responsive Design</h4>
                    <p>Works seamlessly on desktop and mobile devices</p>
                  </div>
                  <div className="feature-item">
                    <h4>✅ Mobile Menu</h4>
                    <p>Hamburger menu with smooth animations</p>
                  </div>
                  <div className="feature-item">
                    <h4>✅ Smooth Scrolling</h4>
                    <p>Anchor links with smooth scroll behavior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ComponentsPage
