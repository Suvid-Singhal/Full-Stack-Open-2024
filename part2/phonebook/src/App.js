import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

let initial_data = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]
const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchBox, setSearchBox] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const search=persons.find(person => person.name.toLowerCase()===newName.toLowerCase())
    const newID = String(Number(persons[persons.length-1].id)+1)
    
    if (search===undefined){
      const newObject = {name:newName,number:newNumber,id:newID}
      personService
      .create(newObject)
      .then(response => {
        initial_data.push(response)
        setPersons(persons.concat(response))
      })
      
    }
    else{
      const ID = persons[persons.length-1].id
      const newObject = {name:newName,number:newNumber,id:ID}
      if(window.confirm(`${newObject.name} is already added to the phonebook, replace the old number with a new one?`)){
        personService
        .update(ID, newObject)
        .then(response => {
          setPersons(persons.map(person => person.id !== ID ? person : newObject))
        }) 
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id, name) => {
    if(window.confirm("Delete "+name)){
      const request = personService.deletePerson(id)
      request.then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter initial_data={initial_data} setSearchBox={setSearchBox} setPersons={setPersons} searchBox={searchBox} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons} persons={persons} initial_data={initial_data} />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App