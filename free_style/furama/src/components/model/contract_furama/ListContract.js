import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contractService from "../../../service/contract_service/contract_service";
export const ListContract = () => {
  const [listContract, setListContract] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  const getPage = async (page) => {
    const [data, totalPage] = await contractService.getPage(page);
    setTotalPage(totalPage);
    setListContract(data);
  };
  useEffect(() => {
    getPage(page);
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
            <th scope="col">Name Service</th>
            <th scope="col">Name Customer</th>
            <th scope="col">Name Employee</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Deposit</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {listContract.map((value, index) => (
            <tr key={value.id}>
              <td>{index + 1}</td>
              <td>{value.service.name}</td>
              <td>{value.customer.name}</td>
              <td>{value.employee.name}</td>
              <td>{value.starDate}</td>
              <td>{value.endDate}</td>
              <td>{value.deposit}</td>
              <td>{value.totalMoney}</td>
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
        <NavLink to={"/contract/add"}>
          <button type="button" class="btn btn-primary">
            Add Contract
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
    </>
  );
};
