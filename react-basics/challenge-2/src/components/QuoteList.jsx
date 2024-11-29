import PropTypes from 'prop-types';

export default function QuoteList({ quotes, onDeleteQuote }) {
  return (
    <div className="quotes-list">
      <h2>All Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="quote-item">
          <p>{quote.quote}</p>
          <footer>— {quote.author}
            <button onClick={() => onDeleteQuote(index)}>Delete</button>
          </footer>
        </div>
      ))}
    </div>
  )
}

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  ),
  onDeleteQuote: PropTypes.func.isRequired
}