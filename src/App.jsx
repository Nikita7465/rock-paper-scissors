import { useState } from "react";
import "./App.css";
import Modal from "./modal/Modal";

function App() {
  const [compImg, setCompImg] = useState("question-mark");

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const [result, setResult] = useState("");

  const [isModalShow, setIsModalShow] = useState(false);

  const INFO = ["rock", "paper", "scissors"];

  const limit = 10;

  const updateScore = (setScore) => {
    setScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore === limit) {
        setIsModalShow(true);
      }

      return newScore;
    });
  };

  const userWin = () => {
    updateScore(setUserScore);
    setResult("You Win");
  };

  const userLose = () => {
    updateScore(setCompScore);
    setResult("You Lose");
  };

  const draw = () => {
    setResult("Draw");
  };

  const choiceHandler = (userValue) => {
    const compValue = INFO[Math.floor(Math.random() * INFO.length)];
    setCompImg(compValue);

    const rules = {
      rock: { rock: draw, scissors: userWin, paper: userLose },
      scissors: { rock: userLose, scissors: draw, paper: userWin },
      paper: { rock: userWin, scissors: userLose, paper: draw },
    };

    rules[userValue][compValue]();
  };

  const reset = () => {
    setUserScore(0);
    setCompScore(0);

    setCompImg("question-mark");

    setResult("");

    setIsModalShow(false);
  };

  return (
    <div className="App">
      {isModalShow ? <Modal result={result} reset={reset} /> : null}

      <div className="container">
        <div className="score_wrap">
          <h3 className="score">
            You:{" "}
            <span>
              {userScore}/{limit}
            </span>
          </h3>
          <h3 className="score">
            Computer:{" "}
            <span>
              {compScore}/{limit}
            </span>
          </h3>
        </div>

        <hr />

        <div className="main">
          <div className="user_img_wrap">
            <button
              className="img_btn"
              onClick={() => choiceHandler(INFO[0])}
              disabled={isModalShow}
            >
              <img src="rock.png" alt="" className="rock img" />
            </button>

            <button
              className="img_btn"
              onClick={() => choiceHandler(INFO[1])}
              disabled={isModalShow}
            >
              <img src="paper.png" alt="" className="paper img" />
            </button>

            <button
              className="img_btn"
              onClick={() => choiceHandler(INFO[2])}
              disabled={isModalShow}
            >
              <img src="scissors.png" alt="" className="scissors img" />
            </button>
          </div>

          <div className="result_text_wrap">
            <span className="result_text">{result}</span>
          </div>

          <div className="comp">
            <div className="comp_img_wrap">
              <img src={`${compImg}.png`} alt="" className="comp_img img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
