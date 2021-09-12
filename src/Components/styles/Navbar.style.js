import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabsContainer = styled.div`
  width: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: flex;

  .tab {
    cursor: pointer;
    opacity: ${(props) => (props.focused ? 1 : 0.6)};
    transition: all 0.2s;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    margin: 0px 20px;

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

export const SearchForm = styled.form`
  input {
    background-color: #22222e;
    border: none;
    margin: auto;
    outline: none;
    color: #dadada;
    font-size: 14px;
    padding: 10px 16px;
    font-weight: 400;
    border-radius: 0.5rem;
  }
`;
