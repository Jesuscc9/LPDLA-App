import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 75px;
  height: 100vh;
  border-right: 2px solid #22222e;

  .logo {
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 20px;

    img {
    }
  }

  .items {
    color: #9c9c9c;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    margin-top: 2.5rem;

    > * {
      &:first-child {
        color: #fff;
      }
    }

    svg {
      flex-basis: 100%;
      margin: 20px 0px;
      cursor: pointer;
      transition: color 0.1s;

      &:hover {
        color: #fff;
      }
    }
  }
`;
