import React, { useState, useEffect } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search, setSearch] = useState('');

  const handleNameChange = e => {
    const {value} = e.target;
    setNewName(value);
  }

  const handleNumberChange = e => {
    const {value} = e.target;
    setNewNumber(value)
  }

  const handleAddContact = (e) => {
    e.preventDefault();
    const filterContact = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase() || person.phone.toLowerCase() === newNumber.toLowerCase());
    if (!filterContact.length) {
      setPersons(prevPerson => (
        [...prevPerson, { name: newName, phone: newNumber }]
      ));
    }else{
      alert(`${newName} is already added to phonebook`);
    }
    setNewName('');
    setNewNumber('');
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    // setSearch(value);
    const search =  persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()) || person.number.toLowerCase().includes(value.toLowerCase()));
    setPersons(search);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with<input type="search" onChange={handleSearch} name="search" placeholder="Search" />

      <h3>Add a new Contact</h3>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} placeholder="Name" id="name" />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} placeholder="telephone" id="telephone" type="tel" />
        </div>
        <div>
          <br />
          <button type="submit" onClick={handleAddContact}>add</button>
        </div>
      </form>
      <h2>Phonebook</h2>
      {persons.map((person, i) => <p key={i}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App