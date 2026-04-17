import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar sporty-navbar">
      <div className="nav-container">
        <Link to="/" className="logo sporty-logo">
          <span className="logo-mark">LV</span>
          <span className="logo-text">Las Vegas Soccer Store</span>
        </Link>

        <nav className="nav-links sporty-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/shop" className="nav-shop-btn sporty-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;