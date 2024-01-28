const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ parts, exercises }) => {
  return (
    <>
      <p>
        {parts} {exercises}
      </p>
    </>
  );
};

const Content = ({ parts, exercises }) => {
  return (
    <>
      <Part parts={parts[0]} exercises={exercises[0]} />
      <Part parts={parts[1]} exercises={exercises[1]} />
      <Part parts={parts[2]} exercises={exercises[2]} />
    </>
  );
};

const Total = ({ exercises }) => {
  const totalExercises = exercises.reduce((a, b) => a + b, 0);

  return (
    <>
      <p>Number of exercises: {totalExercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </>
  );
};

export default App;
