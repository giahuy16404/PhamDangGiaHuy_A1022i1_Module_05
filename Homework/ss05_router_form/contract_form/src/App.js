import { FormContract } from "./components/FormContract";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MedicalDeclaration } from "./components/MedicalDeclaration";

function App() {
  return (
    <div className="App">
      <MedicalDeclaration />
      <ToastContainer />
    </div>
  );
}

export default App;
