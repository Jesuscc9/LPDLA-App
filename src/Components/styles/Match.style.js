import styled, { keyframes } from "styled-components";

const ImgAnimation = keyframes`
    0% {
      filter: brightness(1.4);
      filter: saturate(1.4);
      -webkit-filter: brightness(1.4);
      -webkit-filter: saturate(1.4);
    }
    50% {
      filter: brightness(0.5);
      filter: saturate(0.5);
      -webkit-filter: brightness(0.5);
      -webkit-filter: saturate(0.5);
    }
    100% {
      filter: brightness(1);
      filter: contrast(1);
      -webkit-filter: brightness(1.4);
      -webkit-filter: saturate(1.4);
    }
  
  `;

export const MatchContainer = styled.div`
  min-width: 530px;
  max-width: 530px;
  height: 100px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  transition: all 0.3s;
  cursor: pointer;
  margin: 10px 0px 0px 0px;
  padding: 15px;

  &:hover {
    transform: translateX(-0.2em);
    filter: saturate(100%);
    box-shadow: rgba(0, 0, 0, 0.048) 0px 4px 12px;

    img {
      /* transform: scale(1.1); */
      filter: saturate(2);
      opacity: 1;
    }

    .emoji {
      opacity: 1;
    }
  }
`;

export const Line = styled.div`
  width: 5px;
  height: 100%;
  background-color: ${(props) => (props.status ? "#4286f5" : "#FF3838")};
  border-radius: 50px;
`;

export const MatchDetails = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailsData = styled.div`
  width: 90px;
  height: 100%;
  font-size: 12px;
  text-align: center;
`;

export const ChampContainer = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: inline-block;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const ChampionImg = styled.img`
  vertical-align: middle !important;
  width: 65px;
  height: 65px;
  position: relative;
  bottom: 2px;
  right: 2px;
  animation-name: ${ImgAnimation};
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
`;

export const RankedType = styled.p`
  font-family: "Roboto", sans-serif !important;
  font-size: 12px;
  font-weight: 700 !important;
  margin: 0px;
`;

export const timeAgo = styled.p``;

export const Emoji = styled.img`
  position: relative;
  width: ${(props) =>
    props.emoji == "peepoDance"
      ? "30px"
      : props.emoji == "peepoClap"
      ? "23px"
      : props.emoji == "ezyClap"
      ? "40px"
      : props.emoji == "peepoSad"
      ? "27px"
      : props.emoji == "sadge"
      ? "23px"
      : props.emoji == "sadgeRain"
      ? "25px"
      : "20px"};
  bottom: ${(props) =>
    props.emoji == "peepoDance"
      ? "47px"
      : props.emoji == "peepoClap"
      ? "43px"
      : props.emoji == "ezyClap"
      ? "42px"
      : props.emoji == "peepoSad"
      ? "43px"
      : props.emoji == "sadge"
      ? "43px"
      : props.emoji == "sadgeRain"
      ? "45px"
      : "47px"};
  flex-basis: 100%;
  opacity: 0;
  transition: all 0.5s;
`;