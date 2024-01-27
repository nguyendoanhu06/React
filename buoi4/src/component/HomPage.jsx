import React, { useState } from 'react';
import './Style.css';

export default function HomPage() {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setResult(result + value);
    };

    const calculateResult = () => {
        const newResult = result;
        const resultValue = eval(newResult);
        setResult(resultValue.toString());
    };

    return (
        <div>
            <table>
                <tr>
                    <td colSpan={4} className='result'>{result}</td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClick('7')}>7</button></td>
                    <td><button onClick={() => handleClick('8')}>8</button></td>
                    <td><button onClick={() => handleClick('9')}>9</button></td>
                    <td><button onClick={() => handleClick('/')}>/</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClick('4')}>4</button></td>
                    <td><button onClick={() => handleClick('5')}>5</button></td>
                    <td><button onClick={() => handleClick('6')}>6</button></td>
                    <td><button onClick={() => handleClick('*')}>*</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClick('1')}>1</button></td>
                    <td><button onClick={() => handleClick('2')}>2</button></td>
                    <td><button onClick={() => handleClick('3')}>3</button></td>
                    <td><button onClick={() => handleClick('-')}>-</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClick('0')}>0</button></td>
                    <td><button className='caculate' onClick={calculateResult}>=</button></td>
                    <td><button onClick={() => setResult('')}>C</button></td>
                    <td><button className='plus' onClick={() => handleClick('+')}>+</button></td>
                </tr>
            </table>
        </div>
    );
} 
