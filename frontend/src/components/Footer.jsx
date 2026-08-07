import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>SmartMart</h2>

          <p>
            SmartMart is your trusted online shopping destination,
            offering quality products, secure shopping, and a seamless
            experience for every customer.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </div>

        <div className="footer-column">

          <h3>Categories</h3>

          <Link to="/electronics">Electronics</Link>
          <Link to="/fashion">Fashion</Link>
          <a href="#">Home & Living</a>
          <a href="#">Gaming</a>

        </div>

        <div className="footer-column">

          <h3>Get in Touch</h3>

          <p>📧 support@smartmart.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Guwahati, Assam, India</p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>© 2026 SmartMart. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;