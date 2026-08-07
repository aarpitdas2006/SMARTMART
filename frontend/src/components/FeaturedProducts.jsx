import { Link } from "react-router-dom";

import laptop from "../assets/images/laptop.png";
import headphones from "../assets/images/headphones.png";
import watch from "../assets/images/watch.png";

function FeaturedProducts() {
  return (
    <section>

      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="product">
          <img src={laptop} alt="Laptop" />

          <h3>Laptop</h3>

          <p>₹65,000</p>

          <Link to="/products/laptop">
            View Product
          </Link>
        </div>

        <div className="product">
          <img src={headphones} alt="Headphones" />

          <h3>Headphones</h3>

          <p>₹3,499</p>

          <Link to="/products/headphones">
            View Product
          </Link>
        </div>

        <div className="product">
          <img src={watch} alt="Watch" />

          <h3>Smart Watch</h3>

          <p>₹5,999</p>

          <Link to="/products/watch">
            View Product
          </Link>
        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;