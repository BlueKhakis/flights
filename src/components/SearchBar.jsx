function SearchBar(props) {

    function handleSubmit(event)
    {
        event.preventDefault()
        event.target.blur()
    }

    return (
      <form className="SearchBar" onSubmit={(event) => handleSubmit(event)}>
            <input name="countrySearch" onChange={(event) => props.setSearchQuery(event.target.value)} />
      </form>
    );
  }
  
  export default SearchBar;
  