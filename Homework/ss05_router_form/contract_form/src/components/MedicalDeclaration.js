import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export function MedicalDeclaration() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Form Medical Declaration</h1>

        <Formik
          initialValues={{
            name: "",
            cccd: "",
            yearOfBirth: "",
            gender: "0",
            nationality: "",
            companyWork: "",
            workDepartment: "",
            healthInsurance: "0",
            city: "",
            county: "",
            ward: "",
            detailedAddress: "",
            phoneNumber: 0,
            email: "",
            moveDetail: "",
            symptom: [],
            exposure: "0",
          }}
          onSubmit={(value, { setSubmitting }) => {
            setSubmitting(false);
            toast.success("Khai báo thành công!");
            console.log(value);
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            cccd: Yup.string().required("Required"),
            yearOfBirth: Yup.number().min(1900).required("Required"),
            nationality: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            county: Yup.string().required("Required"),
            ward: Yup.string().required("Required"),
            detailedAddress: Yup.string().required("Required"),
            phoneNumber: Yup.number().required("Required"),
            email: Yup.string()
              .required("Required")
              .matches(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                "Invalid email address"
              ),
          })}
        >
          <Form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Họ tên
              </label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              <ErrorMessage
                name="name"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="cccd" className="form-label">
                Số hộ chiếu /CMND
              </label>
              <Field
                type="text"
                className="form-control"
                id="cccd"
                name="cccd"
              />
              <ErrorMessage
                name="cccd"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="yearOfBirth" className="form-label">
                Năm sinh
              </label>
              <Field
                type="number"
                className="form-control"
                id="yearOfBirth"
                name="yearOfBirth"
              />
              <ErrorMessage
                name="yearOfBirth"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label className="form-label">Giới tính</label>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="radio"
                  value="0"
                  id="nam"
                  name="gender"
                />
                <label className="form-check-label" for="nam">
                  Nam
                </label>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="radio"
                  value="1"
                  id="nu"
                  name="gender"
                />
                <label className="form-check-label" for="nu">
                  Nữ
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label for="nationality" className="form-label">
                Quốc tịch
              </label>
              <Field
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
              />
              <ErrorMessage
                name="nationality"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="companyWork" className="form-label">
                Công ty làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                id="companyWork"
                name="companyWork"
              />
            </div>

            <div className="mb-3">
              <label for="workDepartment" className="form-label">
                Bộ phận làm việc
              </label>
              <Field
                type="text"
                className="form-control"
                id="workDepartment"
                name="workDepartment"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  id="healthInsurance"
                  name="healthInsurance"
                  value="yes"
                />
                <label className="form-check-label" for="healthInsurance">
                  Có thẻ bảo hiểm y tế
                </label>
              </div>
            </div>

            <p style={{ fontSize: "30px", textAlign: "center" }}>
              <b>Địa chỉ liên lạc tại Việt Nam</b>
            </p>

            <div className="mb-3">
              <label for="city" className="form-label">
                Tỉnh Thành
              </label>
              <Field
                type="text"
                className="form-control"
                id="city"
                name="city"
              />
              <ErrorMessage
                name="city"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="county" className="form-label">
                Quận/Huyện
              </label>
              <Field
                type="text"
                className="form-control"
                id="county"
                name="county"
              />
              <ErrorMessage
                name="county"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="ward" className="form-label">
                Phường xã
              </label>
              <Field
                type="text"
                className="form-control"
                id="ward"
                name="ward"
              />
              <ErrorMessage
                name="ward"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="ward" className="form-label">
                Số nhà, phố, tổ dân phố/thôn/đội
              </label>
              <Field
                type="text"
                className="form-control"
                id="detailedAddress"
                name="detailedAddress"
              />
              <ErrorMessage
                name="detailedAddress"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="phone" className="form-label">
                Điện thoại
              </label>
              <Field
                type="number"
                className="form-control"
                id="phone"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <Field
                type="text"
                className="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                className="form-err"
                component="span"
              ></ErrorMessage>
            </div>

            <div className="mb-3">
              <b style={{ fontSize: "30px" }}>
                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia /vùng lãnh thổ
                nào(có thể đi qua nhiều quốc gia)
              </b>
              <Field
                as="textarea"
                className="form-control"
                id="moveDetail"
                name="moveDetail"
              />
            </div>

            <div className="mb-3">
              <b style={{ fontSize: "30px" }}>
                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào
                sau đây không?
              </b>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="fever"
                  id="fever"
                  name="symptom"
                />
                <label className="form-check-label" for="fever">
                  Sốt
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="cough"
                  id="cough"
                  name="symptom"
                />
                <label className="form-check-label" for="cough">
                  Ho
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="shortnessOfBreath"
                  id="shortnessOfBreath"
                  name="symptom"
                />
                <label className="form-check-label" for="shortnessOfBreath">
                  Khó thở
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="pneumonia"
                  id="pneumonia"
                  name="symptom"
                />
                <label className="form-check-label" for="pneumonia">
                  Viêm phổi
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="tired"
                  id="tired"
                  name="symptom"
                />
                <label className="form-check-label" for="tired">
                  Mệt mỏi
                </label>
              </div>
            </div>

            <div className="mb-3">
              <b style={{ fontSize: "30px" }}>
                Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với
              </b>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="suspectedDisease"
                  id="suspectedDisease"
                  name="symptom"
                />
                <label className="form-check-label" for="suspectedDisease">
                  Người có bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="beyondCovid"
                  id="beyondCovid"
                  name="symptom"
                />
                <label className="form-check-label" for="beyondCovid">
                  Người từ nước có bênh COVID-19
                </label>
              </div>

              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="symptomatic"
                  id="symptomatic"
                  name="symptom"
                />
                <label className="form-check-label" for="symptomatic">
                  Người có biểu hiện (Sốt,ho,khó thở,viêm phổi)
                </label>
              </div>
            </div>
            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn-submit"
            >
              SUBMIT
            </button>

            <div style={{ height: " 100px" }}>
              <p> </p>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
