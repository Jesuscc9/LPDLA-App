import styled from "styled-components";

export const EloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #22222e;
  border-radius: 24px;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 350px;

  @media (max-width: 1038px) {
    margin-top: 50px !important;
  }

  .elo-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
      color: #888894;
      font-weight: 500;
      font-size: 18px;
    }

    select {
      background-color: #282838;
      padding: 8px 12px;
      box-shadow: 2px 2px 20px -1px rgba(15, 15, 15, 0.4);
      border-radius: 6px;
      color: white;
      font-family: "inter", sans-serif;
      border: 0px;
    }
  }

  .elo-data {
    display: flex;
    width: 100%;

    .elo-stats {
      margin-top: 1.6rem;
      font-family: Inter;

      .rank {
        font-size: 24px;
        font-weight: 600;
      }

      .tier {
        text-transform: capitalize;
      }

      .league-points-container {
        margin: 0.4rem 0rem;
      }

      .league-points,
      .winrate {
        font-size: 14px;
        font-weight: 600;
        margin-right: 0.5rem;
      }
      
      .games {
        font-size: 14px;
        font-weight: 500;
        color: #888894;
      }
    }

    .elo-img {
      width: 130px;
      margin-right: 20px;
    }
  }

  .elo-error{

    h2{
      font-family: Inter;
      font-size: 16px;
      text-align: center;
      font-weight: 500;
      color: #bf5353;
      margin-top: 1.6rem;
    }
  }
`;
