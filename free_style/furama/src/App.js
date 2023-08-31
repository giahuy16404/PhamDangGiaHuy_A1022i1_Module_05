import "./App.css";
import { ListService } from "./components/model/service_furama/ListService";
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { HeaderImg } from "./components/shared/HeaderImg";
function App() {
  return (
    <>
      <HeaderImg />
      <div className="container">
        <Header />
        <ListService />
        <Footer />
      </div>
    </>
  );
}

export default App;
