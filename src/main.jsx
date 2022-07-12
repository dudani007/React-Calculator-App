import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';



export const Main = () => {
    const navigate = useNavigate();
    return (
        <div id="maindiv">
            <div id="bold">Welcome to Yash's Calculator</div>
            <div id="bold">What would u like to do?</div>
            <br></br>
            <div id="temp">
                <button id="mainbutton" onClick={() => navigate('/sum')}> ADD  </button>
                <button id="mainbutton" onClick={() => navigate('/diff')}> SUB  </button>
                <button id="mainbutton" onClick={() => navigate('/mul')}> MUL  </button>
                <button id="mainbutton" onClick={() => navigate('/div')}> DIV  </button>
            </div>
        </div>
    );
}