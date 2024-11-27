import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    const currentYear = 2024;

    const bringQuote = () => {
        console.log("here")
        // triger a async function to fetch data.json
    }

    return (
        <>
            <Header />
            <button className="buttonStyles" onClick={ bringQuote }>Give me a new quote!</button>
            <Footer dynamicText="My quotes App" year={currentYear}/>
        </>
    );
}

export default App;
