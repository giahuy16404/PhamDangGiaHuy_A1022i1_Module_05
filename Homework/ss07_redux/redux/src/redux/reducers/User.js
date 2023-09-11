import { GET_ALL_USER, REMOVE_USER } from "../Type";

export const userReducer = (users = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USER:
      return payload;
    case REMOVE_USER:
      const result = users.filter((value) => value.id !== payload);
      return result;
    default:
      return users;
  }
};
