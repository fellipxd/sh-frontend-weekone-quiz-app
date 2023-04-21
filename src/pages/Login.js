import Button from "../components/Button";
import { useContext } from "react";
import AppContext from "../state/context";

const Login = () => {
  const { handleClick, count } = useContext(AppContext);

  return (
    <div>
      <h2>Login Page</h2>
      <p>Enter Details here</p>
      <div className="login-details">
        <div className="details">
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className="details">
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input type="email" id="email" required />
          </div>
        </div>
        <div className="btn">
          <Button text="Submit" link="/home" />
        </div>
      </div>
    </div>
  );
};

export default Login;
