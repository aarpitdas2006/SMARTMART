import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headphones from "../assets/images/headphones.png";

function Headphones() {

  const addToWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const product = {
      name: "Wireless Headphones",
      price: "₹5,999",
    };

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

      <section className="product-details">

        <div className="product-image">
          <img src={headphones} alt="Headphones" />
        </div>

        <div className="product-info">

          <h1>Wireless Headphones</h1>

          <h2>₹5,999</h2>

          <p>
            Experience crystal-clear sound with deep bass, active noise
            cancellation, Bluetooth 5.3 connectivity, and up to 40 hours of
            battery life.
          </p>

          <h3>Specifications</h3>

          <ul>
            <li>Bluetooth 5.3</li>
            <li>Active Noise Cancellation</li>
            <li>40 Hours Battery</li>
            <li>Fast Charging</li>
            <li>Built-in Microphone</li>
          </ul>

          <button className="btn" onClick={addToWishlist}>
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

export default Headphones;