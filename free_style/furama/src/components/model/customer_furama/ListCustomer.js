import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as customerService from "../../../service/customer_service/customerService";
import { RemoveModal } from "./ModalRemove";
import { toast } from "react-toastify";
export const ListCustomer = () => {
  const [customerList, setCustomerList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [idRemove, setIdRemove] = useState();

  const handleOpenModalRemove = () => {
    setOpenModalRemove(true);
  };
  const handleCloseModalRemove = () => {
    setOpenModalRemove(false);
  };

  const handleRemove = async () => {
    await customerService.remove(idRemove);
    getList(page);
    toast.success("Xóa thành công !!");
  };

  const getList = async (page) => {
    const [data, totalPage] = await customerService.getPage(page);
    setTotalPage(totalPage);
    setCustomerList(data);
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  //call api
  useEffect(() => {
    getList(page);
  }, [page]);

  return (
    <>
      <h3
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "20px" }}
      >
        Customer
      </h3>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Full Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">CustomerType</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((value, index) => (
            <tr key={value.id}>
              <th scope="row">{index + 1}</th>
              <td>{value.name}</td>
              <td>{value.birthDay}</td>
              <td>{value.gender === true ? "Nam" : "Nu"}</td>
              <td>{value.phone}</td>
              <td>{value.email}</td>
              <td>{value.customerType.name}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <NavLink to={`/customer/update/${value.id}`}>
                    <button type="button" className="btn btn-success btn-sm">
                      Update
                    </button>
                  </NavLink>

                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleOpenModalRemove();
                      setIdRemove(value.id);
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Remove
                  </button>
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
        <NavLink to={"/customer/add"}>
          <button type="button" class="btn btn-primary">
            Add Customer
          </button>
        </NavLink>
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
              {page > 0 && (
                <button class="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              )}
            </li>
            <li class="page-item">
              <span class="page-link">{page + 1}</span>
            </li>
            <li class="page-item">
              <span class="page-link">/</span>
            </li>
            <li class="page-item">
              <span class="page-link">{totalPage}</span>
            </li>
            <li class="page-item">
              {page + 1 !== totalPage && (
                <button class="page-link" onClick={handleNextPage}>
                  Next
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {openModalRemove && (
        <RemoveModal
          openModal={openModalRemove}
          closeModal={handleCloseModalRemove}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
};
