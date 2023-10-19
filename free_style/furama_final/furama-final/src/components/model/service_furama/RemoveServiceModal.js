import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function RemoveModal(props) {
  const [show, setShow] = useState(false);
  const { openModal, closeModal, handleRemove } = props;

  const handleClose = () => {
    setShow(false);
    closeModal();
  };
  const handleSubmit = () => {
    handleRemove();
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
          <Modal.Title>Modal Remove</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xóa!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
