import React, { useContext, useEffect } from "react";
// import {useHistory} from "react-router-dom"
import Button from "../components/Button";
import AppContext from "../state/context";
import { useNavigate } from "react-router";

const ScoreCard = () => {
  const navigate = useNavigate();

  const { score, initials, setInitials, submit, setSubmit, setCount } =
    useContext(AppContext);

  setCount(0);
  useEffect(() => {
    const loggedInFromSession = sessionStorage.getItem("loggedIn");
    if (!loggedInFromSession) {
      navigate("/login");
    }
  }, [navigate, setCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = sessionStorage.getItem("loggedIn");
    const user_id = parseInt(user);
    console.log(user_id);
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
        setSubmit("Score submitted");
      });
  };

  const handleSignout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h2>All done!</h2>
      <p>Your final score is {score}</p>
      <div className="mt-1">
        {submit === "" ? (
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
        ) : (
          <div className="initials">
            <span className="success">{submit}</span>
            <div>
              <Button link="/login" onClick={handleSignout} text="Signout" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreCard;
