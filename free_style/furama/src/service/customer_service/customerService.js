import axios from "axios";

export const getList = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/customer?_page=${page}&limit=8`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerType = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/customerType`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const addCustomer = async (value) => {
  try {
    const data = await axios.post(`http://localhost:8080/customer`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (id, value) => {
  try {
    const data = await axios.put(`http://localhost:8080/customer/${id}`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const findById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:8080/customer/${id}`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
