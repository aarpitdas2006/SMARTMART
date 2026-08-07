import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import electronics from "../assets/images/electronics.png";
import fashion from "../assets/images/fashion.png";
import home from "../assets/images/home.png";
import gaming from "../assets/images/gaming.png";

function Categories() {
  return (
    <>
      <Navbar />

      <section className="categories-page">
        <h1>Explore Categories</h1>

        <p className="section-subtitle">
          Find the perfect products across our carefully curated collections.
        </p>

        <div className="categories-grid">

          {/* Electronics */}
          <div className="category-card electronics featured-category">
            <h2>Electronics</h2>

            <img
              src={electronics}
              alt="Electronics"
              className="category-showcase"
            />

            <p>
              Discover laptops, headphones and smart watches designed for work
              and entertainment.
            </p>

            <Link to="/electronics" className="explore-btn">
              Explore →
            </Link>
          </div>

          {/* Fashion */}
          <div className="category-card featured-category">
            <h2>Fashion</h2>

            <img
              src={fashion}
              alt="Fashion"
              className="category-showcase"
            />

            <p>
              Discover the latest trends in clothing, footwear, and accessories,
              thoughtfully curated to bring comfort, confidence, and timeless
              style to every wardrobe.
            </p>

            <Link to="/fashion" className="explore-btn">
              Explore →
            </Link>
          </div>

          {/* Home */}
          <div className="category-card home-category">
            <h2>Home & Living</h2>

            <img
              src={home}
              alt="Home"
              className="category-showcase"
            />

            <p>
              Discover elegant furniture, modern décor, lighting, and everyday
              essentials designed to create a warm and inviting home.
            </p>

            <span className="coming-soon">
              Coming Soon
            </span>
          </div>

          {/* Gaming */}
          <div className="category-card gaming-category">
            <h2>Gaming</h2>

            <img
              src={gaming}
              alt="Gaming"
              className="category-showcase"
            />

            <p>
              Experience immersive gaming with powerful consoles, RGB
              accessories, and high-performance gear built for every gamer.
            </p>

            <span className="coming-soon">
              Coming Soon
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Categories;