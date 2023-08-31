import { ToastContainer } from "react-toastify";
import "./App.css";
import { Edit } from "./component/Edit";
import { List } from "./component/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/list"  element={<List />}></Route>
          <Route path="/update/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
