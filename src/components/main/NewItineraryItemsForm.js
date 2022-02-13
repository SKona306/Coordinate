import React, { useState } from 'react'

const NewItineraryItemsForm = (props) => {
  const setFormVisible = props.formVisibleControl;

  const [formValues, setFormValues] = useState([{label: '', category: '', details: '', day: '', time: '' }])


  const handleFormSubmit = () => {

  }

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }
    
  const addFormFields = () => {
    setFormValues([...formValues, {label: '', category: '', details: '', day: '', time: '' }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  return (
    <React.Fragment>
      <h1>Itinerary Form</h1>
      <p>Add all your itinerary items below:</p>
      <form onSubmit={handleFormSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <label>
            Label:
            <input type='text' required onChange={e => handleChange(e, index)}/>
          </label>
          <label>
            Category:
            <input type='text' required onChange={e => handleChange(e, index)}/>
          </label>
          <label>
            Details:
            <textarea required onChange={e => handleChange(e, index)}/>
          </label>
          <label>
            Day:
            <input type='date' required onChange={e => handleChange(e, index)}/>
          </label>
          <label>
            Time:
            <input type='time' required onChange={e => handleChange(e, index)}/>
          </label>
          {
            index ? 
              <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
            : null
          }
        </div>
      ))}
        <button onClick={addFormFields}>Add Field</button>
        <button type='submit'>Submit Itinerary</button>
      </form>
    </React.Fragment>
  )
}

export default NewItineraryItemsForm