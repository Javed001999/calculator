import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");

    const Click = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const squareroot = (e) => {
        setResult(result.concat(e.target.name));
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    };

    const bracket = (value) => {
        setResult(prevInput => prevInput + value);
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error");
        }
    }

    return (
        <div className="container">
            <form className='forms'>
                <input type="text" value={result} />
            </form>

            <div className="keypad">
                <button onClick={clear} id="clear">AC</button>
                <button onClick={() => bracket('(')}> ( </button>
                <button onClick={() => bracket(')')}> ) </button>
                <button name="/" onClick={Click}>÷</button>
                <button name="7" onClick={Click}>7</button>
                <button name="8" onClick={Click}>8</button>
                <button name="9" onClick={Click}>9</button>
                <button name="*" onClick={Click}>x</button>
                <button name="4" onClick={Click}>4</button>
                <button name="5" onClick={Click}>5</button>
                <button name="6" onClick={Click}>6</button>
                <button name="-" onClick={Click}>-</button>
                <button name="1" onClick={Click}>1</button>
                <button name="2" onClick={Click}>2</button>
                <button name="3" onClick={Click}>3</button>
                <button name="+" onClick={Click}>+</button>
                <button name="0" onClick={Click}>0</button>
                <button name="." onClick={Click}>.</button>
                <button onClick={backspace} id="backspace"> ⌫ </button>
                <button onClick={calculate} id="result">=</button>
            </div>
        </div>
    );
};
export default Calculator;




























