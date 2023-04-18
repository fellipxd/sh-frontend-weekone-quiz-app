import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";

const Header = ({counter}) => {

  return (
      <nav>
        <Link to="/">View Highscores {<FaHandPointLeft />}</Link>
        <p>Time: {counter} </p>
      </nav>
  );
};

export default Header;
