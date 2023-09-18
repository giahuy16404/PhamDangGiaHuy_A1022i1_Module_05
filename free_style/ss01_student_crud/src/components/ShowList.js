import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { NavLink } from "react-router-dom";
import Delete from "./Delete";

export const ShowList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);

  const handleButtonDelete = () => {
    setModalDelete(true);
  };

  const handlePrevious = () => {
    setPage((prev) => {
      if (prev - 1 < 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setPage((prev) => {
      if (prev + 1 === totalPages) {
        return page;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/student/list?page=${page}&size=5`)
      .then((res) => {
        console.log(res.data.content);
        setTotalPages(res.data.totalPages);
        setStudents(res.data.content);
      })
      .catch((error) => console.log(error));
  }, [page]);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((value) => (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.birthday}</td>
              <td>{value.gender ? "Nam" : "Nữ"}</td>
              <td>{value.address}</td>
              <td>
                {
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to={`/update/${value.id}`}
                  >
                    <button style={{ backgroundColor: "green" }}>Update</button>
                  </NavLink>
                }
              </td>
              <td>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={handleButtonDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalDelete && <Delete openModal={true} />}
      <div className="pagination">
        <Pagination
          previous={handlePrevious}
          next={handleNext}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};
