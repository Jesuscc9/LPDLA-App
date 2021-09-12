import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav, TabsContainer, SearchForm } from "./styles/Navbar.style";

const Navbar = ({ searchSummoner, updateServer }) => {
  const [search, setSearch] = useState("");
  const [server, setServer] = useState("la1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.length) return;
    searchSummoner(search);
  };

  return (
    <React.Fragment>
      <Nav>
        <TabsContainer>
          <button className="tab">
            <p>Overview</p>
            <div className="line"></div>
          </button>
          <button className="tab">
            <p>Live</p>
            <div className="line"></div>
          </button>
        </TabsContainer>
        <SearchForm onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="custom-container"
            type="text"
            placeholder="Summoner..."
          />
          <select
            onChange={(e) => {
              updateServer(e.target.value);
            }}
          >
            <option value="la1">LAN</option>
            <option value="la2">LAS</option>
            <option value="euw1">EUW</option>
            <option value="na1">NA</option>
            <option value="kr">KR</option>
          </select>
        </SearchForm>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
