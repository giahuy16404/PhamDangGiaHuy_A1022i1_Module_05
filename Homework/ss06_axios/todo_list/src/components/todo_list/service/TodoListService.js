import axios from "axios";

export const getAll = async () => {
  try {
    const result = await axios.get("http://localhost:8080/todolist");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (value) => {
  try {
    const result = await axios.post("http://localhost:8080/todolist", value);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
