import Button from "../components/Button";
import { useContext } from "react";
import AppContext from "../state/context";

const SignUp = () => {
  const { email, password, setEmail, setPassword, submit, setSubmit, setCount } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { email, password };
    console.log(result);

    fetch("https://quipapp.000webhostapp.com/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    }).then((res) => {
      console.log("new blog added", res.json());
      return res.json()
    });
  };
  setCount(60);
  return (
    <div>
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
              type="email" id="email" required />
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
              type="password" id="password" required />
          </div>
        </div>
        <div className="btn">
          <Button onClick={handleSubmit} text="Submit" link="/login" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
