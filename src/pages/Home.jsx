import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero sporty-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-tag">Las Vegas Soccer Store</p>
            <h1>Built For Players. Worn By Fans.</h1>
            <p className="hero-text">
              Jerseys, cleats, equipment, and match-day essentials for the Las Vegas soccer community.
            </p>

            <div className="hero-buttons">
              <Link to="/shop" className="btn">
                Shop Gear
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Team Orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-categories page-section">
        <div className="section-heading left-heading">
          <p className="section-label">Categories</p>
          <h2>Train Hard. Play Sharp.</h2>
        </div>

        <div className="category-grid">
          <div className="category-card sporty-card">
            <span className="card-stripe"></span>
            <h3>Jerseys</h3>
            <p>Club, national, retro, and fan-favorite kits.</p>
          </div>

          <div className="category-card sporty-card">
            <span className="card-stripe"></span>
            <h3>Cleats</h3>
            <p>Performance boots for speed, touch, and control.</p>
          </div>

          <div className="category-card sporty-card">
            <span className="card-stripe"></span>
            <h3>Equipment</h3>
            <p>Balls, shin guards, bags, cones, and training tools.</p>
          </div>

          <div className="category-card sporty-card">
            <span className="card-stripe"></span>
            <h3>Accessories</h3>
            <p>Socks, tape, sleeves, and player essentials.</p>
          </div>
        </div>
      </section>

      <section className="featured-products page-section">
        <div className="section-heading left-heading">
          <p className="section-label">Featured Gear</p>
          <h2>Top Picks This Season</h2>
        </div>

        <div className="product-grid">
          <div className="product-card sporty-product">
            <div className="product-image placeholder-box">Jersey</div>
            <div className="product-info">
              <span className="product-tag">Featured Drop</span>
              <h3>Match Jersey Collection</h3>
              <p>Game-ready looks with premium fit and fan appeal.</p>
            </div>
          </div>

          <div className="product-card sporty-product">
            <div className="product-image placeholder-box">Cleats</div>
            <div className="product-info">
              <span className="product-tag">Performance</span>
              <h3>Elite Cleat Selection</h3>
              <p>Explosive traction and comfort for every level.</p>
            </div>
          </div>

          <div className="product-card sporty-product">
            <div className="product-image placeholder-box">Training</div>
            <div className="product-info">
              <span className="product-tag">Essentials</span>
              <h3>Training Gear Pack</h3>
              <p>Everything needed for sessions, drills, and prep.</p>
            </div>
          </div>
        </div>

        <div className="section-cta left-cta">
          <Link to="/shop" className="btn">
            Browse All Gear
          </Link>
        </div>
      </section>

      <section className="why-choose-us page-section dark-panel">
        <div className="section-heading left-heading">
          <p className="section-label">Why Us</p>
          <h2>Your Local Soccer Gear Spot</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card sporty-benefit">
            <h3>For Local Players</h3>
            <p>We serve Las Vegas players, clubs, parents, and supporters.</p>
          </div>

          <div className="benefit-card sporty-benefit">
            <h3>Serious Gear</h3>
            <p>Products that look sharp and hold up in training and matches.</p>
          </div>

          <div className="benefit-card sporty-benefit">
            <h3>Team Support</h3>
            <p>Bulk orders and club support for local teams and programs.</p>
          </div>
        </div>
      </section>

      <section className="cta-banner sporty-banner">
        <div className="cta-banner-content">
          <h2>Need Team Orders or Custom Gear?</h2>
          <p>
            Reach out for club orders, jersey requests, or help finding the right gear.
          </p>
          <Link to="/contact" className="btn">
            Contact The Store
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;