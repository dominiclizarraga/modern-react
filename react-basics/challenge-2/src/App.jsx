import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';


import './App.css';

import data from './data.json';
import Quote from './components/Quote';
import { useState } from 'react';

function App() {
    const [quotes, setQuotes] = useState(data);
    const [currentQuote, setCurrentQuote] = useState(data[0]);

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomNumber]);
    };

    const handleAddQuote = (newQuote) => {
        console.log("hola", newQuote)
        setQuotes(prevQuotes => [...prevQuotes, newQuote]);
        // setCurrentQuote(newQuote);
    }

    return (
        <>
            <Header />

            <Form handleAddQuote={handleAddQuote}/>

            <main>
                <Quote quote={currentQuote.quote} author={currentQuote.author} />

                <button onClick={setRandomQuote}>Cambiar quote</button>

                <div>
                    <h3>All Quotes:</h3>
                    {quotes.map((q, index) => (
                        <div key={index}>
                            {q.quote} - {q.author}
                        </div>
                    ))}
                </div>
            </main>

            <Footer text="Mi App de quotes!" />
        </>
    );
}

export default App;
