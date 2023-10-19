import axios from "axios";

export const Login = async (value) => {
  try {
    const data = await axios.post(
      "http://localhost:8080/api/form/login",
      value
    );
    return [data.data.token];
  } catch (e) {
    console.log(e);
  }
};

export const Register = async (value) => {
  try {
    const data = await axios.post(
      "http://localhost:8080/api/form/register",
      value
    );
    return [data.data];
  } catch (e) {
    console.log(e);
  }
};

export const getRole = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/api/form/getRole`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
