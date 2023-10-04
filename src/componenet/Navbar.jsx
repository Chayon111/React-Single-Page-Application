import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center fixed-top">
        <ul className="navbar-nav ">
          <li className="nav-item border border-1">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li
            className="nav-item border border-1 "
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            <Link to="/service" className="nav-link">
              Service
            </Link>
          </li>
          <li className="nav-item border border-1">
            <Link to="/footer" className="nav-link">
              Footer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
