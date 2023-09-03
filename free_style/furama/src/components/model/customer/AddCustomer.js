import { Field, Form, Formik } from "formik";

export const AddCustomer = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Customer</h3>
      <Formik
        initialValues={{
          fullName: "",
          dateOfBirth: "",
          gender: "0",
          identityNumber: "",
          phoneNumber: "",
          email: "",
          customerType: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Full Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              name="fullName"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date Of Birth
            </label>
            <Field
              type="date"
              className="form-control"
              id="dateOfBirth"
              placeholder="Enter Date Of Birth"
              name="dateOfBirth"
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> Giới tính </label>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="radio"
                value="0"
                id="nam"
                name="gender"
              />
              <label className="form-check-label" htmlFor="nam">
                Nam
              </label>
            </div>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="radio"
                value="1"
                id="nu"
                name="gender"
              />
              <label className="form-check-label" htmlFor="nu">
                Nữ
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="identityNumber" className="form-label">
              CMND / CCCD
            </label>
            <Field
              type="number"
              className="form-control"
              id="identityNumber"
              placeholder="Enter CMND / CCCD"
              name="identityNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <Field
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              name="phoneNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="number"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="customerType" className="form-label">
              Customer Type
            </label>
            <Field
              as="select"
              className="form-control"
              id="customerType"
              name="customerType"
            >
              <option value="">Select Customer Type</option>
              <option value="diamond">Diamond</option>
              <option value="platinum">Platinum</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </Field>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: "20px" }}
          >
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
