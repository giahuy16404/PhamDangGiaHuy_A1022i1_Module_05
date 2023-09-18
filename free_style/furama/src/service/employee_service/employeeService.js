import axios from "axios";

export const getList = async () => {
    try {
      const data = await axios.get(`http://localhost:8080/api/employee/getList`);
      return data.data;
    } catch (e) {
      console.log(e);
    }
  };