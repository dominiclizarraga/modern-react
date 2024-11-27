import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <>
            <Header /> {/* Use the Header component here */}
            <h1>Quotes App</h1>
            <Footer className dynamicText="My quotes App"/> {/* Use the Header component here */}
        </>
    );
}

export default App;
