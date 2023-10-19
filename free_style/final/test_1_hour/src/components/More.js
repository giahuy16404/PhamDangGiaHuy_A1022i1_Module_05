import React, { useEffect, useRef, useState } from "react";
import * as courseService from "../service/CourseService";
import { Field, Form, Formik } from "formik";
import { NavLink, useParams } from "react-router-dom";
import { ModalRemove } from "./ModalRemove";
import { toast } from "react-toastify";
export const More = () => {
  const [moreCorse, setMoreCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  const params = useParams();

  const getMoreCourse = async (id) => {
    const data = await courseService.findById(id);
    console.log(data);
    setMoreCourse([data]);
  };
  useEffect(() => {
    getMoreCourse(params.id);
  }, []);

  return (
    <>
      <Formik
      // initialValues={{
      //   search: "",
      // }}
      // onSubmit={async (values) => {
      //   const searchByName = await customerService.searchByName(
      //     values.search
      //   );
      //   setCustomerList(searchByName);
      // }}
      >
        <Form>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">Navbar</a>
              <input
                className="form-control me-2"
                type="text"
                placeholder="search"
                aria-label="search"
                name="search"
                // onChange={(value) => {
                //   handleSearchByName(value.target.value);
                // }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </nav>
        </Form>
      </Formik>
      <h3
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "20px" }}
      >
        {/* <NavLink to={"/add"}>
          {" "}
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </NavLink> */}
        Customer
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Lession</th>
          </tr>
        </thead>
        <tbody>
          {moreCorse.map((value, index) => (
            <>
              <tr key={value.id}>
                <th scope="row">{index + 1}</th>
                <td>{value.name}</td>
                <td>{value.description}</td>
                <td>
                  <div className="d-flex justify-content-between">
                    {/* <NavLink to={`/update/${value.id}`}>
                    <button type="button" className="btn btn-success btn-sm">
                      Update
                    </button>
                  </NavLink> */}

                    {/* <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleOpenModalRemove();
                      setIdRemove(value.id);
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Remove
                  </button> */}
                    <button>More</button>
                  </div>
                </td>
              </tr>
              {value.lession.map((value) => (
                <>
                  <tr>{value.name}</tr>
                </>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
