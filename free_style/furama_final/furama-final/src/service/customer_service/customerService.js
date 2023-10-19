import axios from "axios";

export const getPage = async (page, token) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/customer/getPage?page=${page}&size=8`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return [response.data.content, response.data.totalPages];
  } catch (error) {
    console.error("Error fetching page:", error);
  }
};

export const getList = async (token) => {
  try {
    const data = await axios.get(`http://localhost:8080/api/customer/getList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerType = async (token) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/customer/getCustomerType`,
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
export const add = async (value,token) => {
  try {
    const data = await axios.post(
      `http://localhost:8080/api/customer/add`,
      value,
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
