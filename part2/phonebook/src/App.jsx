import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
    };

    setPersons(persons.concat(personsObject));
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, personsObject]);
    }
    console.log(personsObject.id);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
