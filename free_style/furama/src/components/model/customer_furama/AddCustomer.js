import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as customerService from "../../../service/customer_service/customerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const AddCustomer = () => {
  const [customerType, setCustomerType] = useState([]);
  const navigate = useNavigate();

  const getCustomerType = async () => {
    const dataCustomerType = await customerService.getCustomerType();
    setCustomerType(dataCustomerType);
  };
  useEffect(() => {
    getCustomerType();
  }, []);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Customer</h3>
      <Formik
        initialValues={{
          fullName: undefined,
          dateOfBirth: undefined,
          gender: "0",
          identityNumber: undefined,
          phoneNumber: undefined,
          email: undefined,
          customerType: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          values.customerType = JSON.parse(values.customerType);
          customerService.addCustomer(values);
          setSubmitting(false);
          toast.success("Thêm mới thành công!!");
          navigate("/customer");
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Required"),
          dateOfBirth: Yup.string().required("Required"),
          identityNumber: Yup.string().required("Required"),
          phoneNumber: Yup.number().required("Required"),
          email: Yup.string().required("Required"),
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
              name="fullName"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="fullName"
              component="span"
            ></ErrorMessage>
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="dateOfBirth"
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
            <ErrorMessage
              className="form-err"
              name="identityNumber"
              component="span"
            ></ErrorMessage>
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
            <ErrorMessage
              className="form-err"
              name="phoneNumber"
              component="span"
            ></ErrorMessage>
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
            <ErrorMessage
              className="form-err"
              name="email"
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
                <option value={JSON.stringify(value)}>{value.type}</option>
              ))}
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
