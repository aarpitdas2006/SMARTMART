import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    const response = await fetch("https://smartmart-backend-3zrn.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  }
};
  return (
    <section className="register-page">
      <div className="register-card">

        <h1>Welcome Back</h1>

        <p className="register-subtitle">
          Login to your SmartMart account.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="login-link">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;