import { ToastContainer } from "react-toastify";
import "./App.css";
import { TodoList } from "./components/todo_list/TodoList";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <TodoList />
      <ToastContainer />
    </>
  );
}

export default App;
