import axios from "axios";

export const getList = async () => {
  try {
    const result = await axios.get("http://localhost:8080/user");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    const result = await axios.delete(`http://localhost:8080/user/${id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
