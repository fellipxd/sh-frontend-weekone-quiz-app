import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AppContext from "../state/context";
import Cookies from 'js-cookie';

const Home = () => {
  const { handleClick, setCount } = useContext(AppContext);
  const navigate = useNavigate();
  const myCookie = Cookies.get('id');
  console.log("mine", myCookie)
  useEffect(() => {
    setCount(60);
    const loggedInFromSession = sessionStorage.getItem('loggedIn');
    console.log("session", loggedInFromSession)
    if (!loggedInFromSession) {
      navigate('/login');

    }
  }, [navigate, setCount]);



  return (
    <div>
      <h2>Coding Quiz Challenge</h2>
      <p>Try to answer the following code-related questions within the time limit.</p>
      <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
      <Button onClick={handleClick} text="Start Quiz" link="/questions" />
    </div>
  );
};

export default Home;
