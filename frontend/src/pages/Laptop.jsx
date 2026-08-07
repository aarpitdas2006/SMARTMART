import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import laptop from "../assets/images/laptop.png";
import rog from "../assets/images/rog.png";
import macbook from "../assets/images/macbook.png";

function Laptop() {

  const { type } = useParams();

  const products = {
    rog: {
      name: "ROG Gaming Laptop",
      price: "₹1,29,999",
      image: rog,
      description:
        "Powerful gaming laptop designed for AAA gaming, streaming, programming, and content creation.",

      specs: [
        "Intel Core i9 14th Gen",
        "32GB DDR5 RAM",
        "2TB SSD",
        "NVIDIA RTX 4070 Graphics",
        "16-inch QHD 240Hz Display",
        "Windows 11"
      ]
    },

    business: {
      name: "Business Laptop",
      price: "₹64,999",
      image: laptop,
      description:
        "Lightweight laptop ideal for office work, coding, presentations, and everyday productivity.",

      specs: [
        "Intel Core i5 13th Gen",
        "16GB DDR4 RAM",
        "512GB SSD",
        "Intel Iris Xe Graphics",
        "15.6-inch Full HD Display",
        "Windows 11"
      ]
    },

    macbook: {
      name: "MacBook Air M3",
      price: "₹1,09,999",
      image: macbook,
      description:
        "Apple MacBook Air with the latest M3 chip delivering exceptional performance and battery life.",

      specs: [
        "Apple M3 Chip",
        "16GB Unified Memory",
        "512GB SSD",
        "13.6-inch Liquid Retina Display",
        "18 Hours Battery Life",
        "macOS Sequoia"
      ]
    }
  };

  const product = products[type];

  const addToWishlist = () => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const wishlistProduct = {
      name: product.name,
      price: product.price,
      image: product.image,
    };

    const exists = wishlist.find(
      (item) => item.name === wishlistProduct.name
    );

    if (!exists) {

      wishlist.push(wishlistProduct);

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

      <section className="product-details">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <h2>{product.price}</h2>

          <p>{product.description}</p>

          <h3>Specifications</h3>

          <ul>
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <button
            className="btn"
            onClick={addToWishlist}
          >
            ❤️ Add to Wishlist
          </button>

          <button
            className="btn"
            style={{ marginLeft: "15px" }}
            onClick={() => alert("Order Placed Successfully!")}
          >
            Buy Now
          </button>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Laptop;