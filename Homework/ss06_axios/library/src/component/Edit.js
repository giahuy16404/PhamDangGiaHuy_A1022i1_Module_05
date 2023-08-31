import { useEffect, useState } from "react";
import * as LibraryService from "../service/libraryService";
import { useNavigate, useParams } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import { toast } from "react-toastify";
export const Edit = () => {
  const idUpdate = useParams();
  const [libraryList, setLibraryList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    findById();
  }, []);

  const findById = async () => {
    const libraryByid = await LibraryService.findById(idUpdate.id);
    setLibraryList(libraryByid);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Update</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: libraryList.id,
          title: libraryList.title,
          quantity: libraryList.quantity,
        }}
        onSubmit={(value, { setSubmitting }) => {
          LibraryService.update(idUpdate.id, value);
          setSubmitting(false);
          toast.success("Update thành công!!");
          navigate("/list");
        }}
      >
        <Form>
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
          </div>
          <button type="submit"> update</button>
        </Form>
      </Formik>
    </>
  );
};
