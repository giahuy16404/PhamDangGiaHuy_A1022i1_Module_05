import { NavLink } from "react-router-dom";
import { RemoveModal } from "./RemoveServiceModal";
import { useState } from "react";

export const ListService = () => {
  const serviceData = [
    {
      id: 1,
      serviceName: "Service 1",
      usageArea: "100 m²",
      rentalCost: "$200/day",
      maxGuests: 2,
      rentalType: "Daily rental",
      otherFacilities: ["Air conditioning", "TV", "Wi-Fi"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 2,
      serviceName: "Service 2",
      usageArea: "120 m²",
      rentalCost: "$250/day",
      maxGuests: 4,
      rentalType: "Daily rental",
      otherFacilities: ["Balcony", "Kitchenette", "Free breakfast"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 3,
      serviceName: "Service 3",
      usageArea: "80 m²",
      rentalCost: "$150/day",
      maxGuests: 2,
      rentalType: "Daily rental",
      otherFacilities: ["Sea view", "Swimming pool", "Gym"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 4,
      serviceName: "Service 4",
      usageArea: "60 m²",
      rentalCost: "$120/day",
      maxGuests: 3,
      rentalType: "Daily rental",
      otherFacilities: ["Garden view", "Free parking", "Bar"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 5,
      serviceName: "Service 5",
      usageArea: "90 m²",
      rentalCost: "$180/day",
      maxGuests: 2,
      rentalType: "Daily rental",
      otherFacilities: ["Mountain view", "Spa", "Restaurant"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 6,
      serviceName: "Service 6",
      usageArea: "70 m²",
      rentalCost: "$140/day",
      maxGuests: 3,
      rentalType: "Daily rental",
      otherFacilities: ["City view", "Laundry", "Room service"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 7,
      serviceName: "Service 7",
      usageArea: "110 m²",
      rentalCost: "$220/day",
      maxGuests: 4,
      rentalType: "Daily rental",
      otherFacilities: ["Lake view", "Fitness center", "Concierge"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
    },
    {
      id: 8,
      serviceName: "Service 8",
      usageArea: "130 m²",
      rentalCost: "$270/day",
      maxGuests: 5,
      rentalType: "Daily rental",
      otherFacilities: ["River view", "Pool bar", "Business center"],
      imageLink:
        "https://cdn.pixabay.com/photo/2016/07/07/23/17/colors-1503418_1280.png",
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
                  src={value.imageLink}
                  className="card-img-top"
                  alt={value.imageLink}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.serviceName}</h5>
                  <p className="card-text">{value.usageArea}</p>
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
