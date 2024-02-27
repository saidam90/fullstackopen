import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNumber(event.target.value);
  };

  const checkOverlap = (person) => {
    if (person && person.name) {
      const filtered = person.name.toLowerCase().includes(search.toLowerCase());
      return filtered;
    }
    return false;
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // console.log("effect");
    personService //break
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: number,
    };

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to phonebook. Replace the old number with the new one?`
        )
      ) {
        personService.update(existingPerson.id, { number }).then(() => {
          setPersons((prevPersons) =>
            prevPersons.map((person) =>
              person.id !== existingPerson.id ? person : { ...person, number }
            )
          );
          setNewName("");
          setNumber("");
        });
      }
    } else {
      personService //break
        .create(personsObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNumber("");
        });
    }
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => {
      // console.log(person.id);
      // console.log(id);
      return person.id === id;
    });
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .deleteName(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        checkOverlap={checkOverlap}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
