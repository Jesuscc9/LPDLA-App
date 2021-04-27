import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  border: 1px solid white;
  margin-bottom: 20px;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #dddddd;

  .nav-content {
    width: 95%;
    margin: auto;
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
  width: 230px;
  height: 50px;
  border: 1px solid white;
  z-index: 100;

  img {
    width: 30px;
  }

  h1 {
    font-size: 22px;
    font-weight: 500;
    font-family: "Cocogoose Pro Regular Trial";
    margin: auto;
  }

  .logo-container {
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TabsContainer = styled.div`
  width: 70%;
  border: 1px solid white;

  .tabs {
    font-family: "Cocogoose Pro Regular Trial";
    font-weight: 100;
    display: flex;
    width: 380px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
  }

  .tab {
    height: 20px;
    flex-wrap: wrap;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.2s;
    padding: 0px;
    background-color: transparent;
    border: none;
    color: white;
    outline: none !important;

    p {
      margin-bottom: 0px;
    }

    .line {
      width: 0px;
      border: 1px solid #e7e7e7;
      opacity: 0;
      border-radius: 5px;
      margin: auto;
      position: relative;
      bottom: 2px;
      transition: all 0.1s;
    }

    &:hover {
      opacity: 1;

      .line {
        width: 100%;
        opacity: 1;
      }
    }

    &:focus {
      opacity: 1;
      .line {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  width: 20%;
  border: 1px solid;

  input {
    background-color: #141332;
    border-radius: 10px;
    border: none;
    height: 80%;
    width: 80%;
    margin: auto;
    outline: none;
    color: #dadada;
    font-family: "Cocogoose Pro Regular Trial Light";
    font-size: 12px;
    font-weight: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
  }
`;
