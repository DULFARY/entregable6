import { Link } from "react-router-dom";
import "./styles/PrincipalHeader.css";

export const PrincipalHeader = () => {
  return (
    <header className="principal">
      <h1 className="titulo_header">
        <Link className=" hotels_app" to="/">Hotels-App</Link>
      </h1>
      <nav className="header_nav">
        <ul className="header_list">
          <li className=" header_item">

            <Link className="header_reservation" to="/reservations">
              Reservations
            </Link>
          </li>
          <li className="header_register">
            <Link className="principal_register" to="/register">
              register
            </Link>
          </li>
          <li className="principal_login">
             < Link className="header_login" to="/login">Login</Link> 

          </li>
        </ul>
      </nav>
    </header>
  );
};
