import React from 'react';
import SurvivorList from './survivorsList/SurvivorsList';
import SurvivorContextProvider from '../contexts/SurvivorContext';
import NavBar from '../components/navBar/NavBar';

const RootContainer = () => {
    return (
        <div>
            <SurvivorContextProvider>
                <NavBar />
                <SurvivorList />
            </SurvivorContextProvider>
        </div>
    )
}

export default RootContainer
