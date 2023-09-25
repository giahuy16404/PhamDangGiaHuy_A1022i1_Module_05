import React, { useEffect, useState } from "react";
import * as service from "../service/Service";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
export const Update = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [customerType, setCustomerType] = useState([]);
  const [customer, setCustomer] = useState([]);
  const getCustomerType = async () => {
    const data = await service.getCustomerType();
    setCustomerType(data);
  };

  const getCustomerById = async (id) => {
    const data = await service.findById(id);
    setCustomer(data);
  };
  useEffect(() => {
    getCustomerById(param.id);
    getCustomerType();
  }, []);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: customer.id,
          name: customer.name,
          birthday: customer.birthday,
          phone: customer.phone,
          gender: customer.gender,
          email: customer.email,
          address: customer.address,
          customerType: JSON.stringify(customer.customerType),
        }}
        onSubmit={async (values) => {
          const obj = {
            ...values,
            customerType: JSON.parse(values.customerType),
          };
          await service.update(param.id, obj);
          toast.success("Update mới thành công !!");
          navigate("/");
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Không để trống!!"),
          birthday: Yup.string().required("Không để trống!!"),
          phone: Yup.number().required("Không để trống!!"),
          email: Yup.string().required("Không để trống!!"),
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
