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

export const getList = async (token) => {
  try {
    const data = await axios.get(`http://localhost:8080/api/service/getList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value, token) => {
  console.log(value);
  try {
    const data = await axios.post(
      `http://localhost:8080/api/service/add`,
      value,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data.content;
  } catch (e) {
    console.log(e);
  }
};
export const getServiceType = async (token) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/service/getServiceType`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const getRentType = async (token) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/service/getRentType`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
