import axios from "axios";

export const getPage = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/customer/getPage?page=${page}&size=8`
    );
    return [data.data.content, data.data.totalPages];
  } catch (e) {
    console.log(e);
  }
};

export const getList = async (page) => {
  try {
    const data = await axios.get(`http://localhost:8080/api/customer/getList`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerType = async () => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/customer/getCustomerType`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const add = async (value) => {
  try {
    const data = await axios.post(
      `http://localhost:8080/api/customer/add`,
      value
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (value) => {
  try {
    const data = await axios.put(
      `http://localhost:8080/api/customer/update`,
      value
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const findById = async (id) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/customer/getById/${id}`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const remove = async (id) => {
  try {
    const data = await axios.delete(
      `http://localhost:8080/api/customer/delete/${id}`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
