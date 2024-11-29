import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import QuoteList from './components/QuoteList';


import './App.css';

import data from './data.json';
import Quote from './components/Quote';
import { useState, useEffect } from 'react';

function App() {
    const [quotes, setQuotes] = useState(data);
    const [currentQuote, setCurrentQuote] = useState(data[0]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch('http://localhost:3000/quotes');
                if (!response.ok) {
                    throw new Error('Failed to fetch quotes');
                }
                const data = await response.json();
                setQuotes(data);
                setCurrentQuote(data[0]);
            } catch (error) {
                console.log(error)
            }
        };

        fetchQuotes();
    }, []);

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomNumber]);
    };

    const handleAddQuote = async (newQuote) => {
        try {
            const response = await fetch('http://localhost:3000/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuote)
            });
            
            if (!response.ok) {
                throw new Error('Failed to add quote');
            }
            
            const addedQuote = await response.json();
            setQuotes(prevQuotes => [...prevQuotes, addedQuote]);
            setCurrentQuote(addedQuote);
        } catch (error) {
            console.log(error)
        }
    };

    if (!currentQuote) return <div>No quotes available</div>;

    return (
        <>
            <Header />
            <Form handleAddQuote={handleAddQuote}/>
            <main>
                <Quote quote={currentQuote.quote} author={currentQuote.author} />
                <button onClick={setRandomQuote}>Cambiar quote</button>
                <QuoteList quotes={quotes} />
            </main>
            <Footer text="Mi App de quotes!" />
        </>
    );
}

export default App;
