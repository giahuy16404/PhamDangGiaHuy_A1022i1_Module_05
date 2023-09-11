import { useDispatch, useSelector } from "react-redux";
import { getAllUser, removeUser } from "../redux/action/UserAction";

export const List = () => {
  const users = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleGetAllUser = () => {
    dispatch(getAllUser());
  };
  const handleRemove = (id) => {
    alert("Remove");
    dispatch(removeUser(id));
  };
  console.log(users);
  return (
    <>
      <h3>User List</h3>
      <button onClick={handleGetAllUser}>Get List</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value, index) => (
            <tr key={value.id}>
              <th scope="row">{index + 1}</th>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>
                <a href={value.website}>Facebook link</a>
              </td>
              <td>
                <button onClick={() => handleRemove(value.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
