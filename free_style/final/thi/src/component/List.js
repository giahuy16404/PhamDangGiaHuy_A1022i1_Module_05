import React, { useEffect, useState } from "react";
import * as service from "../service/Service";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const List = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  //modal remove
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [flag, setFlag] = useState(true);
  const handleOpenModalRemove = () => {
    setOpenModalRemove(true);
  };
  const handleCloseModalRemove = () => {
    setOpenModalRemove(false);
  };
  const handleRemove = async () => {
    // await service.remove(idRemove);
    toast.success("Xóa thành công !!");
  };
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const data = await service.getCategory();
    setCategory(data);
  };

  //phan trang
  // const handleNextPage = () => {
  //   setPage((prev) => prev + 1);
  // };
  // const handlePreviousPage = () => {
  //   setPage((prev) => prev - 1);
  // };

  const getList = async () => {
    const data = await service.getList();
    setList(data);
  };
  const backList = async () => {
    await getList();
    setFlag(true);
  };

  //goi list ddaauf tien
  useEffect(() => {
    getList();
    getCategory();
  }, []);

  //search
  const handleSearchByName = async (name) => {
    const data = await service.searchByName(name);
    setList(data);
    return data;
  };
  const handleSearchByCategory = async (category) => {
    const data = await service.searchByCategory(category);
    setList(data);
  };

  // format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log(values.search);
          const dataSearch = await handleSearchByName(values.search);
          if (dataSearch.length === 0) {
            setFlag(false);
            navigate("/");
          } else {
            setFlag(true);
          }
          resetForm(true);
          // setFlag(false);
        }}
      >
        <Form>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              {/* <a className="navbar-brand">Navbar</a> */}
              <Field
                className="form-control me-2"
                type="text"
                placeholder="search"
                aria-label="search"
                name="search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </nav>
        </Form>
      </Formik>

      <div className="mb-3">
        <label htmlFor="customerType" className="form-label">
          Category
        </label>
        <select
          as="select"
          className="form-select"
          id="customerType"
          name="customerType"
          onChange={(e) => handleSearchByCategory(e.target.value)}
        >
          <option value="" selected>
            Select Category
          </option>

          {category.map((value) => (
            <option value={value.name} key={value.id}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
      <h3
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "20px" }}
      >
        Customer
      </h3>
      {flag ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Quanlity</th>
              <th scope="col">Day</th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, index) => (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.code}</td>
                <td>{value.name}</td>
                <td>{value.category.name}</td>
                <td>{value.quanlity}</td>
                <td>{formatDate(value.day)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h1> Không có thông tin sách này!!</h1>
          <button onClick={backList} className="btn btn-primary">
            backList
          </button>
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <NavLink to={"/add"}>
          {" "}
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </NavLink>
      </div>
    </>
  );
};
