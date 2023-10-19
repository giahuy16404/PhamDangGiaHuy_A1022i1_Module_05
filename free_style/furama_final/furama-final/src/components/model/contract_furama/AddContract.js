import { ErrorMessage, Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as customerService from "../../../service/customer_service/customerService";
import * as contractService from "../../../service/contract_service/contract_service";
import * as serviceFurama from "../../../service/service_furama_service/serviceFuramaService";
import * as employeeService from "../../../service/employee_service/employeeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export const AddContract = () => {
  const [service, setService] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [token, setToken] = useState();

  const getTokenFromLocalStorage = async () => {
    // Lấy token từ localStorage
    const token = await localStorage.getItem("token");
    setToken(token);
  };
  const getService = async (token) => {
    const data = await serviceFurama.getList(token);
    setService(data);
  };
  const getCustomer = async (token) => {
    const data = await customerService.getList(token);
    setCustomer(data);
  };
  const getEmployee = async (token) => {
    const data = await employeeService.getList(token);
    setEmployee(data);
  };
  useEffect(() => {
    getTokenFromLocalStorage();
    if (token) {
      getService(token);
      getCustomer(token);
      // getEmployee(token);
    }
  }, [token]);
  const navigate = useNavigate();
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Contract</h3>
      <Formik
        initialValues={{
          endDate: undefined,
          startDate: "...",
          deposit: undefined,
          totalMoney: undefined,
          employee: {},
          customer: undefined,
          service: undefined,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submit");

          setSubmitting(false);
          const obj = {
            ...values,
            customer: JSON.parse(values.customer),
            service: JSON.parse(values.service),
            employee: JSON.parse(values.employee),
          };
          contractService.add(obj,token);
          toast.success("Thêm mới thành công!!");
          navigate("/contract");
        }}
        validationSchema={Yup.object({
          endDate: Yup.string().required("required"),
          deposit: Yup.number().required("required").min(0),
          totalMoney: Yup.number().required("required"),
        })}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <Field
              type="date"
              className="form-control"
              id="endDate"
              placeholder="Enter End Date"
              name="endDate"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="endDate"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="deposit" className="form-label">
              Deposit
            </label>
            <Field
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Enter Deposit"
              name="deposit"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="deposit"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="totalMoney" className="form-label">
              Total Money
            </label>
            <Field
              type="text"
              className="form-control"
              id="totalMoney"
              placeholder="Enter Total Money"
              name="totalMoney"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="totalMoney"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="customer" className="form-label">
              Customer
            </label>
            <Field
              as="select"
              className="form-select"
              id="customer"
              name="customer"
            >
              <option value="" selected>
                Select Customer
              </option>

              {customer.map((value) => (
                <option value={JSON.stringify(value)}>{value.name}</option>
              ))}
            </Field>
          </div>
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <Field
              as="select"
              className="form-select"
              id="employee"
              name="employee"
            >
              <option value="" selected>
                Select employee
              </option>

              {employee.map((value) => (
                <option value={JSON.stringify(value)}>{value.name}</option>
              ))}
            </Field>
          </div>
          <div className="mb-3">
            <label htmlFor="service" className="form-label">
              Service
            </label>
            <Field
              as="select"
              className="form-select"
              id="service"
              name="service"
            >
              <option value="" selected>
                Select Service
              </option>

              {service.map((value) => (
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
