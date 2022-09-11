import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='homeContainer'>
            <h2>Welcome!</h2>
            <div className='welcome'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at, pariatur sunt libero est quam. Molestiae dolor ratione dolorum dicta voluptatibus commodi quisquam libero itaque voluptate veniam soluta, quod temporibus.
            </div>
            <div className='homeBtns'>
                <button onClick={() => navigate("/Todos")} >CREATE TODOS</button>
                <button onClick={() => navigate("/DadJokes")}>FETCH DAD JOKES</button>
            </div>


        </div>
    );
}

export default Home;
