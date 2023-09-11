import * as userService from "../../service/UserService";
import { GET_ALL_USER, REMOVE_USER } from "../Type";

export const getAllUser = () => async (dispatch) => {
  const res = await userService.getList();
  dispatch({
    type: GET_ALL_USER,
    payload: res,
  });
};

export const removeUser = (id) => async (dispatch) => {
   await userService.remove(id);
  dispatch({
    type: REMOVE_USER,
    payload: id,
  });
};
