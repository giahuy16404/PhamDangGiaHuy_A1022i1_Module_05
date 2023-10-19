import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as serviceFurama from "../../../service/service_furama_service/serviceFuramaService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import storage from "../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ReactLoading from "react-loading";

import * as Yup from "yup";
export const UpdateVilla = () => {
  // State to store uploaded file
  const [file, setFile] = useState();

  //List Rent Type
  const [rentType, setRentType] = useState([]);

  //list Service Type
  const [serviceType, setServiceType] = useState();

  //List Service
  const [service, setService] = useState({});

  // progress
  const [percent, setPercent] = useState(0);

  //Loading Form
  const [isLoading, setIsLoading] = useState();

  //Id handle update
  const idUpdate = useParams();
  //Get service by id
  useEffect(() => {
    getListServiceById(idUpdate.id);
  }, []);
  const getListServiceById = async (id) => {
    const data = await serviceFurama.findById(id);
    setService(data);
  };

  //Get List Rent Type
  useEffect(() => {
    getListRentType();
  }, []);
  const getListRentType = async () => {
    const data = await serviceFurama.getRentType();
    setRentType(data);
  };

  //Get List Service Type
  useEffect(() => {
    getListServiceType();
  }, []);
  const getListServiceType = async () => {
    const data = await serviceFurama.getServiceType();
    const dataFinal = data.find((data) => data.id === 1);
    setServiceType(dataFinal);
  };

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  //Handle Upload img
  const handleUpload = async () => {
    if (!file) {
      setIsLoading(false);
      return service.imgLink;
    }
    return new Promise((resolve) => {
      const storageRef = ref(storage, `/files/${file.name}`);
      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
          setIsLoading(true);
        },

        (err) => console.log(err),
        async () => {
          // download url
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
        }
      );
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Update Villa</h3>
      {console.log(service)}
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: service.id,
          name: service.name,
          serviceType: serviceType,
          area: service.area,
          cost: service.cost,
          maxPeople: service.maxPeople,
          rentType: JSON.stringify(service.rentType),
          standardRoom: service.standardRoom,
          descriptionConvenience: service.descriptionConvenience,
          poolArea: service.poolArea,
          numberOfFloors: service.numberOfFloors,
          imgLink: service.imgLink,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const urlImg = await handleUpload();
          const obj = {
            ...values,
            rentType: JSON.parse(values.rentType),
            imgLink: urlImg,
          };
          serviceFurama.update(obj);
          setSubmitting(false);
          toast.success("Successfully!!");
          navigate("/service");
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          area: Yup.number().required("Required"),
          cost: Yup.string().required("Required"),
          maxPeople: Yup.number().required("Required"),
          rentType: Yup.string().required("Required"),
          poolArea: Yup.string().required("Required"),
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
              name="name"
            />
            <ErrorMessage
              className="form-err"
              name="name"
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
              name="area"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="area"
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
              name="cost"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="cost"
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
              name="maxPeople"
            />{" "}
            <ErrorMessage
              className="form-err"
              name="maxPeople"
              component="span"
            ></ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="rentType" className="form-label">
              Rental Type
            </label>
            <Field
              as="select"
              className="form-select"
              id="rentType"
              placeholder="Enter  Max People"
              name="rentType"
            >
              {rentType.map((value) => (
                <option value={JSON.stringify(value)}>{value.name}</option>
              ))}
            </Field>
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
            <input type="file" onChange={handleChange} accept="/image/*" />
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
      {isLoading && (
        <div className="loading-spinner">
          <ReactLoading type="spin" color="#3498db" height={50} width={50} />
        </div>
      )}
    </>
  );
};
