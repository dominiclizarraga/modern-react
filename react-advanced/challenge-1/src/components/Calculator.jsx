import { useReducer } from 'react';

const initialState = {
    numA : 0,
    numB : 0,
    result : 0,

}

export default function Calculator() {
    // we will use useReduce which is for state/logic more complext, 
    // it will provide the initial state plus some logic, and with stateUse we only have intial state and setter
    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action) {
        switch (action.type) {
          case 'setNumA':
            return { ...state, numA: action.payload };
            case 'setNumB':
                return { ...state, numB: action.payload };
            case 'resta':
                return { ...state, result: state.numA - state.numB };
            case 'multi':
                return { ...state, result: state.numA * state.numB };
            case 'sum':
                return { ...state, result: state.numA + state.numB };
            case 'clear':
                    return { ...initialState };
            default:
                return state;
            }
      }

    return (
        <div className="rounded-lg border border-slate-400 mt-12 p-8 dark:border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">Calculadora</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    value={state.numA || " "}
                    // onChange={(e) => setNumA(Number(e.target.value))}
                    onChange={(e) => dispatch({ type: 'setNumA', payload: Number(e.target.value) })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={state.numB || " "}
                    // onChange={(e) => setNumB(Number(e.target.value))}
                    onChange={(e) => dispatch({ type: 'setNumB', payload: Number(e.target.value) })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second number"
                />
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        // onClick={dispatch({ type: 'increment' })}
                        onClick={() => dispatch({ type: 'sum' })}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Suma
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'resta' })}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Resta
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'multi' })}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                    >
                        Multiplicación
                    </button>

                    <button
                        onClick={() => dispatch({ type: 'clear' })}
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none"
                    >
                        clear
                    </button>
                </div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6">
                Resultado: <span className="text-blue-500">{state.result}</span>
            </h3>
        </div>
    );
}
