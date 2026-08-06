import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import watch from "../assets/images/watch.png";

function Watch() {

  const addToWishlist = () => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const product = {
      name: "Smart Watch",
      price: "₹12,999",
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
          <img src={watch} alt="Smart Watch" />
        </div>

        <div className="product-info">

          <h1>Smart Watch</h1>

          <h2>₹12,999</h2>

          <p>
            Stay connected and monitor your health with heart-rate tracking,
            SpO₂ monitoring, GPS, fitness modes, and up to 10 days of battery
            life.
          </p>

          <h3>Specifications</h3>

          <ul>
            <li>AMOLED Display</li>
            <li>Heart Rate Monitor</li>
            <li>SpO₂ Sensor</li>
            <li>GPS</li>
            <li>10 Days Battery</li>
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

export default Watch;
