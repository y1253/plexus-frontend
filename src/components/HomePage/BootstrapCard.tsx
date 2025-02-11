import { Link } from "react-router-dom";

function BootstrapCard() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar navbar-default navbar-fixed-top "
      color="white"
    >
      <div
        className="container-fluid"
        style={{ height: "60px", backgroundColor: "black", color: "white" }}
      >
        Plexus Brokerage
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="nav-link active" to="/contact">
              <p>Contact</p>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default BootstrapCard;
