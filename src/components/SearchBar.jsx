function SearchBar(props) {

    function handleSubmit(event)
    {
        event.preventDefault()
        console.log(event)
        props.setSearchQuery(event.target[0].value)
    }

    return (
      <>
      <p>Search</p>
      <form className="SearchBar" onSubmit={(event) => handleSubmit(event)}>
            <input name="Search" />
            <input type="submit"></input>
      </form>
      </>
    );
  }
  
  export default SearchBar;
  