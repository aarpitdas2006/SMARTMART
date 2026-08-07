import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch("https://smartmart-backend-3zrn.onrender.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setEmail("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    }
  };

  return (
  <section className="newsletter">

    <h2>Stay Updated</h2>

    <p>
      Get notified about new products and exclusive offers.
    </p>

    <div className="newsletter-box">

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>

    </div>

  </section>
);
}

export default Newsletter;