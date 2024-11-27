// import React from 'react' THIS IS NOT NEEDED THIS TIME
import '../App.css';
import { useState } from 'react';

function Quoter() {
    const [currentQuote, setCurrentQuote] = useState(null);

    const fetchQuote = async () => {
        try {
            const resp = await fetch('./src/data.json');
            const data = await resp.json();
            const randomNumber = data[Math.floor(Math.random() * data.length)];
            setCurrentQuote(randomNumber)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {currentQuote && (
                <div className="quote">
                    <p>'{currentQuote.quote}'</p>
                    <p>by: {currentQuote.author}</p>
                </div>
            )}
            <button className="buttonStyles" onClick={ fetchQuote }>
                Give me a new quote!
            </button>
        </>
    );
}

export default Quoter;
