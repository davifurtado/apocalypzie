import React from 'react';
import './survivor-card.css';

const SurvivorCard = ({ survivor }) => {
    return (
        <div className="survivor-card-container">
            {/* <div>
                <img
                    src={survivor.photo}
                    alt="survivor"
                    onError={e => {
                        if (imageLoadError) {
                            setImageLoadError(false)
                            e.target.src = 'https://images.pexels.com/photos/3697676/pexels-photo-3697676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
                        }
                    }}
                    width="100%"
                    height="100%"
                />
            </div> */}
            <div>
                <div >Name: {survivor?.name}</div>
                <div >Job: {survivor?.job}</div>
                <div >Infected: {survivor?.infected ? 'Yes, better run' : "Nah, it's fine"}</div>
            </div>
        </div>
    );
}

export default SurvivorCard
