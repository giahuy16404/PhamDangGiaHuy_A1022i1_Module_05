import { FormContract } from "./components/FormContract";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <FormContract />
      <ToastContainer />
    </div>
  );
}

export default App;
