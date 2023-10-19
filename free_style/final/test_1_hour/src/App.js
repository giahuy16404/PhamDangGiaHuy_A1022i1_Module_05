import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List } from "./components/List";
import { Add } from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { More } from "./components/More";
import { Update } from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/" element={<List />}></Route>
          <Route path="/more/:id" element={<More />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
        </BrowserRouter>
        <ToastContainer />
    </>
  );
}

export default App;
