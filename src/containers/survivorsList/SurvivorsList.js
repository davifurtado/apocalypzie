import React, { useContext } from 'react';
import { SurvivorContext } from '../../contexts/SurvivorContext';
import SurvivorCard from '../../components/survivorCard/SurvivorCard';
import './survivors-list.css';

const SurvivorList = () => {
    const { survivors } = useContext(SurvivorContext);
            
    return (
        <div className="survivors-list-container">
            {
                survivors.map((obj) => {
                    return (
                        <SurvivorCard survivor={obj} />
                    )
                })
            }
        </div>
    )
}

export default SurvivorList
