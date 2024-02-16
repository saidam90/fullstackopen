const Persons = ({ persons, checkOverlap }) => {
  return (
    <>
      {persons.filter(checkOverlap).map((person) => {
        // console.log("Filtered Person:", person);
        return (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        );
      })}
    </>
  );
};

export default Persons;
