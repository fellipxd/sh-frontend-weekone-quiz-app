import Button from "../components/Button";
import { useContext } from "react";
import AppContext from "../state/context";

const Landing = () => {
  const { setCount } = useContext(AppContext);
  setCount(60);
  return (
    <main>
      <div className="container">
        <h2 className="header">How solid is your Javascript</h2>
        <h3 className="header">Lets find out</h3>
        <div className="btn-wrapper">
          <div className="btn">
            <Button text="Signup" link="/signup" />
          </div>
          <div className="btn">
            <Button text="Login" link="/login" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
