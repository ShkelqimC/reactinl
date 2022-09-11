import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DadJokes = () => {
    const [joke, setJoke] = useState([])
    const apiUrl = 'https://Icanhazdadjoke.com'

    const fetchJoke = async () => {
        const response = await axios.get(`${apiUrl}`, { headers: { Accept: "application/json" } })

        setJoke(response.data.joke)
    }



    return (
        <div className='jokeContainer'>

            <div className='joke'>
                <h2 className='title'>Jokebox</h2>

                <p>{joke}</p>

                <button onClick={fetchJoke}>Generate new joke</button>
            </div>
        </div>
    );
}

export default DadJokes;
