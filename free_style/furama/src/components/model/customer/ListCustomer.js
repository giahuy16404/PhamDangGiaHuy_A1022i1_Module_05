import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ListCustomer = () => {
  const customerData = [
    {
      id: 1,
      fullName: "Nguyen Van A",
      dateOfBirth: "1990-01-15",
      gender: "Male",
      identityNumber: "123456789",
      phoneNumber: "0987654321",
      email: "nguyenvana@example.com",
      customerType: "Diamond",
    },
    {
      id: 2,
      fullName: "Tran Thi B",
      dateOfBirth: "1985-03-20",
      gender: "Female",
      identityNumber: "987654321",
      phoneNumber: "0123456789",
      email: "tranthib@example.com",
      customerType: "Platinum",
    },
    {
      id: 3,
      fullName: "Le Van C",
      dateOfBirth: "1992-07-10",
      gender: "Male",
      identityNumber: "567890123",
      phoneNumber: "0789654321",
      email: "levanc@example.com",
      customerType: "Gold",
    },
    {
      id: 4,
      fullName: "Pham Thi D",
      dateOfBirth: "1998-05-25",
      gender: "Female",
      identityNumber: "234567890",
      phoneNumber: "0912345678",
      email: "phamthid@example.com",
      customerType: "Silver",
    },
    {
      id: 5,
      fullName: "Hoang Van E",
      dateOfBirth: "1980-11-02",
      gender: "Male",
      identityNumber: "345678901",
      phoneNumber: "0890123456",
      email: "hoangvane@example.com",
      customerType: "Member",
    },
    {
      id: 6,
      fullName: "Tran Van F",
      dateOfBirth: "1995-09-12",
      gender: "Male",
      identityNumber: "456789012",
      phoneNumber: "0765432198",
      email: "tranvanf@example.com",
      customerType: "Diamond",
    },
    {
      id: 7,
      fullName: "Nguyen Thi G",
      dateOfBirth: "1987-04-30",
      gender: "Female",
      identityNumber: "678901234",
      phoneNumber: "0976543210",
      email: "nguyenthig@example.com",
      customerType: "Platinum",
    },
    {
      id: 8,
      fullName: "Le Van H",
      dateOfBirth: "1993-12-08",
      gender: "Male",
      identityNumber: "789012345",
      phoneNumber: "0854321098",
      email: "levanh@example.com",
      customerType: "Gold",
    },
  ];

  const [customerList, setCustomerList] = useState(customerData);

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
                  <button type="button" className="btn btn-danger btn-sm">
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
        <button type="button" class="btn btn-primary">
          Add Customer
        </button>
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
