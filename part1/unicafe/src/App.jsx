import { useState } from "react";
import "./index.css";

const Button = ({ onClick, text }) => {
  // console.log(text);
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
  // console.log(handleGoodClicks);

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

const Statistics = ({
  good,
  neutral,
  bad,
  clicks,
  countAverage,
  positivePercentage,
}) => {
  console.log(clicks);
  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {clicks}</p>
        <p>average {countAverage}</p>
        <p>positive {positivePercentage} %</p>
      </div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [clicks, allClicks] = useState(0);

  const handleGoodClicks = () => {
    allClicks(clicks + 1);
    setGood(() => good + 1);
  };

  const handleNeutralClicks = () => {
    allClicks(clicks + 1);
    setNeutral(() => neutral + 1);
  };

  const handleBadClicks = () => {
    allClicks(clicks + 1);
    setBad(() => bad + 1);
  };

  const countAverage = () => {
    return (good + neutral + bad) / 3;
  };

  const positivePercentage = () => {
    return clicks > 0 ? (good / clicks) * 100 : 0;
  };

  return (
    <div>
      <Feedback
        handleGoodClicks={handleGoodClicks}
        handleNeutralClicks={handleNeutralClicks}
        handleBadClicks={handleBadClicks}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        clicks={clicks}
        countAverage={countAverage()}
        positivePercentage={positivePercentage()}
      />
    </div>
  );
};

export default App;
