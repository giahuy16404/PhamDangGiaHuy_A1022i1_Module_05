import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
export function FormContract() {
  const [students, setStudents] = useState([
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  ]);

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Contract Form</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={(value, { setSubmitting }) => {
            setSubmitting(false);
            setStudents([
              ...students,
              {
                name: value.name,
                email: value.email,
                phone: value.phone,
                message: value.message,
              },
            ]);
            toast.success("Add contact successfully!!!");
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .required("Required")
              .matches(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                "Email Không đúng định dạng!"
              ),
            phone: Yup.number().required("Required"),
            message: Yup.string().required("Required"),
          })}
        >
          <Form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <Field
                className="custom-input"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="name"
              />
              <ErrorMessage
                className="form-err"
                name="name"
                component="span"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <Field
                className="custom-input"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
              />
              <ErrorMessage
                className="form-err"
                component="span"
                name="email"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <Field
                className="custom-input"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="phone"
              />
              <ErrorMessage
                className="form-err"
                component="span"
                name="phone"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Message{" "}
              </label>
              <Field
                className="custom-input"
                as="textarea"
                class="form-control"
                id="exampleFormControlInput1"
                name="message"
              />
              <ErrorMessage
                className="form-err"
                component="span"
                name="message"
              ></ErrorMessage>
            </div>
            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>

            {students.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.message}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
