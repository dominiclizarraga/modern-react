import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quoter from './components/Quoter';


function App() {
    const currentYear = 2024;

    // const bringQuote = () => {
    //     console.log("here")
    //     // triger a async function to fetch data.json
    // }

    return (
        <>
            <Header />
            <Quoter />
            <Footer dynamicText="My quotes App" year={currentYear}/>
        </>
    );
}

export default App;
