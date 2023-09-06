import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { ListService } from "./components/model/service_furama/ListService";
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { HeaderImg } from "./components/shared/HeaderImg";
import { UpdateHouse } from "./components/model/service_furama/UpdateHouse";
import { AddVilla } from "./components/model/service_furama/AddVilla";
import { ListCustomer } from "./components/model/customer_furama/ListCustomer";
import { UpdateCustomer } from "./components/model/customer_furama/UpdateCustomer";
import { AddCustomer } from "./components/model/customer_furama/AddCustomer";
import { AddContract } from "./components/model/contract_furama/AddContract";
import { ListContract } from "./components/model/contract_furama/ListContract";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AddHouse } from "./components/model/service_furama/AddHouse";
import { AddRoom } from "./components/model/service_furama/AddRoom";
import { UpdateVilla } from "./components/model/service_furama/UpdateVilla";
import { UpdateRoom } from "./components/model/service_furama/UpdateRoom";

function App() {
  return (
    <>
      <HeaderImg />
      <div className="container">
        <BrowserRouter>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/service" element={<Outlet />}>
              <Route index element={<ListService />} />
              <Route path="update/Villa/:id" element={<UpdateVilla />} />
              <Route path="update/House/:id" element={<UpdateHouse />} />
              <Route path="update/Room/:id" element={<UpdateRoom />} />
              <Route path="add-villa" element={<AddVilla />} />
              <Route path="add-house" element={<AddHouse />} />
              <Route path="add-room" element={<AddRoom />} />
            </Route>

            <Route path="/customer" element={<Outlet />}>
              <Route index element={<ListCustomer />}></Route>
              <Route path="update/:id" element={<UpdateCustomer />} />
              <Route path="add" element={<AddCustomer />} />
            </Route>

            <Route path="/contract" element={<Outlet />}>
              <Route index element={<ListContract />}></Route>
              <Route path="add" element={<AddContract />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
