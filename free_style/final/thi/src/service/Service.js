import axios from "axios";

export const getCustomerType = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/customerType`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value) => {
  try {
    const data = await axios.post(`http://localhost:8080/customer`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getList = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/customer?_page=${page}&_limit=3`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const searchByName = async (name) => {
  try {
    const data = await axios.get(`http://localhost:8080/customer`);
    const searchFilter = data.data.filter((value) => value.name.includes(name));
    return searchFilter;
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

export const update = async (id, value) => {
  try {
    const data = await axios.put(`http://localhost:8080/customer/${id}`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const remove = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:8080/customer/${id}`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
