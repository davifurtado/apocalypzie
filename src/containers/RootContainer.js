import React from 'react';
import SurvivorList from './survivorsList/SurvivorsList';
import SurvivorContextProvider from '../contexts/SurvivorContext';

const RootContainer = () => {
    return (
        <div>
            <h1>Welcome to the ApocalypZie</h1>
            <h2>The Survivors:</h2>
            <SurvivorContextProvider>
                <SurvivorList />
            </SurvivorContextProvider>
        </div>
    )
}

export default RootContainer
