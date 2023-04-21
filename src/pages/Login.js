import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useContext, useState } from "react";
import AppContext from "../state/context";


const Login = () => {

  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, setCount } = useContext(AppContext);
  const [displayError, setDisplayError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { email, password };
    console.log(result);

    fetch("https://quizapp.topdatanig.com/signin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.message);
      if (data.message === "signed in.") {
        navigate("/home");
      } else {
        setDisplayError(true)
      }
    });

  };

  setCount(60);
  return (
    <div>
      <h2 className="header">Login</h2>
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
        {displayError && <p>User doesn't exists</p>}
        <div className="btn">
          <Button onClick={handleSubmit} text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Login;
