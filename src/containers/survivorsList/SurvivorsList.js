import React, { useContext, useState } from 'react';
import { SurvivorContext } from '../../contexts/SurvivorContext';
import './survivors-list.css';
import SurvivorCard from '../../components/survivorCard/SurvivorCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SurvivorForm from '../../components/survivorForm/SurvivorForm';

const SurvivorList = () => {
    const { survivors } = useContext(SurvivorContext);
    const [filter, setFilter] = useState('')

    const [showModal, setShowModal] = useState(false)
    return (
        <div className="survivor-list-main">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New survivor...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SurvivorForm onClose={() => setShowModal(false)}/>
                </Modal.Body>
            </Modal>
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
                            <SurvivorCard survivor={obj} key={obj.id} />
                        )
                    })
                }
            </div>
            <div>
                <Button
                    className="btn-primary"
                    variant="primary"
                    onClick={() => setShowModal(true)}
                >
                    Found another survivor...
                </Button>
            </div>
        </div>
    )
}

export default SurvivorList
