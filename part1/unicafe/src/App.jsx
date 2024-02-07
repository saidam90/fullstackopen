import { useState } from "react";
import "./index.css";

const Button = ({ onClick, text }) => {
  console.log(onClick);
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const Feedback = ({
  handleGoodClicks,
  handleNeutralClicks,
  handleBadClicks,
}) => {
  console.log(handleGoodClicks);

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className="buttons">
        <Button onClick={handleGoodClicks} text="good" />
        <Button onClick={handleNeutralClicks} text="neutral" />
        <Button onClick={handleBadClicks} text="bad" />
      </div>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClicks = () => {
    setGood(() => good + 1);
  };

  const handleNeutralClicks = () => {
    setNeutral(() => neutral + 1);
  };

  const handleBadClicks = () => {
    setBad(() => bad + 1);
  };

  return (
    <div>
      <Feedback
        handleGoodClicks={handleGoodClicks}
        handleNeutralClicks={handleNeutralClicks}
        handleBadClicks={handleBadClicks}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
