import axios from "axios";

export const getPage = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/service/getPage?page=${page}&size=8`
    );
    return [data.data.content, data.data.totalPages];
  } catch (e) {
    console.log(e);
  }
};

export const getList = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/api/service/getList`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value) => {
  console.log(value);
  try {
    const data = await axios.post(
      `http://localhost:8080/api/service/add`,
      value
    );
    return data.data.content;
  } catch (e) {
    console.log(e);
  }
};
export const getServiceType = async () => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/service/getServiceType`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const getRentType = async () => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/service/getRentType`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (value) => {
  try {
    const data = await axios.put(
      `http://localhost:8080/api/service/update`,
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
      `http://localhost:8080/api/service/findById/${id}`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const remove = async (id) => {
  try {
    const data = await axios.delete(
      `http://localhost:8080/api/service/delete/${id}`
    );
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
