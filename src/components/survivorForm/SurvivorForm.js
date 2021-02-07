import React, { useContext, useState } from 'react';
import { SurvivorContext } from '../../contexts/SurvivorContext';
import Button from 'react-bootstrap/Button';

const SurvivorForm = (props) => {
    const { createSurvivor } = useContext(SurvivorContext)

    const handleOnSubmitCreate = (e) => {
        e.preventDefault();
        createSurvivor({
            name: e.target.name.value,
            job: e.target.job.value,
            infected: false,
            photo: e.target.photo?.value
        })
        props.onClose()
    }

    return (
        <form onSubmit={handleOnSubmitCreate} style={{ overFlow: 'auto' }}>
            <div>
                <label>Name:</label>
                <input required minLength={3} maxLength={20} name="name" />
            </div>
            <div>
                <label>Job: </label>
                <input required minLength={3} maxLength={20} name="job" />
            </div>
            <div>
                <label>Photo URL: </label>
                <input maxLength={1024} name="photo" />
            </div>
            <div>
                <Button type="submit" variant="primary" className="btn-primary">Create</Button>
            </div>
        </form>
    )
}

export default SurvivorForm
