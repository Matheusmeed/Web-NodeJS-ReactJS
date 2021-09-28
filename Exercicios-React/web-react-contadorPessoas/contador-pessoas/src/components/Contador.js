import { useState } from 'react';
import './Contador.css';

function Contador() {
    const [counter, setCounter] = useState(0);

    return (
        <div className='container'>
            <h1>Contador de Pessoas</h1>
            <div>
                <h1 id='number'>{counter}</h1>
            </div>
            <button
                id='plus'
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <button
                id='minus'
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                -
            </button>
        </div>
    );
}

export default Contador;
