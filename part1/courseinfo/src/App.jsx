const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ course }) => {
  console.log(course);
  return (
    <>
      <p>
        {course.name} {course.exercises}
      </p>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course.parts[0]} />
      <Part course={course.parts[1]} />
      <Part course={course.parts[2]} />
    </>
  );
};

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((a, b) => a + b.exercises, 0);

  return (
    <>
      <p>Number of exercises: {totalExercises}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
