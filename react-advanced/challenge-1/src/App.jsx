import AnimatedComponent from './components/AnimatedComponent';
import Calculator from './components/Calculator';
import ExpensiveCalculationComponent from './components/ExpensiveCalculationComponent';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';

function App() {

    return (
        <>
            <ThemeProvider>
                <Navbar />
            </ThemeProvider>
            <ExpensiveCalculationComponent />
            <Calculator />
            <AnimatedComponent />
        </>
    );
}

export default App;
