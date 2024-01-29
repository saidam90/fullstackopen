const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ parts }) => {
  // console.log(parts);
  return (
    <>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((a, b) => a + b.exercises, 0);

  return (
    <>
      <p>Number of exercises: {totalExercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
