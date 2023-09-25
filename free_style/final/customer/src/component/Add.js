import React, { useEffect, useState } from "react";
import * as customerService from "../service/CustomerService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
export const Add = () => {
  const [customerType, setCustomerType] = useState([]);
  
  const getCustomerType = async () => {
    const data = await customerService.getCustomerType();
    setCustomerType(data);
  };
  useEffect(() => {
    getCustomerType();
  }, []);

  const [age, setAge] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
    setAge(ageDifference);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          birthday: "",
          phone: 0,
          gender: "1",
          email: "",
          address: "",
          customerType: {},
        }}
        onSubmit={async (values) => {
          const obj = {
            ...values,
            customerType: JSON.parse(values.customerType),
          };
          await customerService.add(obj);
          toast.success("Thêm mới thành công !!");
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Không để trống!!")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
          birthday: Yup.string().required("Không để trống!!"),
          phone: Yup.number().required("Không để trống!!"),
          email: Yup.string()
            .required("Không để trống!!")
            .matches(/^[a-z0-9]+@gmail\.com$/, "Invalid email"),
          address: Yup.string().required("Không để trống!!"),
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
              birthday
            </label>
            <Field
              type="date"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              name="birthday"
              de
            />
            <ErrorMessage
              className="form-err"
              name="birthday"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              phone
            </label>
            <Field
              type="number"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              name="phone"
              de
            />
            <ErrorMessage
              className="form-err"
              name="phone"
              component="span"
            ></ErrorMessage>
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
            />
            <ErrorMessage
              className="form-err"
              name="email"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Address
            </label>
            <Field
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="address"
            />
            <ErrorMessage
              className="form-err"
              name="address"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="customerType" className="form-label">
              Customer Type
            </label>
            <Field
              as="select"
              className="form-select"
              id="customerType"
              name="customerType"
            >
              <option value="" selected>
                Select Customer Type
              </option>

              {customerType.map((value) => (
                <option value={JSON.stringify(value)} key={value.id}>
                  {value.name}
                </option>
              ))}
            </Field>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
