import React, { useEffect, useState } from "react";
import * as courseService from "../service/CourseService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
export const Update = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [lession, setLession] = useState([]);
  const [customer, setCustomer] = useState();
  const getCustomerType = async () => {
    const data = await courseService.getLession();
    setLession(data);
  };

  const getCustomerById = async (id) => {
    const data = await courseService.findById(id);
    setCustomer(data);
  };
  useEffect(() => {
    getCustomerById(param.id);
    getCustomerType();
  }, []);

  return (
    <>
      {customer !== undefined ? (
        <Formik
          enableReinitialize={true}
          initialValues={{
            id: customer.id,
            name: customer.name,
            description: customer.description,
            lession: customer.lession.map((value) => JSON.stringify(value)),
          }}
          onSubmit={async (values) => {
            const obj = {
              ...values,
              customerType: JSON.parse(values.customerType),
            };
            // await courseService.update(param.id, obj);
            toast.success("Update mới thành công !!");
            navigate("/");
          }}
          // validationSchema={Yup.object({
          //   name: Yup.string().required("Không để trống!!"),
          //   birthday: Yup.string().required("Không để trống!!"),
          //   phone: Yup.number().required("Không để trống!!"),
          //   email: Yup.string().required("Không để trống!!"),
          //   address: Yup.string().required("Không để trống!!"),
          // })}
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
