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
    const filtered = person.name.toLowerCase().includes(search.toLowerCase());
    return filtered;
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

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, personsObject]);
    }

    personService //break
      .create(personsObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
      });
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => {
      console.log(person.id);
      console.log(id);
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
