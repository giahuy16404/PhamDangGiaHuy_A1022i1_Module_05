import { Formik, Form, Field } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Create = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create student</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          birthday: "",
          gender: 0,
          address: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          values.gender = parseInt(values.gender);
          axios
            .post(`http://localhost:8080/api/student/add`, values)
            .then((res) => console.log(res));
          toast.success("Thêm mới thành công!!");
          navigate("/student");
        }}
      >
        <Form>
          <div class="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <Field
              className="custom-input"
              type="text"
              class="form-control"
              id="name"
              name="name"
            />
          </div>

          <div class="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <Field
              className="custom-input"
              type="text"
              class="form-control"
              id="email"
              name="email"
            />
          </div>

          <div class="mb-3">
            <label for="birthday" className="form-label">
              Birthday
            </label>
            <Field
              className="custom-input"
              type="date"
              class="form-control"
              id="birthday"
              name="birthday"
            />
          </div>
          <div class="mb-3">
            Gender : <br />
            <label for="true" className="form-label">
              Nam
            </label>
            <Field
              className="custom-input"
              type="radio"
              id="true"
              name="gender"
              value="0"
            />
            <label for="false" className="form-label">
              Nữ
            </label>
            <Field
              className="custom-input"
              type="radio"
              id="false"
              name="gender"
              value="1"
            />
          </div>

          <div class="mb-3">
            <label for="address" className="form-label">
              Address
            </label>
            <Field
              className="custom-input"
              type="t"
              class="form-control"
              id="address"
              name="address"
            />
          </div>
          <div className="btn-create d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
