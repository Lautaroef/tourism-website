import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function FastMenu({ className }) {
  const { pathname } = useLocation();

  return (
    <ul className={className}>
      <h3>Fast Menu</h3>
      <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link to="/About" className={`${pathname === "/About" ? "active" : ""}`}>
        About us
      </Link>
      <Link
        to="/Contact"
        className={`${pathname === "/Contact" ? "active" : ""}`}
      >
        Contact
      </Link>
    </ul>
  );
}

export default FastMenu;
