import React, { useState } from "react";
import peepoDance from "../img/emojis/peepoDance.gif";
import peepoClap from "../img/emojis/peepoClap.gif";
import ezyClap from "../img/emojis/ezyClap.gif";
import peepoSad from "../img/emojis/peepoSad.gif";
import sadge from "../img/emojis/sadge.gif";
import sadgeRain from "../img/emojis/sadgeRain.gif";
import { Animated } from "react-animated-css";
import { ColorExtractor } from "react-color-extractor";
import { TimeDiff, Duration } from "../utils.js";

import {
  MatchContainer,
  Line,
  ChampContainer,
  ChampionImg,
  ImageWrapper,
  MatchDetails,
  DetailsData,
  RankedType,
  Emoji,
  MatchResult,
  SummonersContainer,
  Summoner,
  TimeAgo,
  RunesContainer,
  Rune,
  KdaContainer,
  ItemsContainer,
} from "../Components/styles/Match.style";

const Match = ({ data, emojiIndex }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [primaryRuneColor, setPrimaryRuneColor] = useState("");
  const [secondRuneColor, setSecondRuneColor] = useState("");

  const items = [
    data.stats.stats.item0,
    data.stats.stats.item1,
    data.stats.stats.item2,
    data.stats.stats.item3,
    data.stats.stats.item4,
    data.stats.stats.item5,
  ];

  const gameStatus = data.stats.stats.win;

  const GetEmoji = ({ value }) => {
    const i = emojiIndex;

    if (value) {
      if (emojiIndex <= 4) {
        return <Emoji src={peepoDance} emoji="peepoDance" className="emoji" />;
      } else if (i <= 7) {
        return <Emoji src={ezyClap} emoji="ezyClap" className="emoji" />;
      } else {
        return <Emoji src={peepoClap} emoji="peepoClap" className="emoji" />;
      }
    } else {
      if (emojiIndex <= 4) {
        return <Emoji src={peepoSad} emoji="peepoSad" className="emoji" />;
      } else if (i <= 7) {
        return <Emoji src={sadge} emoji="sadge" className="emoji" />;
      } else {
        return <Emoji src={sadgeRain} emoji="sadgeRain" className="emoji" />;
      }
    }
  };

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)}, 0.10)`
      : null;
  }

  return (
    <React.Fragment>
      <MatchContainer
        onMouseEnter={() => {
          setShowEmoji(true);
        }}
        onMouseLeave={() => {
          setShowEmoji(false);
        }}
        win={data.stats.stats.win}
      >
        <MatchDetails>
          <Line status={gameStatus}></Line>
          <DetailsData>
            <RankedType className="m-0">{data.gameType}</RankedType>
            <TimeAgo style={{ marginBottom: 3 }}>
              {TimeDiff(data.timestamp)}
            </TimeAgo>

            <Animated
              animationIn={gameStatus ? "fadeInRight" : "fadeIn"}
              animationInDelay={gameStatus ? 200 : 0}
              animationOut={gameStatus ? "fadeOutRight" : "fadeOut"}
              isVisible={!showEmoji}
              animationInDuration={gameStatus ? 100 : 500}
              animationOutDuration={100}
              animateOnMount={false}
            >
              <MatchResult status={gameStatus} className="match-status">
                {gameStatus ? "VICTORIA" : "DERROTA"}
              </MatchResult>
            </Animated>
            <p className="m-0 game-duration">
              {Duration(data.gameDetails.gameDuration)}
            </p>
            <Animated
              animationIn={gameStatus ? "bounceIn" : "fadeIn"}
              animationOut={gameStatus ? "bounceOut" : "fadeOut"}
              isVisible={showEmoji}
              animationInDuration={gameStatus ? 700 : 500}
              animationOutDuration={gameStatus ? 400 : 500}
              animateOnMount={false}
            >
              <GetEmoji value={gameStatus} />
            </Animated>
          </DetailsData>
        </MatchDetails>
        <ChampContainer>
          <ImageWrapper>
            <ChampionImg src={data.championImg}></ChampionImg>
          </ImageWrapper>
          <SummonersContainer>
            <Summoner src={data.spell1Name}></Summoner>
            <Summoner src={data.spell2Name} style={{ marginTop: 2 }}></Summoner>
          </SummonersContainer>
          <RunesContainer>
            <ColorExtractor
              getColors={(colors) => {
                setPrimaryRuneColor(hexToRgb(colors[0]));
              }}
            >
              <img style={{ display: "none" }} src={data.primaryRune} />
            </ColorExtractor>
            <Rune color={primaryRuneColor}>
              <img
                src={data.primaryRune}
                alt=""
                style={{ width: 25, height: 25 }}
              />
            </Rune>

            <ColorExtractor
              getColors={(colors) => {
                setSecondRuneColor(hexToRgb(colors[0]));
              }}
            >
              <img style={{ display: "none" }} src={data.secondaryRune} />
            </ColorExtractor>
            <Rune color={secondRuneColor}>
              <img
                src={data.secondaryRune}
                alt=""
                style={{ width: 20, height: 20 }}
              />
            </Rune>
          </RunesContainer>
        </ChampContainer>
        <KdaContainer>
          <div className="kda-container">
            <p className="kills">{data.stats.stats.kills}</p>
            <p className="kda-divisor">/</p>
            <p className="deaths">{data.stats.stats.deaths}</p>
            <p className="kda-divisor">/</p>
            <p className="assists">{data.stats.stats.assists}</p>
          </div>
          <p>{data.kda} KDA</p>
        </KdaContainer>
        <ItemsContainer>
          <div className="items">
            {items.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {item ? (
                    <img
                      className="item"
                      src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${item}.png`}
                    />
                  ) : (
                    <div className="item"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="wards">
            <img
              className="item"
              src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${data.stats.stats.item6}.png`}
            ></img>
          </div>
        </ItemsContainer>
      </MatchContainer>
    </React.Fragment>
  );
};

export default Match;
