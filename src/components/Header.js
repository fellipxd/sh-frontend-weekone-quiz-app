import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">View Highscores {<FaHandPointLeft />}</Link>
        <p>Time:</p>
      </nav>
    </header>
  );
};

export default Header;
