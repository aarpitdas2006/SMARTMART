import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(items);
  }, []);

  const removeItem = (name) => {
    const updated = wishlist.filter(
      (item) => item.name !== name
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Navbar />

      <section className="products-page">

        <h1>My Wishlist ❤️</h1>

        <p className="section-subtitle">
          Save your favourite products for later.
        </p>

        <div className="products-grid">

          {wishlist.length === 0 ? (
            <h2>Your Wishlist is Empty.</h2>
          ) : (
            wishlist.map((item, index) => (
              <div
                className="product-card"
                key={index}
              >
                <h2>{item.name}</h2>

                <h3>{item.price}</h3>

                <button
                  className="wishlist-btn"
                  onClick={() =>
                    removeItem(item.name)
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Wishlist;