const PersonForm = ({handleSubmit,setNewName,setNewNumber,setPersons,persons,initial_data,newName,newNumber}) => {
    
    const handleOnChangeName = (event) => {
        setNewName(event.target.value)
    }
      const handleOnChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }
    return(
    <form onSubmit={handleSubmit}>
        <div>
          name: <input required value={newName} onChange={handleOnChangeName} />
        </div>
        <div>
          number: <input required value={newNumber} onChange={handleOnChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm