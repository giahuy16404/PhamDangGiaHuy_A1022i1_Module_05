import React, { useRef } from "react";
import * as accountService from "../../service/account/accountService";
import * as sendGmailService from "../../service/send_gmail/SendGmailService";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState();
  const getRole = async () => {
    const dataRole = await accountService.getRole();
    setRole(dataRole);
  };
  useEffect(() => {
    getRole();
  }, []);
  return (
   
    <>
     {
      role !== undefined ?  <Formik
      initialValues={{
        username: "",
        password: "",
        gmail: "",
        role: JSON.stringify(role[0]),
      }}
      onSubmit={async (values) => {
        const obj = {
          ...values,
          role: JSON.parse(values.role),
        };
        const sendGmail = {
          recipient: obj.gmail,
          msgBody: `Username : ${obj.username} : Password : ${obj.password} `,
          subject: "Đăng ký thành công",
          attachment: "",
        };
        const success = await accountService.Register(obj);
        if (success) {
          navigate("/login");
          toast.success("Đăng ký thành công!!");
          sendGmailService.SendGmail(sendGmail);
        } else {
          toast.error("Đăng ký thất bại!!");
          navigate("/register");
        }
      }}
    >
      <Form>
        <MDBContainer fluid className="p-3 my-5">
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            Đây là đăng ký
          </h1>
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <b>
                <p>User name</p>
              </b>
              <Field
                style={{ marginRight: "30px" }}
                type="text"
                wrapperClass="mb-4"
                label="username"
                name="username"
                id="formControlLg"
                size="lg"
              />
              <b>
                <p>Password</p>
              </b>

              <Field
                wrapperClass="mb-4"
                label="Password"
                name="password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <b>
                <p>Gmail</p>
              </b>

              <Field
                wrapperClass="mb-4"
                label="gmail"
                name="gmail"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <div className="mb-3">
                <b>
                  <label htmlFor="customerType" className="form-label">
                    Role
                  </label>
                </b>

                <Field
                  as="select"
                  className="form-select"
                  id="role"
                  name="role"
                >
                  {role.map((value) => (
                    <option value={JSON.stringify(value)}>
                      {value.name}
                    </option>
                  ))}
                </Field>
              </div>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />

                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg" type="submit">
                Đăng ký
              </MDBBtn>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div>
              <NavLink to={"/login"}>
                <MDBBtn className="mb-4 w-100" size="lg">
                  Đăng nhập
                </MDBBtn>
              </NavLink>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Continue with facebook
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#55acee" }}
              >
                <MDBIcon fab icon="twitter" className="mx-2" />
                Continue with twitter
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Form>
    </Formik> : ""
    }
     
    </>
  );
};
