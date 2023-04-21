import { useContext, useEffect } from "react";
import Button from "../components/Button";
import AppContext from "../state/context";

const Home = () => {
  const { handleClick, setCount } = useContext(AppContext);

  useEffect(() => {
    setCount(60);
  }, []);
  return <div>
    <h2>Coding Quiz Challenge</h2>
    <p>Try to answer the following code-related questions withing the time limit.</p>
    <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
    <Button onClick={handleClick} text="Start Quiz" link="/questions" />
  </div >;
};

export default Home;
