import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import laptop from "../assets/images/laptop.png";

function Laptop() {

  const addToWishlist = () => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const product = {
      name: "Gaming Laptop",
      price: "₹79,999",
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

          <img src={laptop} alt="Gaming Laptop" />

        </div>

        <div className="product-info">

          <h1>Gaming Laptop</h1>

          <h2>₹79,999</h2>

          <p>
            High-performance gaming laptop powered by the latest processor,
            dedicated graphics, and a high refresh-rate display for gaming,
            programming, and content creation.
          </p>

          <h3>Specifications</h3>

          <ul>
            <li>Intel Core i7 Processor</li>
            <li>16GB DDR5 RAM</li>
            <li>1TB SSD Storage</li>
            <li>NVIDIA RTX Graphics</li>
            <li>15.6-inch Full HD Display</li>
            <li>Windows 11</li>
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