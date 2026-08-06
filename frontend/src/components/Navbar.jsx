import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

const handleSearch = () => {
  const text = search.toLowerCase().trim();

  if (text.includes("laptop")) {
    navigate("/products/laptop");
  } else if (text.includes("headphone")) {
    navigate("/products/headphones");
  } else if (
    text.includes("watch") ||
    text.includes("smart watch")
  ) {
    navigate("/products/watch");
  } else if (
    text.includes("fashion") ||
    text.includes("shirt") ||
    text.includes("hoodie") ||
    text.includes("shoe") ||
    text.includes("handbag")
  ) {
    navigate("/fashion");
  } else if (
    text.includes("electronics") ||
    text.includes("products")
  ) {
    navigate("/electronics");
  } else {
    alert("No products found.");
  }

  setSearch("");
};

  return (
    <header>
      <div className="logo">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Smart<span>Mart</span>
        </Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/electronics">Products</Link>
        <Link to="/wishlist">Wishlist</Link>

        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;