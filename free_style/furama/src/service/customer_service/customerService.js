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
