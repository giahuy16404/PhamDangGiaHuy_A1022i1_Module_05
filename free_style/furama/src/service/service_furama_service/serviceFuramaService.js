import axios from "axios";

export const getList = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/service?_page=${page}&limit=8`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value) => {
  try {
    const data = await axios.post(`http://localhost:8080/service`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (id, value) => {
  try {
    const data = await axios.put(`http://localhost:8080/service/${id}`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const findById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:8080/service/${id}`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
