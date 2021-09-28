import { useState } from 'react';
import './Multiplicador.css';

function Multiplicador() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(0);

    function handleResult() {
        !num1 || !num2 ? alert('Preencha todos os campos!') : setResult(num1 * num2);
    }

    return (
        <div>
            <h1>Multiplicador de Números</h1>
            <input type='number' onChange={(el) => setNum1(el.target.value)} />
            <h2>X</h2>
            <input type='number' onChange={(el) => setNum2(el.target.value)} />
            <button
                onClick={() => {
                    handleResult();
                }}
            >
                =
            </button>
            <h2 id='result'>{result}</h2>
        </div>
    );
}

export default Multiplicador;
