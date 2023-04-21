import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../state/context";

const Header = () => {
  const { count } = useContext(AppContext);

  return (
    <nav>
      <Link to="/high-score">View Highscores {<FaHandPointLeft />}</Link>
      <p>Time: {count} </p>
    </nav>
  );
};

export default Header;
