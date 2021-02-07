import React, { useContext } from 'react';
import { SurvivorContext } from '../../contexts/SurvivorContext';
import './navbar.css';

const NavBar = () => {
    const { survivors } = useContext(SurvivorContext);
    return (
        <div className="navbar-container">
            <h1>Welcome to the ApocalypZie!! </h1>
            <h2>
                { 
                    survivors?.length ? 
                        `Only ${survivors.length} survivors left alive:` : 
                        "There are no survivors left. Only zombies. Zombies everywhere. Run"
                }
            </h2>
        </div>
    );
}

export default NavBar
