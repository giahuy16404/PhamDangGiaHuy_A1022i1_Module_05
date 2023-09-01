import { Field, Form, Formik } from "formik";

export const AddService = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Service</h3>
      <Formik
        initialValues={{
          image: "",
          title: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <Field
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter image URL"
              name="image"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Field
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              name="title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Field
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter description"
              name="description"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
