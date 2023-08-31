import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as LibraryService from "../service/libraryService";
import { toast } from "react-toastify";

export function Delete(props) {
  const { openModal, closeModal, idDelete, deleteSuccess } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    closeModal();
  };
  useEffect(() => {
    setShow(openModal);
  }, []);
  const handleDelete = async () => {
    await LibraryService.deleteById(idDelete);
    deleteSuccess();
    toast.success("Xóa thành công !!");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn muốn xóa không ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
