function Countries(props) {
  console.log(props.countries)
  return (
      <div className="Country">
        {props.countries.map((item, i)=> {
            return (<div key={i}>
              <p><a href={`https://restcountries.eu/rest/v2/name/${item.name}`}>{ item.name }</a></p>
                    </div>)
        })}
      </div>
    );
  }
  export default Countries;