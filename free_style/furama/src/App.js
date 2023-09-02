import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { ListService } from "./components/model/service_furama/ListService";
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { HeaderImg } from "./components/shared/HeaderImg";
import { UpdateService } from "./components/model/service_furama/Update";
import { AddService } from "./components/model/service_furama/AddService";
import { ListCustomer } from "./components/model/customer/ListCustomer";
import { UpdateCustomer } from "./components/model/customer/UpdateCustomer";

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

            <Route path="/customer" element={<Outlet />}>
              <Route index element={<ListCustomer />}></Route>
              <Route path="update/:id" element={<UpdateCustomer />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
