// import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

function Form({handleAddQuote}) {
  const [formData, setFormData] = useState({
    quote: '',
    author: ''
  });
  // this refactoring is to keep all data from this form in one object, if we want to add a new field we jus tneed to add to the object formData
  // const [quote, setQuote] = useState('');
  // const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    // const formData = new FormData(event.target);
    // console.log(formData.get('author'))
    if (!formData.quote || !formData.author) {
      alert(`Fields cannot be empty!`)
    } else{
      handleAddQuote(formData)
      setFormData({
        quote: '',
        author: ''
      })
    }
  }

  const handleChange = (event) => {
    // console.log("all", event)
    // console.log("target", event.target)
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="quote">Quote</label> <br />
        <input 
          type="text"
          id="quote"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label> <br />
        <input 
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {
  handleAddQuote: PropTypes.func,
  handleChange: PropTypes.func
}

export default Form
