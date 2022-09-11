import React from 'react';
import { useNavigate } from 'react-router-dom'

const DadJokes = () => {
    let navigate = useNavigate();
    return (
        <div>
            THIS IS RANDOM FACT COMPONENT
            <button onClick={() => { navigate("/Todos") }}>Go to Todos</button>
        </div>
    );
}

export default DadJokes;
