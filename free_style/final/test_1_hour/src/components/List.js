import React, { useEffect, useRef, useState } from "react";
import * as courseService from "../service/CourseService";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import { ModalRemove } from "./ModalRemove";
import { toast } from "react-toastify";
export const List = () => {
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  //modal remove
  //   const [openModalRemove, setOpenModalRemove] = useState(false);
  //   const [idRemove, setIdRemove] = useState();

  //   const handleOpenModalRemove = () => {
  //     setOpenModalRemove(true);
  //   };
  //   const handleCloseModalRemove = () => {
  //     setOpenModalRemove(false);
  //   };
  //   const handleRemove = async () => {
  //     await courseService.remove(idRemove);
  //     await getCourse(1);
  //     toast.success("Xóa thành công !!");
  //   };

  //phan trang
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  const getCourse = async (page) => {
    const data = await courseService.getCourse(page);
    setCourse(data);
  };

  useEffect(() => {
    getCourse(page);
  }, [page]);

  //search
  //   const handleSearchByName = async (name) => {
  //     const data = await courseService.searchByName(name);
  //     setCourse(data);
  //   };

  //format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  //remove all
  const handleCheckBoxRemove = (id) => {
    setSelectedCustomerIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((customerId) => customerId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };
  console.log(selectedCustomerIds);
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
          {course.map((value, index) => (
            <tr key={value.id}>
              <th scope="row">{index + 1}</th>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.lession.length}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <NavLink to={`/update/${value.id}`}>
                    <button type="button" className="btn btn-success btn-sm">
                      Update
                    </button>
                  </NavLink>

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
                  <NavLink to={`/more/${value.id}`}>
                    <button>More</button>
                  </NavLink>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {/* <NavLink to={"/customer/add"}>
          <button type="button" class="btn btn-primary">
            Add Customer
          </button>
        </NavLink> */}
      </div>
      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" onClick={handlePreviousPage}>
                Previous
              </button>
            </li>
            <li class="page-item">
              <span class="page-link">{page}</span>
            </li>
            <li class="page-item">
              <span class="page-link">/</span>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={handleNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* {openModalRemove && (
        <ModalRemove
          openModal={openModalRemove}
          closeModal={handleCloseModalRemove}
          handleRemove={handleRemove}
        />
      )} */}
    </>
  );
};
