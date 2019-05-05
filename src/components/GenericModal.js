import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup} from 'reactstrap';

const GenericModal = ({
                          buttonLabel = "button", className = "className", action = async f => f, title = "Modal Title",
                          data = {
                              name: "",
                              prize: 0,
                              description: ""
                          }
                      }) => {
    const [modal, setModal] = useState({
        show: false,
        unmountOnClose: true
    });
    const [modalData, setModalData] = useState(data);
    const toggle = () => {
        setModal({
            show: !modal.show
        })
    };
    const handleChange = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value
        });
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
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            </Form>
            <Modal isOpen={modal.show} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <div className="input-group input-group-lg">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            aria-describedby="buttonAdd"
                            value={modalData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="form-control"
                            name="prize"
                            value={modalData.prize}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="description"
                            value={modalData.description}
                            onChange={handleChange}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>{buttonLabel}</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default GenericModal;
