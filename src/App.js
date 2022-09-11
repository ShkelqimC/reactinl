import React from "react";
import Nav from './components/Nav'
import './index.css'
import Home from './components/Home'
import Todos from './components/Todos'
import ErrorPage from './components/ErrorPage'
import DadJokes from './components/DadJokes'
import './style/App.css'
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom'

function App() {
  return (
    <Router>

      <nav className="navbar">
        <h2>Zassignment1</h2>
        <div className="navLinks">
          <Link className="nav-link" to="/">Home</Link>


          <Link className="nav-link" to="/Todos">Todos</Link>
          <Link className="nav-link" to="/DadJokes">Dad Jokes</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Todos" element={<Todos />} />
        <Route path="/DadJokes" element={<DadJokes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
