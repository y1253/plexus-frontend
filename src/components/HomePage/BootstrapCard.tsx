import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HouseObject } from "../../hooks/useHouse";
import { Link } from "react-router-dom";
interface Props {
  house: HouseObject;
}
function BootstrapCard() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar navbar-default navbar-fixed-top ">
      <div className="container-fluid">
        Plexus Brokerage
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="nav-link active" to="/contact">
              Contact
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default BootstrapCard;
