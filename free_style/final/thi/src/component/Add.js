import React, { useEffect, useState } from "react";
import * as service from "../service/Service";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
export const Add = () => {
  const navigate = useNavigate();

  //Goi các bảng có sẳn dữ liệu
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const data = await service.getCategory();
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  // const [age, setAge] = useState("");

  // const handleDateChange = (event) => {
  //   const selectedDate = new Date(event.target.value);
  //   const currentDate = new Date();
  //   const ageDifference =
  //     currentDate.getFullYear() - selectedDate.getFullYear();
  //   setAge(ageDifference);
  // };

  return (
    <>
      <Formik
        initialValues={{
          code: "",
          name: "",
          quanlity: 0,
          day: 0,
          category: {},
        }}
        onSubmit={async (values) => {
          console.log(values);
          const obj = {
            ...values,
            category: JSON.parse(values.category),
          };
          await service.add(obj);
          toast.success("Thêm mới thành công !!");
          navigate("/");
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Không để trống!!").max(100),
          code: Yup.string().required("Không để trống!!").matches(/BO - /),
          quanlity: Yup.number().min(0),
        })}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Code
            </label>
            <Field
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              name="code"
            />
            <ErrorMessage
              className="form-err"
              name="code"
              component="span"
            ></ErrorMessage>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Name
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
              quanlity
            </label>
            <Field
              type="number"
              className="form-control"
              id="quanlity"
              placeholder="Enter Full Name"
              name="quanlity"
              de
            />
            <ErrorMessage
              className="form-err"
              name="quanlity"
              component="span"
            ></ErrorMessage>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Day
            </label>
            <Field
              type="date"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
              name="day"
              de
            />
            <ErrorMessage
              className="form-err"
              name="day"
              component="span"
            ></ErrorMessage>
          </div>

          <div className="mb-3">
            <label htmlFor="customerType" className="form-label">
              Category
            </label>
            <Field
              as="select"
              className="form-select"
              id="customerType"
              name="category"
            >
              <option value="" selected>
                Select Category
              </option>

              {category.map((value) => (
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
