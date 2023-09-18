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
          name: undefined,
          birthDay: undefined,
          gender: "0",
          idCard: undefined,
          phone: undefined,
          email: undefined,
          address: undefined,
          customerType: [],
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const obj = {
            ...values,
            customerType: JSON.parse(values.customerType),
            gender: parseInt(values.gender),
          };
          await customerService.add(obj);
          setSubmitting(false);
          toast.success("Thêm mới thành công!!");
          navigate("/customer");
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
          birthDay: Yup.string().required("Required"),
          idCard: Yup.string()
            .required("Required")
            .matches(
              /^[0-9]{9}$|^[0-9]{12}$/,
              "ID Card must be 9 or 12 digits"
            ),
          phone: Yup.string()
            .required("Required")
            .matches(/^090\d{7}$|^091\d{7}$/, "Invalid phone number"),
          email: Yup.string()
            .required("Required")
            .matches(/^[a-z0-9]+@gmail\.com$/, "Invalid email"),
          address: Yup.string().required("Required"),
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="name"
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
              name="birthDay"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="birthDay"
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
            <label htmlFor="idCard" className="form-label">
              CMND / CCCD
            </label>
            <Field
              type="text"
              className="form-control"
              id="idCard"
              placeholder="Enter CMND / CCCD"
              name="idCard"
            />
            <ErrorMessage
              className="form-err"
              name="idCard"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <Field
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              name="phone"
            />
            <ErrorMessage
              className="form-err"
              name="phone"
              component="span"
            ></ErrorMessage>
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
                <option value={JSON.stringify(value)}>{value.name}</option>
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
