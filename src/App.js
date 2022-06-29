import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invoice from "./components/Invoice";
import Navbar from "./components/Navbar";
import AddInvoice from "./components/AddInvoice";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Invoice />}/>
            <Route exact path='/add' element={<AddInvoice/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
