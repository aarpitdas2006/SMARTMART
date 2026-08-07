import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import laptop from "../assets/images/laptop.png";
import macbook from "../assets/images/macbook.png";
import rog from "../assets/images/rog.png";

function LaptopCollection() {
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

                <h1>Laptop Collection</h1>

                <p className="section-subtitle">
                    Choose the perfect laptop for gaming, work, and everyday use.
                </p>

                <div className="products-grid">

                    <div className="product-card">

                        <img src={rog} alt="ROG Gaming Laptop" />

                        <h2>ROG Gaming Laptop</h2>

                        <h3>₹1,29,999</h3>

                        <Link to="/products/laptop/rog">
                            View Product
                        </Link>

                        <button
                            className="wishlist-btn"
                            onClick={() =>
                                addToWishlist({
                                    name: "ROG Gaming Laptop",
                                    price: "₹1,29,999",
                                    image: rog,
                                })
                            }
                        >
                            ❤️ Add to Wishlist
                        </button>

                    </div>

                    <div className="product-card">

                        <img src={laptop} alt="Business Laptop" />

                        <h2>Business Laptop</h2>

                        <h3>₹64,999</h3>

                        <Link to="/products/laptop/business">
                            View Product
                        </Link>
                        <button
                            className="wishlist-btn"
                            onClick={() =>
                                addToWishlist({
                                    name: "Business Laptop",
                                    price: "₹64,999",
                                    image: laptop,
                                })
                            }
                        >
                            ❤️ Add to Wishlist
                        </button>

                    </div>

                    <div className="product-card">

                        <img src={macbook} alt="MacBook Air M3" />

                        <h2>MacBook Air M3</h2>

                        <h3>₹1,09,999</h3>

                        <Link to="/products/laptop/macbook">
                            View Product
                        </Link>

                        <button
                            className="wishlist-btn"
                            onClick={() =>
                                addToWishlist({
                                    name: "MacBook Air M3",
                                    price: "₹1,09,999",
                                    image: macbook,
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

export default LaptopCollection;