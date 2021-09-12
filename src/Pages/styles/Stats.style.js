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

    .error-container {
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
`;
