import { NavLink } from "react-router-dom";
import { RemoveModal } from "./RemoveServiceModal";
import { useEffect, useState } from "react";
import * as serviceFurama from "../../../service/service_furama_service/serviceFuramaService";
import { ModalSelectAddService } from "./ModalSelectAddService";

export const ListService = () => {
  const [serviceList, setServiceList] = useState([]);
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [page, setPage] = useState(1);
  const [idRemove, setIdRemove] = useState();
  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };
  const handleCloseModalAdd = () => {
    setOpenModalAdd(false);
  };

  const handleOpenModalRemove = () => {
    setOpenModalRemove(true);
  };
  const handleCloseModalRemove = () => {
    setOpenModalRemove(false);
  };

  //Call api list
  useEffect(() => {
    getListService(page);
  }, [page]);

  const getListService = async (page) => {
    const dataServiceList = await serviceFurama.getList(page);
    setServiceList(dataServiceList);
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  //Remove facility
  const handleRemove = async () => {
    console.log(idRemove);
    await serviceFurama.remove(idRemove);
    getListService(page);
  };
  return (
    <>
      {/* Card List Service */}
      <div class="container text-center">
        <div class="row">
          {serviceList.map((value) => (
            <div class="col-sm" style={{ marginTop: "20px" }} key={value.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={value.imageLink}
                  className="card-img-top"
                  alt={value.imageLink}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.serviceName}</h5>
                  <p className="card-text">{value.usageArea}</p>
                  <button
                    className="card-text"
                    onClick={() => {
                      handleOpenModalRemove();
                      setIdRemove(value.id);
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Remove
                  </button>
                  <NavLink
                    to={`/service/update/${value.serviceType}/${value.id}`}
                  >
                    <button className="card-text">Update</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleOpenModalAdd}
        >
          Add Service
        </button>
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" onClick={handlePreviousPage}>
                Previous
              </button>
            </li>
            <li class="page-item">
              <span class="page-link" href="#">
                {page}
              </span>
            </li>
            <li class="page-item">
              <span class="page-link" href="#">
                /
              </span>
            </li>
            <li class="page-item">
              <span class="page-link" href="#">
                1
              </span>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={handleNextPage}>
                Next
              </button>
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
      {openModalAdd && (
        <ModalSelectAddService
          openModal={openModalAdd}
          closeModal={handleCloseModalAdd}
        />
      )}
    </>
  );
};
