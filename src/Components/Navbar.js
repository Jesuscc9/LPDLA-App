import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar(props) {

  const [search, setSearch] = useState('')

  const input = React.useRef(null)

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        <a className="navbar-brand" href="/">
          LPDLA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stats" className="nav-link">
                Stats
              </Link>
            </li>
          </ul>
          <form className="form-inline" onSubmit={(e) => {
            e.preventDefault()
            props.onSubmit(search)
            console.log(input)
            setSearch('')
          }}>
            <div className="md-form my-0">
              <input
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
                value={search}
                className="form-control mr-sm-2"
                type="text"
                placeholder="Invocador"
                aria-label="Search"
                ref={input}
              />
            </div>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
