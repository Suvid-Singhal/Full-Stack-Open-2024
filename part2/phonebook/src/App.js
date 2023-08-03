import { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

let initial_data = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchBox, setSearchBox] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const search=persons.find(person => person.name.toLowerCase()===newName.toLowerCase())
    if (search===undefined){
      initial_data.push({name:newName,number:newNumber,id:persons[persons.length-1].id+1})
      setPersons(persons.concat({name:newName,number:newNumber,id:persons[persons.length-1].id+1}))
    }
    else{
      alert(newName+" is already added to the phonebook")
    }
    setNewName('')
    setNewNumber('')
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter initial_data={initial_data} setSearchBox={setSearchBox} setPersons={setPersons} searchBox={searchBox} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons} persons={persons} initial_data={initial_data} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App