import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { ListService } from "./components/model/service_furama/ListService";
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { HeaderImg } from "./components/shared/HeaderImg";
import { UpdateService } from "./components/model/service_furama/Update";
import { AddService } from "./components/model/service_furama/AddService";

function App() {
  return (
    <>
      <HeaderImg />
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/service" element={<Outlet />}>
              <Route index element={<ListService />} />
              <Route path="update/:id" element={<UpdateService />} />
              <Route path="add" element={<AddService />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
