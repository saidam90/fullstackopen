const Course = ({ course }) => {
  return (
    <ul>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
    </ul>
  );
};

export default Course;
