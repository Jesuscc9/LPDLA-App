import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Nav,
  LogoContainer,
  TabsContainer,
  SearchContainer,
} from "./styles/Navbar.style";

const Navbar = (props) => {
  const lol_icon = require("../img/logo.png");

  const [search, setSearch] = useState("");
  const [server, setServer] = useState("la1");

  const input = React.useRef(null);

  return (
    <React.Fragment>
      <Nav>
        <div className="nav-content">
          <LogoContainer>
            <div class="logo-container">
              <img src={lol_icon} alt="" />
              <h1>LPDLA</h1>
            </div>
          </LogoContainer>
          <TabsContainer>
            <div className="tabs">
              <button className="tab">
                <p>Overflow</p>
                <div className="line"></div>
              </button>
              <button className="tab">
                <p>Live</p>
                <div className="line"></div>
              </button>
              <button className="tab">
                <p>Chart</p>
                <div className="line"></div>
              </button>
            </div>
          </TabsContainer>
          <SearchContainer>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              className="custom-container"
              type="text"
              placeholder="Summoner..."
              aria-label="Search"
              ref={input}
            />{" "}
          </SearchContainer>
        </div>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
