import React, { useEffect, useState } from "react";
import * as courseService from "../service/CourseService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
export const Add = () => {
  const [lession, setLession] = useState([]);

  const getCustomerType = async () => {
    const data = await courseService.getLession();
    setLession(data);
  };
  useEffect(() => {
    getCustomerType();
  }, []);

  const [age, setAge] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    const ageDifference =
      currentDate.getFullYear() - selectedDate.getFullYear();
    setAge(ageDifference);
  };

  return (
    <>
      {lession.length > 0 ? (
        <Formik
          initialValues={{
            name: "",
            description: "",
            lession: [],
          }}
          onSubmit={async (values) => {
            const lesion = values.lession.map((value) => JSON.parse(value));
            const obj = {
              ...values,
              lession: lesion,
            };
            console.log(obj);
            await courseService.add(obj);
            toast.success("Thêm mới thành công !!");
          }}
          validationSchema={Yup.object({
            //   name: Yup.string()
            //     .required("Không để trống!!")
            //     .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
            //   birthday: Yup.string().required("Không để trống!!"),
            //   phone: Yup.number().required("Không để trống!!"),
            //   email: Yup.string()
            //     .required("Không để trống!!")
            //     .matches(/^[a-z0-9]+@gmail\.com$/, "Invalid email"),
            //   address: Yup.string().required("Không để trống!!"),
          })}
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
                name="name"
                de
              />
              <ErrorMessage
                className="form-err"
                name="name"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                description
              </label>
              <Field
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter Full Name"
                name="description"
              />
              <ErrorMessage
                className="form-err"
                name="birthday"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                lession
              </label>
              {lession.map((value) => (
                <>
                  <br />

                  <span>{value.name}</span>
                  <br />
                  <Field
                    type="checkbox"
                    id="lession"
                    placeholder="Enter Full Name"
                    name="lession"
                    value={JSON.stringify(value)}
                  />
                  <br />
                </>
              ))}
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </Form>
        </Formik>
      ) : (
        ""
      )}
    </>
  );
};
