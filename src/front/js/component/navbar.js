import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-secondary">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <div className="navbar-brand text-white mb-0 h1 fw-bolder fst-italic">
            Dota 2 personal guide
          </div>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Heroes
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Champ1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Champ2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Champ3
                  </a>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
