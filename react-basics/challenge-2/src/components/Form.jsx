// import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

function Form({handleAddQuote}) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    // const formData = new FormData(event.target);
    // console.log(formData.get('author'))
    handleAddQuote({quote, author})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="quote">Quote</label> <br />
        <input 
          type="text"
          id="quote"
          name="quote"
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label> <br />
        <input 
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {
  handleAddQuote: PropTypes.func
}

export default Form
