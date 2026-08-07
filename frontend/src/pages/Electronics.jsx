import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import laptop from "../assets/images/laptop.png";
import headphones from "../assets/images/headphones.png";
import watch from "../assets/images/watch.png";

function Electronics() {

  const addToWishlist = (product) => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item.name === product.name
    );

    if (!exists) {
      wishlist.push(product);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist");
    }
  };

  return (
    <>
      <Navbar />

      <section className="products-page">

        <h1>Our Products</h1>

        <p className="section-subtitle">
          Explore our latest collection of premium electronics designed for
          performance, entertainment, and everyday productivity.
        </p>

        <div className="products-grid">

          <div className="product-card">

            <img src={laptop} alt="Laptop" />

            <h2>Gaming Laptop</h2>

            <h3>₹79,999</h3>

            <Link to="/laptops">
              View Product
            </Link>

            

          </div>

          <div className="product-card">

            <img src={headphones} alt="Headphones" />

            <h2>Wireless Headphones</h2>

            <h3>₹5,999</h3>

            <Link to="/products/headphones">
              View Product
            </Link>

            

          </div>

          <div className="product-card">

            <img src={watch} alt="Smart Watch" />

            <h2>Smart Watch</h2>

            <h3>₹12,999</h3>

            <Link to="/products/watch">
              View Product
            </Link>

            

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Electronics;