import axios from "axios";

export const getCategory = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/category`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const add = async (value) => {
  try {
    const data = await axios.post(`http://localhost:8080/book`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getList = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/book`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const searchByName = async (name) => {
  try {
    const data = await axios.get(`http://localhost:8080/book`);
    const searchFilter = data.data.filter((value) => value.name.includes(name));
    return searchFilter;
  } catch (e) {
    console.log(e);
  }
};
export const searchByCategory = async (category) => {
  try {
    const data = await axios.get(`http://localhost:8080/book`);
    const searchFilter = data.data.filter((value) =>
      value.category.name.includes(category)
    );
    return searchFilter;
  } catch (e) {
    console.log(e);
  }
};

