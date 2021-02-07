import React, { useState, useContext } from 'react';
import './survivor-card.css';
import avatar from '../../assets/survivor_avatar_placeholder.jpg';
import { PersonXFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { SurvivorContext } from '../../contexts/SurvivorContext';

const SurvivorCard = ({ survivor }) => {
    const { infectSurvivor } = useContext(SurvivorContext)
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

                {!survivor?.infected &&
                    <Button
                        className="btn-danger"
                        variant="danger"
                        onClick={() => infectSurvivor(survivor?.id)}
                    >
                        Got infected!!
                        <PersonXFill />
                    </Button>
                }

            </div>
        </div>
    );
}

export default SurvivorCard
