import styled, { keyframes } from "styled-components";

export const SummonerInfoContainer = styled.div`
  background-color: #22222e;
  width: 650px;
  padding: 20px;
  max-width: 95%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  border-radius: 24px;
  margin: 50px auto;

  background-position: 0px 0%;
  background-image: ${(props) =>
    `linear-gradient(90deg, #22222e 7.05%, rgba(34, 34, 46, 0.9) 100%), url("${props.backgroundUrl}");`};
  background-size: cover;
  background-position: center 20%;

  .profile-img-container {
    width: 106px;
    height: 106px;
    outline: none;
    box-sizing: border-box;
    transition: border 1s;
    border-radius: 50%;
    border: 3px solid
      ${(props) =>
        props.borderImg ? props.borderImg : "rgba(255, 255, 255, 0)"};
    display: grid;
    place-items: center;

    img {
      width: 94px;
      height: 94px;
      border-radius: 50%;
      transition: transform 0.4s;
      position: relative;
      top: 1px;

      &:hover {
        cursor: pointer;
        transform: scale(1.1) !important;
      }
    }

    .level-container {
      position: relative;

      .level {
        position: absolute;
        background-color: #4f4f64;
        padding: 1px 12px;
        transform: translate(-50%, -10px);
        font-size: 13px;
        font-weight: 500;
        border-radius: 3px;
      }
    }
  }

  .name-container {
    margin: 0px 0px;

    h1 {
      margin-top: 20px;
      letter-spacing: 0.2px;
    }

    p {
      letter-spacing: 0.2px;
      margin-top: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 14px;
      color: #888894;
    }
  }

  .roles-container {
    p {
      font-family: "Inter", sans-serif;
      font-weight: bold;
      font-size: 18px;
      margin-top: 20px;
      text-align: center;
      padding: 0px 12px;
    }

    .roles-images {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      img {
        width: 38px;
        margin: 0px 12px;
      }
    }
  }
`;
