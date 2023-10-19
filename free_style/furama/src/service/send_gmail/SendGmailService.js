import axios from "axios";

export const SendGmail = async (value) => {
  console.log(value);
  try {
    const data = await axios.post(`http://localhost:8080/api/sendMail`, value);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
