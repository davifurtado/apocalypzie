import React, { useState, useContext } from 'react';
import './survivor-card.css';
import avatar from '../../assets/survivor_avatar_placeholder.jpg';
import { PersonXFill, PersonCheckFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { SurvivorContext } from '../../contexts/SurvivorContext';

const SurvivorCard = ({ survivor }) => {
    const { infectSurvivor, desinfectSurvivor } = useContext(SurvivorContext)
    const [imageLoadError, setImageLoadError] = useState(true)
    const backgroundColor = survivor?.infected ? "#ffadad" : '#adffb7'

    return (
        <div className="survivor-card-container" style={{ backgroundColor }}>
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
                <div >Infected: {survivor?.infected ? 'RUNN!!!!' : "Nah, it's fine"}</div>

                {!survivor?.infected ? (
                    <Button
                        className="btn-danger"
                        variant="danger"
                        onClick={() => infectSurvivor(survivor?.id)}
                    >
                        Got infected!!
                        <PersonXFill className="survivor-card-button-icon" />
                    </Button>
                ) : (
                    <Button
                        className="btn-success"
                        variant="success"
                        onClick={() => desinfectSurvivor(survivor?.id)}
                    >
                        False alarm, not infected. 
                        <PersonCheckFill className="survivor-card-button-icon" />
                    </Button>
                )
                }

            </div>
        </div>
    );
}

export default SurvivorCard
