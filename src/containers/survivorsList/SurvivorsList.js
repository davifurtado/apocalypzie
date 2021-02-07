import React, { useContext, useState } from 'react';
import { SurvivorContext } from '../../contexts/SurvivorContext';
import SurvivorCard from '../../components/survivorCard/SurvivorCard';
import './survivors-list.css';

const SurvivorList = () => {
    const { survivors } = useContext(SurvivorContext);
    const [filter, setFilter] = useState('')
    return (
        <div>
            <div className="survivors-list-filter">
                <input 
                    type="text"
                    placeholder="Filter by name..."
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="survivors-list-container">
                {
                    survivors.filter(e => filter ? e.name?.toUpperCase().includes(filter.toUpperCase()) : true).map((obj) => {
                        return (
                            <SurvivorCard survivor={obj} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SurvivorList
