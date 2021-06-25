function Button(props)
{
    function handleSubmit(event)
    {
        event.preventDefault()
        event.target.blur()

        
        //window.location.href = `/${props.index}`; console.log('string')
    }

    return (
        
        <form className="Button" onSubmit={(event) => handleSubmit(event)}>

            <input name="flightSearch" onChange={(event) => props.setDestination(event.target.value)} />
      
             <button onClick={(event) => handleSubmit(event)}> Submit Your F Flight</button >
     
        </form>      
        
    )
}

export default Button;