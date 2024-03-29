import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 678px) {
    justify-content: flex-end;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex;

  @media (max-width: 678px) {
    display: none;
  }

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
  display: flex;
  padding: 0px 10px;

  input {
    background-color: #22222e;
    border: none;
    margin: auto;
    outline: none;
    color: #dadada;
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 400;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    margin-right: 1px;
  }

  select {
    background-color: #22222e;
    color: #dadada;
    outline: none;
    border: 0px solid;
    padding: 10px 4px;
    border-radius: 0rem 0.5rem 0.5rem 0;
    cursor: pointer;
  }
`;
