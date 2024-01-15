import React, { useState } from "react";
import { Button, Modal, Content } from 'react-bulma-components';

const ModalCancel = ({ onCancel }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCancel = () => {
        setModalOpen(false);
        onCancel();
    }

    return (
        <div>
            <Button color="primary" onClick={() => setModalOpen(true)}>
                Cancel
            </Button>

            <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        <Modal.Card.Title>Filter</Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Content>
                            <div className="text is-bold">
                                Are you sure you want to cancel without saving the data?
                            </div>
                        </Content>
                    </Modal.Card.Body>
                    <Modal.Card.Footer>
                        <Button className="m-4" onClick={handleCancel}>Yes</Button>
                        <Button className="m-4" onClick={() => setModalOpen(false)}>No</Button>
                    </Modal.Card.Footer>
                </Modal.Card>
            </Modal>
        </div>
    )
}

export default ModalCancel