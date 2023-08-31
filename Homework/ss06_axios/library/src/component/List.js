import { useEffect, useState } from "react";
import * as libraryService from "../service/libraryService";
import { CreateModal } from "./CreateModal";
import { NavLink } from "react-router-dom";
import { Delete } from "./Delete";

export const List = () => {
  const [library, setLibrary] = useState([]);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalDelete, setModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const listLibrary = await libraryService.getList();
    setLibrary(listLibrary);
  };

  const handleOpenModalCreate = () => {
    setIsModalCreate(true);
  };

  const handleCloseModal = () => {
    setIsModalCreate(false);
  };

  const handleOpenModalDelete = (id) => {
    setModalDelete(true);
    return id;
  };

  const handleCloseModalDelete = () => {
    setModalDelete(false);
  };

  return (
    <>
      <h3 style={{ display: "inline-block", margin: "20px" }}>Library</h3>

      <button
        style={{ float: "right", margin: "20px" }}
        type="button"
        className="btn btn-success"
        onClick={handleOpenModalCreate}
      >
        Add a new book
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">stt</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {library.map((value, index) => (
            <tr key={value.id}>
              <td>{index + 1}</td>
              <td>{value.title}</td>
              <td>{value.quantity}</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <NavLink to={`/update/${value.id}`}>
                    <button type="button" className="btn btn-success">
                      Update
                    </button>
                  </NavLink>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleOpenModalDelete();
                      setIdDelete(value.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
      {isModalCreate && (
        <CreateModal
          openModal={isModalCreate}
          closeModal={handleCloseModal}
          createSuccess={getList}
        />
      )}

      {isModalDelete && (
        <Delete
          openModal={isModalDelete}
          closeModal={handleCloseModalDelete}
          idDelete={idDelete}
          deleteSuccess={getList}
        />
      )}
    </>
  );
};
