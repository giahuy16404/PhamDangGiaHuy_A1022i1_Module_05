import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as customerService from "../../../service/customer_service/customerService";
import { toast } from "react-toastify";
export const UpdateCustomer = () => {
  const [customer, setCustomer] = useState();
  const idUpdate = useParams();
  const [customerType, setCustomerType] = useState([]);
  const navigate = useNavigate();
  
  const getCustomerType = async () => {
    const dataCustomerType = await customerService.getCustomerType();
    setCustomerType(dataCustomerType);
  };

  useEffect(() => {
    getById(idUpdate.id);
    getCustomerType();
  }, []);

  const getById = async (id) => {
    const data = await customerService.findById(id);
    setCustomer(data);
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Update Customer</h3>
      {customer ? (
        <Formik
          initialValues={{
            id: customer.id,
            fullName: customer.fullName,
            dateOfBirth: customer.dateOfBirth,
            gender: customer.gender,
            identityNumber: customer.identityNumber,
            phoneNumber: customer.phoneNumber,
            email: customer.email,
            customerType: JSON.stringify(customer.customerType),
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            values.customerType = JSON.parse(values.customerType);
            customerService.update(idUpdate.id, values);
            toast.success("Cập nhật thành công !!");
            navigate("/customer");
          }}
        >
          <Form>
            {console.log(JSON.stringify(customer.customerType))}
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
                type="text"
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
                type="text"
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
                className="form-select"
                id="customerType"
                name="customerType"
              >
                {customerType.map((value) => (
                  <option value={JSON.stringify(value)} key={value.id}>
                    {value.type}
                  </option>
                ))}
              </Field>
            </div>

            <div
              className="d-flex justify-content-center"
              style={{ marginBottom: "20px" }}
            >
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </Form>
        </Formik>
      ) : (
        ""
      )}
    </>
  );
};
