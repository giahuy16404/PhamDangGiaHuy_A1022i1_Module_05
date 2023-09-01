import { NavLink } from "react-router-dom";
import { RemoveModal } from "./RemoveServiceModal";
import { useState } from "react";

export const ListService = () => {
  const serviceData = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 1",
      description: "Mô tả dịch vụ 1",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 2",
      description: "Mô tả dịch vụ 2",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 3",
      description: "Mô tả dịch vụ 3",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 4",
      description: "Mô tả dịch vụ 4",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 5",
      description: "Mô tả dịch vụ 5",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 6",
      description: "Mô tả dịch vụ 6",
    },
    {
      id: 7,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 7",
      description: "Mô tả dịch vụ 7",
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
      title: "Dịch vụ 8",
      description: "Mô tả dịch vụ 8",
    },
  ];

  const [serviceList, setServiceList] = useState(serviceData);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
                  src={value.image}
                  className="card-img-top"
                  alt={value.image}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <button
                    className="card-text"
                    onClick={handleOpenModal}
                    style={{ marginRight: "10px" }}
                  >
                    Remove
                  </button>
                  <NavLink to={`/service/update/${value.id}`}>
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
        <NavLink to={"/service/add"}>
          <button type="button" class="btn btn-primary">
            Add Service
          </button>
        </NavLink>
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center" }}>
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
      {openModal && (
        <RemoveModal openModal={openModal} closeModal={handleCloseModal} />
      )}
    </>
  );
};
