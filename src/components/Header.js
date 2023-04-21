import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../state/context";

const Header = () => {
  const { count } = useContext(AppContext);

  return (
    <nav>
<<<<<<< HEAD
      <Link to="highscore">View Highscores {<FaHandPointLeft />}</Link>
=======
      <Link to="/high-score">View Highscores {<FaHandPointLeft />}</Link>
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
      <p>Time: {count} </p>
    </nav>
  );
};

export default Header;
