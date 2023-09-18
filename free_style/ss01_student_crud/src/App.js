import "./App.css";
import { Header } from "./components/Main";
import { ShowList } from "./components/ShowList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Create } from "./components/Create";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Update } from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/student" element={<ShowList />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
