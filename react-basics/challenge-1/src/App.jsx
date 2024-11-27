import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    const currentYear = 2024;

    return (
        <>
            <Header />
            <h1>Quotes App</h1>
            <Footer className dynamicText="My quotes App" year={currentYear}/>
        </>
    );
}

export default App;
