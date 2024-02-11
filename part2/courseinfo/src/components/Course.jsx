import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>
            ))}
          </ul>
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
