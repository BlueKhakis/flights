function SearchResults(props) {
    return (
    <div>{props.results && props.results.map((result) => (result.title))}</div>
        
    )
}

export default SearchResults;