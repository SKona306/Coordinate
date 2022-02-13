import React from 'react'

const NewItineraryItemsForm = (props) => {
  const setFormVisible = props.formVisibleControl;

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <label>
          Category:
          <input type='text' required />
        </label>
        <label>
          Details:
          <input type='text' required />
        </label>
        <label>
          Due by:
          <input type='date' required />
        </label>
      </form>
    </React.Fragment>
  )
}

export default NewItineraryItemsForm