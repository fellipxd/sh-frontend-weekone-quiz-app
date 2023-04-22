import React, { useContext, useEffect } from "react";
// import {useHistory} from "react-router-dom"
import Button from "../components/Button";
import AppContext from "../state/context";
import { useNavigate } from "react-router";

const ScoreCard = () => {
  const navigate = useNavigate();

  const { score, initials, setInitials, submit, setSubmit, setCount } =
    useContext(AppContext);

  useEffect(() => {
    setCount(0);
  }, [setCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = sessionStorage.getItem("loggedIn")
    const user_id = parseInt(user)
    console.log(user_id)
    const result = { user_id, initials, score };
    console.log(result);

    fetch("https://quizapp.topdatanig.com/send_score.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSubmit("Submitted");
      });
  };


  const handleSignout = () => {
    sessionStorage.clear()
    navigate("/");
  };

  return (
    <div>
      <h2>All done!</h2>
      <p>Your final score is {score}</p>
      <div className="initials">
        <span>Enter initials:</span>
        <div>
          <input
            type="text"
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
            required
          />
        </div>
        <div>
          <Button text="Submit" onClick={handleSubmit} />
        </div>
      </div>
      {submit && (
        <Button className="signout" onClick={handleSignout} text="Signout" />

      )}
    </div>
  );
};

export default ScoreCard;
