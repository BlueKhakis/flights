function Button(props)
{
    function handleSubmit(event)
    {
        event.preventDefault()
        
        window.location.href = `/${props.index}`; console.log('string')
    }

    return (
        <button onClick={(event) => handleSubmit(event)}> Detail</button >
            
        
    )
}

export default Button;