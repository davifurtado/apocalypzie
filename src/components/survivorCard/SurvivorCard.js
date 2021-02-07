import React, { useState } from 'react';
import './survivor-card.css';
import avatar from '../../assets/survivor_avatar_placeholder.jpg';
import { PersonXFill } from 'react-bootstrap-icons';

const SurvivorCard = ({ survivor }) => {
    const [imageLoadError, setImageLoadError] = useState(true)
    return (
        <div className="survivor-card-container">
            <div>
                <img
                    src={survivor.photo}
                    alt="survivor"
                    onError={e => {
                        if (imageLoadError) {
                            setImageLoadError(false)
                            e.target.src = avatar;
                        }
                    }}
                    width="250px"
                    height="200px"
                />
            </div>
            <div>
                <div >Name: {survivor?.name}</div>
                <div >Job: {survivor?.job}</div>
                <div >Infected: {survivor?.infected ? 'Yes, better run' : "Nah, it's fine"}</div>
                <div>
                    <button>
                        <PersonXFill />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SurvivorCard
