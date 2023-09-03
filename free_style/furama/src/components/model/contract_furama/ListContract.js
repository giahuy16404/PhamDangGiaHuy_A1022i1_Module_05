import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ListContract = () => {
  const contractData = [
    {
      id: 1,
      code: "ABC123",
      nameCustomer: "John Doe",
      nameService: "Service A",
      startDate: "2023-09-01",
      endDate: "2023-09-10",
      deposit: 100,
      total: 500,
    },
    {
      id: 2,
      code: "DEF456",
      nameCustomer: "Jane Smith",
      nameService: "Service B",
      startDate: "2023-09-05",
      endDate: "2023-09-15",
      deposit: 150,
      total: 600,
    },
    {
      id: 3,
      code: "GHI789",
      nameCustomer: "Bob Johnson",
      nameService: "Service C",
      startDate: "2023-09-10",
      endDate: "2023-09-20",
      deposit: 120,
      total: 550,
    },
    {
      id: 4,
      code: "JKL012",
      nameCustomer: "Alice Brown",
      nameService: "Service D",
      startDate: "2023-09-15",
      endDate: "2023-09-25",
      deposit: 130,
      total: 700,
    },
    {
      id: 5,
      code: "MNO345",
      nameCustomer: "Eve Wilson",
      nameService: "Service E",
      startDate: "2023-09-20",
      endDate: "2023-09-30",
      deposit: 110,
      total: 480,
    },
    {
      id: 6,
      code: "PQR678",
      nameCustomer: "Michael Lee",
      nameService: "Service F",
      startDate: "2023-09-25",
      endDate: "2023-10-05",
      deposit: 180,
      total: 750,
    },
    {
      id: 7,
      code: "STU901",
      nameCustomer: "Sara Miller",
      nameService: "Service G",
      startDate: "2023-09-30",
      endDate: "2023-10-10",
      deposit: 140,
      total: 600,
    },
    {
      id: 8,
      code: "VWX234",
      nameCustomer: "David Davis",
      nameService: "Service H",
      startDate: "2023-10-05",
      endDate: "2023-10-15",
      deposit: 160,
      total: 700,
    },
  ];

  const [listContract, setListContract] = useState(contractData);

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
            <th scope="col">Name Customer</th>
            <th scope="col">Name Service</th>
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
              <td>{value.nameCustomer}</td>
              <td>{value.nameService}</td>
              <td>{value.startDate}</td>
              <td>{value.endDate}</td>
              <td>{value.deposit}</td>
              <td>{value.total}</td>
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
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
