import axios from "axios";

export const add = async (value, token) => {
  try {
    const data = await axios.post(
      `http://localhost:8080/api/contract/add`,
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
export const getPage = async (page, token) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/contract/getPage?page=${page}&size=8`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return [data.data.content, data.data.totalPages];
  } catch (e) {
    console.log(e);
  }
};
