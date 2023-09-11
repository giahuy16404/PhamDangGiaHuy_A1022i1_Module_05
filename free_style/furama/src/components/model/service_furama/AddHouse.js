import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as serviceFurama from "../../../service/service_furama_service/serviceFuramaService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const AddHouse = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add House</h3>
      <Formik
        initialValues={{
          serviceName: undefined,
          serviceType: "Villa",
          usageArea: undefined,
          rentalCost: undefined,
          maxGuests: undefined,
          rentalType: undefined,
          otherFacilities: [],
          numberOfFloors: undefined,
          imageLink: undefined,
        }}
        onSubmit={(values, { setSubmitting }) => {
          serviceFurama.add(values);
          setSubmitting(false);
          toast.success("Successfully!!");
          navigate("/service");
        }}
        validationSchema={Yup.object({
          serviceName: Yup.string().required("Required"),
          usageArea: Yup.number().required("Required"),
          rentalCost: Yup.string().required("Required"),
          maxGuests: Yup.number().required("Required"),
          rentalType: Yup.string().required("Required"),
          numberOfFloors: Yup.string().required("Required"),
        })}
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
            <ErrorMessage
              className="form-err"
              name="serviceName"
              component="span"
            ></ErrorMessage>
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="usageArea"
              component="span"
            ></ErrorMessage>
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="rentalCost"
              component="span"
            ></ErrorMessage>
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="maxGuests"
              component="span"
            ></ErrorMessage>
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
              <Field
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
              <Field
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="poolArea"
              component="span"
            ></ErrorMessage>
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
            />{" "}
            <ErrorMessage
              className="form-err"
              name="numberOfFloors"
              component="span"
            ></ErrorMessage>
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
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
