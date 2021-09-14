import styled, { keyframes } from "styled-components";

export const MainLayout = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  .col1 {
    width: 75px;
    height: 100vh;
    box-sizing: border-box;

    @media (max-width: 678px) {
      display: none;
    }
  }

  .col2 {
    width: 100%;
    box-sizing: border-box;
    max-width: 95%;
    margin: 0px auto;

    .loader {
      margin-top: 60px;
      display: flex;
      justify-content: center;
    }

    .error-container {
      position: absolute;
      text-align: center;
      width: 100%;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
`;
