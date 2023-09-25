import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { List } from "./component/List";
import { Update } from "./component/Update";
import { Add } from "./component/Add";
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="**" element={""}></Route>

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
