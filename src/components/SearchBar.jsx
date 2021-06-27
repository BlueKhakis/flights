function SearchBar(props) {

  

    function handleSubmit(event)
    {
      event.preventDefault()
      props.setSearchQuery(event.target[0].value)      
      props.setSearchQueryTwo(event.target[1].value)      
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
  