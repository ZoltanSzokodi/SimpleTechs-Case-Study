import React, { useState } from 'react';
import './App.css';

// 3rd party lib
import { v4 as uuidv4 } from 'uuid';

// Components
import Form from './components/Form';
import SavingsCheck from './components/SavingsCheck';
import List from './components/List';

// Person Class
import Person from './class/Person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({ name: '', age: '' });
  const [savingsVal, setSavingsVal] = useState(0);
  const [savings, setSavings] = useState(0);

  // Form input handler
  const handleFormChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  // Savings check input handler
  const handleSavingsChange = e => {
    setSavingsVal(e.target.value);
  };

  // OnClick check persons savings
  const checkSavings = () => {
    setSavings(savingsVal);
  };

  // OnClick increment savings by +100
  const addPaycheck = id => {
    const afterPayday = persons.map(p => {
      if (p.getID() === id) p.givePaycheck();
      return p;
    });

    setPersons(afterPayday);
  };

  // Submit form data to list
  const handleSubmit = e => {
    e.preventDefault();

    // Instantiate new Person
    const newPerson = new Person();

    // Set attributes on new instance with setters
    newPerson.setID(uuidv4());
    newPerson.setName(person.name);
    newPerson.setAge(person.age);

    // Add newPerson instance to the list
    setPersons(persons.concat(newPerson));

    // Reset form data
    setPerson({ name: '', age: '' });
  };

  return (
    <div className='container'>
      <Form
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
        person={person}
      />
      <SavingsCheck
        handleSavingsChange={handleSavingsChange}
        checkSavings={checkSavings}
        savingsVal={savingsVal}
      />
      <List addPaycheck={addPaycheck} persons={persons} savings={savings} />
    </div>
  );
};

export default App;
