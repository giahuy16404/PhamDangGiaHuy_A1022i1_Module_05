import axios from "axios";

export const getList = async (token) => {
  try {
    const data = await axios.get(`http://localhost:8080/api/employee/getList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
