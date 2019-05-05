import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalFooter, Form} from 'reactstrap';

const GenericModal = ({
                          className = "className", action = async f => f,
                          data = {
                              id: 0
                          }
                      }) => {
    const [modal, setModal] = useState({
        show: false
    });
    const [modalData] = useState(data);
    const toggle = () => {
        setModal({
            show: !modal.show
        })
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await action(modalData);
            toggle();
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button color="danger" onClick={toggle}>delete</Button>
            </Form>
            <Modal isOpen={modal.show} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Want to delete the product {data.name}</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>yes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>no</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default GenericModal;
