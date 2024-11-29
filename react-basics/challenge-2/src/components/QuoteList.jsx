import PropTypes from 'prop-types';

export default function QuoteList({ quotes }) {
  return (
    <div className="quotes-list">
      <h2>All Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="quote-item">
          <p>"{quote.quote}"</p>
          <footer>— {quote.author}</footer>
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
  )
}