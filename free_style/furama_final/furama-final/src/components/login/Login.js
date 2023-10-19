import React from "react";
import * as accountService from "../../service/account/accountService";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const token = await accountService.Login(values);
          localStorage.setItem("token", token);
          if (token) {
            navigate("/service");
            toast.success("Đăng nhập thành công");
          } else {
            toast.error("Đăng nhập thất bại~~");
            navigate("/login");
            resetForm();
          }
        }}
      >
        <Form>
          <MDBContainer fluid className="p-3 my-5">
            <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
              Đây là đăng nhập
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
                <p>User name</p>
                <Field
                  style={{ marginRight: "30px" }}
                  type="text"
                  wrapperClass="mb-4"
                  label="username"
                  name="username"
                  id="formControlLg"
                  size="lg"
                />
                <p>Password</p>

                <Field
                  wrapperClass="mb-4"
                  label="Password"
                  name="password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />

                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" size="lg">
                  Đăng nhập
                </MDBBtn>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                <NavLink to={"/register"}>
                  <MDBBtn className="mb-4 w-100" size="lg">
                    Đăng ký
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
      </Formik>
    </>
  );
};
