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

    const infectSurvivor = (id) => {
        if (id && id > 0) {
            const data = survivors.map((o) => {
                if (o.id === id) {
                    o.infected = true
                }
                return o
            })
            setSurvivors(data)
        }
    }

    const desinfectSurvivor = (id) => {
        if (id && id > 0) {
            const data = survivors.map((o) => {
                if (o.id === id) {
                    o.infected = false
                }
                return o
            })
            setSurvivors(data)
        }
    }

    return (
        <SurvivorContext.Provider value={{ survivors, getSurvivors, infectSurvivor, desinfectSurvivor }}>
            { props.children }
        </SurvivorContext.Provider>
    );
}

export default SurvivorContextProvider
