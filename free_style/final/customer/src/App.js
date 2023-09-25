import { ToastContainer } from "react-toastify";
import "./App.css";
import { Add } from "./component/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import { List } from "./component/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Update } from "./component/Update";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/" element={<List />}></Route>
        </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
