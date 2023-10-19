import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

export function ModalSelectAddService(props) {
  const [show, setShow] = useState(false);
  const { openModal, closeModal } = props;

  const handleClose = () => {
    setShow(false);
    closeModal();
  };

  useEffect(() => {
    setShow(openModal);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Facility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <NavLink to="/service/add-villa">
                <Button variant="primary" block>
                  Add Villa
                </Button>
              </NavLink>
            </div>
            <div className="col-md-4">
              <NavLink to="/service/add-house">
                <Button variant="primary" block>
                  Add House
                </Button>
              </NavLink>
            </div>
            <div className="col-md-4">
              <NavLink to="/service/add-room">
                <Button variant="primary" block>
                  Add Room
                </Button>
              </NavLink>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
