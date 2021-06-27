function DatePickerComp(props) {

    function handleSubmit(event)
    {
      event.preventDefault()
      console.log(event);
      let dateFrom = event.target.value;      
      props.setDateFrom(dateFrom.substring(8, 10) + '/' + dateFrom.substring(5, 7) + '/' + dateFrom.substring(0, 4))      
      // props.setDateTo(event.target[1].value)      
    }

    function handleSubmitTwo(event)
    {
      event.preventDefault()
      console.log(event);
      let dateTo = event.target.value;
      props.setDateTo(dateTo.substring(8, 10) + '/' + dateTo.substring(5, 7) + '/' + dateTo.substring(0, 4))      
      // props.setDateTo(event.target.value)      
      // props.setDateTo(event.target[1].value)      
    }

  return (
      <div class="datePicker"> 
        <form onChange={(event) => handleSubmit(event)}>
          <div>
            From: <input
              type="date"
              name="SearchFrom"
            />
          </div>
        </form>
      
        <form onChange={(event) => handleSubmitTwo(event)}>
          <div>
            To:  <input
              type="date"
              name="SearchTo"
            />
          </div>
        </form>
  
      </div>

    );
  }
  
  export default DatePickerComp;
  