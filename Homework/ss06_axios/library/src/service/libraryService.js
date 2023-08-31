import axios from "axios";
export const getList = async () => {
  try {
    const data = await axios.get("http://localhost:8080/library");
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (value) => {
  try {
    const data = await axios.post("http://localhost:8080/library", value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const findById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:8080/library/${id}`);
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (id, value) => {
  try {
    const data = await axios.put(`http://localhost:8080/library/${id}`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteById = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:8080/library/${id}`);
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
