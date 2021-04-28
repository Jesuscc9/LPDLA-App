import styled, { keyframes } from "styled-components";

export const SideBarContainer = styled.div`
  width: 170px;
  min-height: calc(100vh - 120px);
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  .edit-summoners {
    opacity: 0.7;
    height: 17px;
    font-size: 12px;
    width: 130px;
    align-self: flex-end;

    &:hover {
      opacity: 1;
      transform: none;
    }
  }

  .icon {
    opacity: 0.8 !important;
    font-size: 14px;
    margin-right: 20px;
    margin-left: 4px;
  }
`;

export const Summoner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
  color: white;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 11px;
  transition: all 0.2s;
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    transform: translateX(0.2em);
    background-color: #28264d;
  }

  img {
    width: 25px;
    margin-right: 20px;
  }

  p {
    opacity: 0.7;
  }
`;
