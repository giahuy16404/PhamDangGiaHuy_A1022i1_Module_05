import { NavLink } from "react-router-dom";
import { RemoveModal } from "./RemoveServiceModal";
import { useState } from "react";

export const ListService = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="col-sm" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
                className="card-img-top"
                alt="https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png"
              />
              <div className="card-body">
                <h5 className="card-title">Hy neee</h5>
                <p className="card-text">Hy xinh traiiiiii</p>
                <button
                  className="card-text"
                  onClick={handleOpenModal}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <NavLink to={"/service/update"}>
                  <button className="card-text">Update</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <RemoveModal openModal={openModal} closeModal={handleCloseModal} />
      )}
    </>
  );
};
