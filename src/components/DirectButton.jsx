function DetailButton(props)
{
    function handleSubmit(event)
    {
        event.preventDefault()
        
        if (props.direct === 0)
        {
            props.setDirect(1)
        }
        else
        {
            props.setDirect(0)
            }

        
    }

    return (
        
       <>     
        <input
            type="checkbox"
            checked={props.direct === 1}
            onChange={(event) => handleSubmit(event)}
            className="form-check-input"
        />
        
      </>  
    )
}

export default DetailButton;