import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import * as LibraryService from "../service/libraryService";
import { toast } from "react-toastify";

export function CreateModal(props) {
  const [show, setShow] = useState(false);
  const { openModal, closeModal, createSuccess } = props;

  const handleClose = () => {
    setShow(false);
    closeModal();
  };
  useEffect(() => {
    setShow(openModal);
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: 0,
        }}
        onSubmit={(value, { setSubmitting }) => {
          LibraryService.create(value);
          createSuccess();
          setSubmitting(false);
          toast.success("Thêm mới thành công !!");
          handleClose();
        }}
      >
        <Modal show={show} onHide={handleClose}>
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  name="title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="quantity"
                  aria-describedby="emailHelp"
                  name="quantity"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Formik>
    </>
  );
}
