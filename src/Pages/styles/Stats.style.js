import styled, { keyframes } from "styled-components";

export const MainLayout = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  .col1 {
    width: 75px;
  }

  .col2 {
    width: 100%;
    padding: 10px 30px;

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
