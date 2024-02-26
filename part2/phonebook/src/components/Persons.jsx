const Persons = ({ persons, checkOverlap, deletePerson }) => {
  return (
    <>
      {persons.filter(checkOverlap).map((person) => {
        // console.log("Filtered Person:", person);
        return (
          <div key={person.name}>
            {person.name} {person.number}
            <button type="delete" onClick={() => deletePerson(person.id)}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Persons;
