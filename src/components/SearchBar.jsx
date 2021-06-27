function SearchBar(props) {

  

    function handleSubmit(event)
    {
      event.preventDefault()
      props.setSearchQuery(event.target[0].value)  
      console.log(event.target[0].value)    
      console.log(event.target[1].value)    
      props.setSearchQueryTwo(event.target[1].value)    
      props.setRand(Math.random());
    }

  return (
      
    <form onSubmit={(event) => handleSubmit(event)}>
    <div>
      From: <input
        type="text"
        name="SearchFrom"
      />
       To:  <input
        type="text"
        name="SearchTo"
      />
    </div>
    <button type="submit">
      Submit
    </button>
  </form>
  

    );
  }
  
  export default SearchBar;
  