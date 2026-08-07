import { Link } from "react-router-dom";
import heroImage from "../assets/images/heroimage.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>
          Discover Your Next <span>Favorite Product</span>
        </h1>

        <p>
          Explore thousands of products from trusted sellers.
          Shop with confidence, enjoy secure payments,
          and discover amazing deals every day.
        </p>

        <Link to="/categories" className="btn">
          Shop Now
        </Link>

      </div>

      <div className="hero-image">

        <img
          src={heroImage}
          alt="Shopping"
        />

      </div>

    </section>
  );
}

export default Hero;