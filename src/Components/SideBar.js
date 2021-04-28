import React, { useState } from "react";

import { SideBarContainer, Summoner } from "./styles/SideBar.style";

import Poro from "../img/Poro.png";
import Poro2 from "../img/Poro2.png";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = (props) => {
  const input = React.useRef(null);

  const summoners = props.summoners || [
    {
      name: "wideBwipoHappy",
      image: require("../img/positions/Position_Gold-Top.png"),
    },
    {
      name: "Lalo8115scout",
      image: require("../img/positions/Position_Gold-Jungle.png"),
    },
    {
      name: "PedroPapas909",
      image: require("../img/positions/Position_Gold-Mid.png"),
    },
    {
      name: "RekklesFanboy",
      image: require("../img/positions/Position_Gold-Bot.png"),
    },
    {
      name: "MikyxFanboy",
      image: require("../img/positions/Position_Gold-Support.png"),
    },
  ];

  return (
    <React.Fragment>
      <SideBarContainer>
        <div className="summoners">
          {summoners.map((summoner) => {
            return (
              <Summoner>
                <img src={summoner.image} alt="" />
                <p>{summoner.name}</p>
              </Summoner>
            );
          })}
        </div>
        <Summoner className="edit-summoners">
          <FontAwesomeIcon icon={faUserEdit} alt="" className="icon" />
          <p>Edit Summoners</p>
        </Summoner>
      </SideBarContainer>
    </React.Fragment>
  );
};

export default SideBar;
