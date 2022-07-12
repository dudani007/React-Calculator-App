import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const Div = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [ans, setAns] = useState(0);
    function Add() {
        setAns(parseInt(num1) / parseInt(num2));
    }
    const navigate = useNavigate();
    return (
        <div id="canvas">
            <h1>Calculate Quotient</h1>
            <br></br>
            <br></br>
            <p>First number</p>
            <input type="number" value={num1} onChange={(e) => { setNum1(e.target.value) }}></input>
            <br></br>
            <p>Second number</p>
            <input type="number" value={num2} onChange={(e) => { setNum2(e.target.value) }}></input>
            <button onClick={Add}> DIV</button>
            <br></br>
            <p>Result={ans}</p>
            <button onClick={() => navigate('/main')} id="back" > BACK</button>
        </div>
    );

}