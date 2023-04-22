import Button from "../components/Button";
import { useContext, useEffect } from "react";
import AppContext from "../state/context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    setEmail,
    setPassword,
    setCount,
    displayError,
    setDisplayError,
  } = useContext(AppContext);

  useEffect(() => {
    setCount(60);
  }, [setCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { email, password };
    console.log(result);

    fetch("https://quizapp.topdatanig.com/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          navigate("/login");
        } else {
          setDisplayError(data.message);
          setTimeout(() => {
            setDisplayError("");
          }, 3000);
        }
      });
  };
  return (
    <main>
      <div className="container">
        <h2 className="header">Sign Up</h2>
        <p className="header">Enter Details here</p>
        <div className="login-details">
          <div className="details">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="details">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                required
              />
            </div>
          </div>
          {displayError}
          <div className="btn-2">
            <Button onClick={handleSubmit} text="Submit" link="/login" />
            <Link to="/login">Already have an account? Go to Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
