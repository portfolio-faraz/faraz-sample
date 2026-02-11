import Navbar from '../components/ui/Navbar'
import Silk from '../components/home/Silk'
import Button from '../components/ui/Button'
import './HomePage.css'
import ProductCarousel from '../components/ui/ProductCarousel'

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      {/* Silk Animation Hero Background */}
      <div className="silk-hero">
        <Silk 
          speed={3} 
          scale={2} 
          color="#3b82f6" 
          noiseIntensity={0.8} 
          rotation={0.5} 
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Faraz Store</h1>
          <p className="hero-subtitle">Discover amazing products at unbeatable prices</p>
          <div className="hero-buttons">
            <Button variant="primary" size="large">Shop Now</Button>
            <Button variant="secondary" size="large">View Catalog</Button>
          </div>
        </div>
      </div>
      
      <main className="home-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Faraz Store</h1>
            <p className="hero-subtitle">Discover amazing products at unbeatable prices</p>
            <div className="hero-buttons">
              <Button variant="primary" size="large">Shop Now</Button>
              <Button variant="secondary" size="large">View Catalog</Button>
            </div>
          </div>
        </section>

        {/* ProductCarousel Component */}
        <section className="white-containers-section">
          <div className="containers-grid">
            <div className="white-container">
              <ProductCarousel 
                items={[
                  {
                    title: 'Laptops',
                    description: 'High-performance laptops for work and gaming',
                    id: 1,
                    icon: '💻',
                    backgroundImage: 'https://picsum.photos/seed/laptop/400/300.jpg',
                    link: '/laptops'
                  },
                  {
                    title: 'MacBooks',
                    description: 'Apple laptops with premium features',
                    id: 2,
                    icon: '🍎',
                    backgroundImage: 'https://picsum.photos/seed/macbook/400/300.jpg',
                    link: '/macbooks'
                  },
                  {
                    title: 'Gaming Laptops',
                    description: 'Powerful machines for gaming enthusiasts',
                    id: 3,
                    icon: '🎮',
                    backgroundImage: 'https://picsum.photos/seed/gaming/400/300.jpg',
                    link: '/gaming-laptops'
                  },
                  {
                    title: 'Business Laptops',
                    description: 'Professional laptops for business use',
                    id: 4,
                    icon: '💼',
                    backgroundImage: 'https://picsum.photos/seed/business/400/300.jpg',
                    link: '/business-laptops'
                  }
                ]}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                pauseOnHover={true}
                onItemClick={(item) => {
                  console.log('Clicked item:', item);
                  // You can add navigation logic here
                  // window.location.href = item.link;
                  alert(`Navigating to: ${item.link}`);
                }}
              />
            </div>
            <div className="white-container">
              <ProductCarousel 
                items={[
                  {
                    title: 'iPhones',
                    description: 'Latest Apple smartphones with advanced features',
                    id: 1,
                    icon: '📱',
                    backgroundImage: 'https://picsum.photos/seed/iphone/400/300.jpg',
                    link: '/iphones'
                  },
                  {
                    title: 'Android Phones',
                    description: 'Wide range of Android smartphones',
                    id: 2,
                    icon: '🤖',
                    backgroundImage: 'https://picsum.photos/seed/android/400/300.jpg',
                    link: '/android-phones'
                  },
                  {
                    title: '5G Phones',
                    description: 'Next-generation 5G enabled devices',
                    id: 3,
                    icon: '📶',
                    backgroundImage: 'https://picsum.photos/seed/5g/400/300.jpg',
                    link: '/5g-phones'
                  },
                  {
                    title: 'Budget Phones',
                    description: 'Affordable smartphones for everyone',
                    id: 4,
                    icon: '💰',
                    backgroundImage: 'https://picsum.photos/seed/budget/400/300.jpg',
                    link: '/budget-phones'
                  }
                ]}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                pauseOnHover={true}
                onItemClick={(item) => {
                  console.log('Clicked item:', item);
                  // You can add navigation logic here
                  // window.location.href = item.link;
                  alert(`Navigating to: ${item.link}`);
                }}
              />
            </div>
            <div className="white-container">
              <ProductCarousel 
                items={[
                  {
                    title: 'Wireless Headphones',
                    description: 'Bluetooth headphones for music lovers',
                    id: 1,
                    icon: '🎧',
                    backgroundImage: 'https://picsum.photos/seed/headphones/400/300.jpg',
                    link: '/wireless-headphones'
                  },
                  {
                    title: 'Gaming Headsets',
                    description: 'Professional gaming audio equipment',
                    id: 2,
                    icon: '🎮',
                    backgroundImage: 'https://picsum.photos/seed/gaming-headset/400/300.jpg',
                    link: '/gaming-headsets'
                  },
                  {
                    title: 'Studio Headphones',
                    description: 'High-quality audio for professionals',
                    id: 3,
                    icon: '🎵',
                    backgroundImage: 'https://picsum.photos/seed/studio/400/300.jpg',
                    link: '/studio-headphones'
                  },
                  {
                    title: 'Sports Earbuds',
                    description: 'Wireless earbuds for active lifestyle',
                    id: 4,
                    icon: '🏃',
                    backgroundImage: 'https://picsum.photos/seed/sports/400/300.jpg',
                    link: '/sports-earbuds'
                  }
                ]}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                pauseOnHover={true}
                onItemClick={(item) => {
                  console.log('Clicked item:', item);
                  // You can add navigation logic here
                  // window.location.href = item.link;
                  alert(`Navigating to: ${item.link}`);
                }}
              />
            </div>
            <div className="white-container">
              <ProductCarousel 
                items={[
                  {
                    title: 'Apple Watch',
                    description: 'Smartwatch with health and fitness features',
                    id: 1,
                    icon: '⌚',
                    backgroundImage: 'https://picsum.photos/seed/applewatch/400/300.jpg',
                    link: '/apple-watch'
                  },
                  {
                    title: 'Samsung Watch',
                    description: 'Android smartwatch with advanced features',
                    id: 2,
                    icon: '📱',
                    backgroundImage: 'https://picsum.photos/seed/samsung/400/300.jpg',
                    link: '/samsung-watch'
                  },
                  {
                    title: 'Fitness Trackers',
                    description: 'Track your health and fitness goals',
                    id: 3,
                    icon: '💪',
                    backgroundImage: 'https://picsum.photos/seed/fitness/400/300.jpg',
                    link: '/fitness-trackers'
                  },
                  {
                    title: 'Luxury Watches',
                    description: 'Premium timepieces for style and elegance',
                    id: 4,
                    icon: '⭐',
                    backgroundImage: 'https://picsum.photos/seed/luxury/400/300.jpg',
                    link: '/luxury-watches'
                  }
                ]}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                pauseOnHover={true}
                onItemClick={(item) => {
                  console.log('Clicked item:', item);
                  // You can add navigation logic here
                  // window.location.href = item.link;
                  alert(`Navigating to: ${item.link}`);
                }}
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section">
          <div className="section-content">
            <h2 className="section-title">Featured Products</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <div className="placeholder-image">Product 1</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Premium Headphones</h3>
                  <p className="product-price">$99.99</p>
                  <Button variant="primary" size="small">Add to Cart</Button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <div className="placeholder-image">Product 2</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Smart Watch</h3>
                  <p className="product-price">$199.99</p>
                  <Button variant="primary" size="small">Add to Cart</Button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <div className="placeholder-image">Product 3</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Laptop Stand</h3>
                  <p className="product-price">$49.99</p>
                  <Button variant="primary" size="small">Add to Cart</Button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <div className="placeholder-image">Product 4</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Wireless Mouse</h3>
                  <p className="product-price">$29.99</p>
                  <Button variant="primary" size="small">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section">
          <div className="section-content">
            <h2 className="section-title">Shop by Category</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">
                  <div className="placeholder-image">Electronics</div>
                </div>
                <h3 className="category-title">Electronics</h3>
                <Button variant="outline" size="medium">Browse</Button>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <div className="placeholder-image">Fashion</div>
                </div>
                <h3 className="category-title">Fashion</h3>
                <Button variant="outline" size="medium">Browse</Button>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <div className="placeholder-image">Home & Living</div>
                </div>
                <h3 className="category-title">Home & Living</h3>
                <Button variant="outline" size="medium">Browse</Button>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <div className="placeholder-image">Sports</div>
                </div>
                <h3 className="category-title">Sports</h3>
                <Button variant="outline" size="medium">Browse</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="section">
          <div className="section-content">
            <h2 className="section-title">Special Offers</h2>
            <div className="offers-grid">
              <div className="offer-card">
                <div className="offer-badge">-50% OFF</div>
                <h3 className="offer-title">Flash Sale</h3>
                <p className="offer-description">Limited time offer on selected items</p>
                <Button variant="danger" size="medium">Shop Now</Button>
              </div>
              
              <div className="offer-card">
                <div className="offer-badge">FREE SHIPPING</div>
                <h3 className="offer-title">Free Delivery</h3>
                <p className="offer-description">On orders above $50</p>
                <Button variant="primary" size="medium">Learn More</Button>
              </div>
              
              <div className="offer-card">
                <div className="offer-badge">NEW</div>
                <h3 className="offer-title">New Arrivals</h3>
                <p className="offer-description">Check out the latest products</p>
                <Button variant="secondary" size="medium">View All</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="section-content">
            <div className="newsletter-content">
              <h2 className="section-title">Stay Updated</h2>
              <p className="section-text">Subscribe to our newsletter for exclusive deals and updates</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <Button variant="primary" size="medium">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage