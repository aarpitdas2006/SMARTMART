import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import tshirt from "../assets/images/tshirt.png";
import shoes from "../assets/images/shoes.png";
import handbag from "../assets/images/handbag.png";
import hoodie from "../assets/images/hoodie.png";

function Fashion() {

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

        <h1>Fashion Collection</h1>

        <p className="section-subtitle">
          Discover trendy clothing, stylish footwear, and premium accessories
          carefully curated for every occasion.
        </p>

        <div className="products-grid">

          <div className="product-card">

            <img src={tshirt} alt="T-Shirt" />

            <h2>Premium Cotton T-Shirt</h2>

            <h3>₹999</h3>

            <Link to="#">
              View Product
            </Link>

            <button
              className="wishlist-btn"
              onClick={() =>
                addToWishlist({
                  name: "Premium Cotton T-Shirt",
                  price: "₹999",
                })
              }
            >
              ❤️ Add to Wishlist
            </button>

          </div>

          <div className="product-card">

            <img src={shoes} alt="Shoes" />

            <h2>Casual Sneakers</h2>

            <h3>₹2,499</h3>

            <Link to="#">
              View Product
            </Link>

            <button
              className="wishlist-btn"
              onClick={() =>
                addToWishlist({
                  name: "Casual Sneakers",
                  price: "₹2,499",
                })
              }
            >
              ❤️ Add to Wishlist
            </button>

          </div>

          <div className="product-card">

            <img src={handbag} alt="Handbag" />

            <h2>Elegant Handbag</h2>

            <h3>₹1,799</h3>

            <Link to="#">
              View Product
            </Link>

            <button
              className="wishlist-btn"
              onClick={() =>
                addToWishlist({
                  name: "Elegant Handbag",
                  price: "₹1,799",
                })
              }
            >
              ❤️ Add to Wishlist
            </button>

          </div>

          <div className="product-card">

            <img src={hoodie} alt="Hoodie" />

            <h2>Classic Hoodie</h2>

            <h3>₹1,599</h3>

            <Link to="#">
              View Product
            </Link>

            <button
              className="wishlist-btn"
              onClick={() =>
                addToWishlist({
                  name: "Classic Hoodie",
                  price: "₹1,599",
                })
              }
            >
              ❤️ Add to Wishlist
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Fashion;