import axios from "axios";

export const getCourse = async (page) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/course?_page=${page}&_limit=3`
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value) => {
  try {
    const data = await axios.post(`http://localhost:8080/course`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLession = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/lession`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const findById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:8080/course/${id}`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
