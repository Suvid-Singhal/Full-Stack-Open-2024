const SearchFilter = ({initial_data,setSearchBox,setPersons,searchBox}) => {
    const handleOnChangeSearchBox = (event) => {
        setSearchBox(event.target.value)
        setPersons(initial_data)
        let temp=[]
        for(let i=0;i<initial_data.length;i++){
          if(initial_data[i].name.toLowerCase().includes(event.target.value.toLowerCase())){
            temp.push(initial_data[i])
          }
        }
        setPersons(temp)
    }  
  return(
    <div>
        filter shown with <input value={searchBox} onChange={handleOnChangeSearchBox} />
    </div>
  )
}

export default SearchFilter