function SearchBar(props) {

  

    function handleSubmit(event)
    {
<<<<<<< HEAD
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
=======
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
  

>>>>>>> 9b510b905a764d633fb28920e51918dfffd05ddc
    );
  }
  
  export default SearchBar;
  