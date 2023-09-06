import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as customerService from "../../../service/customer_service/customerService";
export const ListCustomer = () => {
  const [customerList, setCustomerList] = useState([]);
  const [page, setPage] = useState(1);

  const getList = async (page) => {
    const data = await customerService.getList(page);
    console.log(data);
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
              <td>{value.fullName}</td>
              <td>{value.dateOfBirth}</td>
              <td>{value.gender}</td>
              <td>{value.phoneNumber}</td>
              <td>{value.email}</td>
              <td>{value.customerType}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <NavLink to={`/customer/update/${value.id}`}>
                    <button type="button" className="btn btn-success btn-sm">
                      Update
                    </button>
                  </NavLink>
                  <button type="button" bn className="btn btn-danger btn-sm">
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
              <button class="page-link" onClick={handlePreviousPage}>
                Previous
              </button>
            </li>
            <li class="page-item">
              <span class="page-link">{page}</span>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={handleNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
