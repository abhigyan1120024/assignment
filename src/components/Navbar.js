import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Navbar = () => {
  const [addInvoice, setAddInvoice] = useState(true);
  const [home, setHome] = useState(false);
  const navigate = useNavigate();
  const navigateToAdd = () => {
    navigate("/add");
    setAddInvoice(false);
    setHome(true);
  };
  const navigateToHome = () => {
    navigate("/");
    setAddInvoice(true);
    setHome(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={navigateToHome}>
          TaxAdda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={navigateToHome}>
                Home
              </Link>
                
            </li>
          </ul>
          {addInvoice && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={navigateToAdd}
            >
              Add Invoice
            </button>
          )}
          {home && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={navigateToHome}
              style={{ cursor: "pointer" }}
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
