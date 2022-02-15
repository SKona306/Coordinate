import React, { useState } from 'react'
import { itineraryItemsDatabase } from './StaticDatabase';

const NewItineraryItemsForm = (props) => {
  const setFormVisible = props.formVisibleControl;

  const [formValues, setFormValues] = useState([{label: '', category: '', details: '', day: '', time: '' }])


  const handleFormSubmit = (event) => {
    event.preventDefault()
    formValues.forEach((element) => {
      itineraryItemsDatabase.push(element);
    });
    setFormVisible(false)
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
          </label>
          <input type='text' name='label' value={element.label || ''} required onChange={e => handleChange(index, e)}/>
          <label>
            Category:
          </label>
          <input type='text' name='category' value={element.category || ''} required onChange={e => handleChange(index,e)}/>
          <label>
            Details:
            <textarea required name='details' value={element.details || ''} onChange={e => handleChange(index,e)}/>
          </label>
          <label>
            Day:
            <input type='date' name='day' value={element.day || ''} required onChange={e => handleChange(index,e)}/>
          </label>
          <label>
            Time:
            <input type='time' name='time' value={element.time || ''} required onChange={e => handleChange(index,e)}/>
          </label>
          {
            index ? 
              <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
            : null
          }
        </div>
      ))}
        <button onClick={() => addFormFields()}>Add Field</button>
        <button type='submit'>Submit Itinerary</button>
      </form>
    </React.Fragment>
  )
}

export default NewItineraryItemsForm