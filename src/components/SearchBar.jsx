function SearchBar(props) {

  

    function handleSubmit(event)
    {
      event.preventDefault()
      props.setSearchQuery(event.target[0].value)      
    }

  return (
      
    <form onSubmit={(event) => handleSubmit(event)}>
    <div>
      <input
        type="text"
        name="Search"
      />
    </div>
    <button type="submit">
      Submit
    </button>
  </form>
  

    );
  }
  
  export default SearchBar;
  