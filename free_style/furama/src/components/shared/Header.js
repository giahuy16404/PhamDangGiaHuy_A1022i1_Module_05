import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/service"}
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Employee
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/customer"}
                >
                  Customer
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contract
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Booking
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </>
  );
};
