import React from "react";
import { SidebarContainer } from "./styles/Sidebar.style";
import LolIcon from "../img/lolicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faHome,
  faInfoCircle,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="logo">
        <a href="https://www.youtube.com/watch?v=zVJcgku2o5Y" target="_blank">
          <img src={LolIcon} alt="" />
        </a>
      </div>
      <div className="items">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faTv} />
        <FontAwesomeIcon icon={faChartBar} />
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
