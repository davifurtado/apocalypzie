import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import survivorsList from '../assets/survivors';

export const SurvivorContext = createContext();

const SurvivorContextProvider = (props) => {

    const [survivors, setSurvivors] = useState([]);

    useEffect(() => {
        getSurvivors()
    }, [])

    const getSurvivors = () => {
        setSurvivors(survivorsList)
    }

    return (
        <SurvivorContext.Provider value={{ survivors, getSurvivors }}>
            { props.children }
        </SurvivorContext.Provider>
    );
}

export default SurvivorContextProvider
