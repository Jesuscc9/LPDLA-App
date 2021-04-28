import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;

  margin-bottom: 20px;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #dddddd;

  .nav-content {
    width: 97%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
  min-width: 230px;
  height: 50px;

  z-index: 100;

  img {
    width: 27px;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
    font-family: "Cocogoose Pro Regular Trial";
    margin: auto;
    opacity: 0.9;
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
  width: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: flex-start;

  .tabs {
    font-weight: 500;
    display: flex;
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tab {
    height: 20px;
    cursor: pointer;
    opacity: ${(props) => (props.focused ? 1 : 0.6)};
    transition: all 0.2s;
    padding: 0px;
    background-color: transparent;
    border: none;
    color: white;
    outline: none !important;
    font-size: 16px;
    font-family: "Cocogoose Pro Regular Trial";

    p {
      margin: 0px;
    }

    .line {
      width: 0px;
      border: 1px solid #e7e7e7;
      opacity: 0;
      border-radius: 5px;
      margin: auto;
      position: relative;
      bottom: 2px;
      transition: all 0.2s;
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

  min-width: 300px;

  .input {
    background-color: #141332;
    border-radius: 10px;
    border: none;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0px;
    align-items: center;
  }

  .icon {
    color: gray;
    opacity: 0.7;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    min-width: 50px;
    height: 100%;
    transition: all 0.2s;
    border-radius: 10px;

    &:hover {
      background-color: #28264d;
    }
  }

  input {
    width: 95%;
    padding-left: 10px;
    height: 100%;
    background-color: transparent;
    border: none;
    margin: auto;
    outline: none;
    color: #dadada;
    font-family: "Cocogoose Pro Regular Trial Light";
    font-size: 12px;
    font-weight: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
