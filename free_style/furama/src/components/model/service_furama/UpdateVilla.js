import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as serviceFurama from "../../../service/service_furama_service/serviceFuramaService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const UpdateVilla = () => {
  const navigate = useNavigate();
  const idUpdate = useParams();
  const [villa, setVilla] = useState([]);
  useEffect(() => {
    findById();
  }, []);
  const findById = async () => {
    const dataVilla = await serviceFurama.findById(idUpdate.id);
    setVilla(dataVilla);
  };
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Update Villa</h3>
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: villa.id,
          serviceName: villa.serviceName,
          serviceType: villa.serviceType,
          usageArea: villa.usageArea,
          rentalCost: villa.rentalCost,
          maxGuests: villa.maxGuests,
          rentalType: villa.rentalType,
          otherFacilities: [villa.otherFacilities],
          poolArea: villa.poolArea,
          numberOfFloors: villa.numberOfFloors,
          imageLink: villa.imageLink,
        }}
        onSubmit={(values, { setSubmitting }) => {
          serviceFurama.update(idUpdate.id, values);
          setSubmitting(false);
          toast.success("Successfully!!");
          navigate("/service");
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="serviceName" className="form-label">
              Service Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="serviceName"
              placeholder="Enter Service Name"
              name="serviceName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="usageArea" className="form-label">
              Area
            </label>
            <Field
              type="number"
              className="form-control"
              id="usageArea"
              placeholder="Enter Area"
              name="usageArea"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rentalCost" className="form-label">
              Rental Cost
            </label>
            <Field
              type="number"
              className="form-control"
              id="rentalCost"
              placeholder="Enter  Rental Cost"
              name="rentalCost"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rentalCost" className="form-label">
              Max People
            </label>
            <Field
              type="number"
              className="form-control"
              id="maxGuests"
              placeholder="Enter  Max People"
              name="maxGuests"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rentalCost" className="form-label">
              Rental Type
            </label>
            <Field
              as="select"
              className="form-select"
              id="rentalType"
              placeholder="Enter  Max People"
              name="rentalType"
            >
              <option selected>Rental Type</option>
              <option value="Year">Year</option>
              <option value="Month">Month</option>
              <option value="Day">Day</option>
            </Field>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="A"
                name="otherFacilities"
                value="A"
              />
              <label className="form-check-label" htmlFor="A">
                A
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="B"
                name="otherFacilities"
                value="B"
              />
              <label className="form-check-label" htmlFor="B">
                B
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="rentalCost" className="form-label">
              Pool Area
            </label>
            <Field
              type="number"
              className="form-control"
              id="poolArea"
              placeholder="Pool Area"
              name="poolArea"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfFloors" className="form-label">
              Number Of Floors
            </label>
            <Field
              type="number"
              className="form-control"
              id="numberOfFloors"
              placeholder="Pool Area"
              name="numberOfFloors"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageLink" className="form-label">
              Image Link
            </label>
            <Field
              type="text"
              className="form-control"
              id="imageLink"
              placeholder="Pool Area"
              name="imageLink"
            />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};