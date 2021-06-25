function SearchBar(props) {

    function handleSubmit(event)
    {
        event.preventDefault()
      
    }

    return (
      <form className="SearchBar" onSubmit={(event) => handleSubmit(event)}>
            <input name="Search" onChange={(event) => props.setSearchQuery(event.target.value)} />
      </form>
    );
  }
  
  export default SearchBar;
  