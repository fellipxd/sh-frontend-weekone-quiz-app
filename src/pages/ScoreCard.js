import React, { useContext } from "react";
// import {useHistory} from "react-router-dom"
import Button from "../components/Button";
import AppContext from "../state/context";

const ScoreCard = () => {
  const { score, initial, setInitial, submit, setSubmit } = useContext(AppContext);
  // const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { initial, score };
    console.log(result);

    fetch("https://quizapp.topdatanig.com/send_score.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    }).then(() => {
      console.log("new blog added");
      setSubmit("Submitted")
      // setTimeout(() => {
      //   history.push("/")
      // }, 1000)
    });
  };

<<<<<<< HEAD
=======
  const { score } = useContext(AppContext);

>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
  return (
    <div>
      <h2>All done!</h2>
      <p>Your final score is {score}</p>
      <div className="initials">
        <span>Enter initials:</span>
        <div>
          <input
            type="text"
            onChange={(e) => setInitial(e.target.value.toUpperCase())}
            required
          />
        </div>
        <div>
          <Button text="Submit" onClick={handleSubmit} />
        </div>
      </div>
      <p>{submit}</p>
    </div>
  );
};

export default ScoreCard;
