const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ parts }) => {
  return (
    <>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </>
  );
};

export default App;
