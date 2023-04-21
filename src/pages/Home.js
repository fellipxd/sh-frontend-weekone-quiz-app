import Button from "../components/Button";

const Home = () => {
<<<<<<< HEAD
=======
  const { handleClick, setCount } = useContext(AppContext);
  setCount(60)
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
  return <div>
    <h2>Coding Quiz Challenge</h2>
    <p>Try to answer the following code-related questions withing the time limit.</p>
    <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
<<<<<<< HEAD
    <Button text="Start Quiz" link="/login" />
=======
    <Button onClick={handleClick} text="Start Quiz" link="/questions" />
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
  </div>;
};

export default Home;
