import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import EloInfo from "../Components/EloInfo";
import SummonerInfo from "../Components/SummonerInfo";
import MostUsedChamps from "../Components/MostUsedChamps";
import Matches from "../Components/Matches";

import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";
import {
  MainContainer,
  Column1,
  Column2,
  Column3,
  MainLayout,
} from "./styles/Stats.style";
import { key } from "../data/key";
import { api } from "../data/lolApi.js";
import actions from "../redux/data/actions";
import { useDispatch } from "react-redux";
import Sidebar from "../Components/Sidebar";

const Stats = () => {
  const [summoner, setSummoner] = useState("Rekkłes Fanboy");
  const [rankType, setRankType] = useState("soloq");

  const [summonerInfo, setSummonerInfo] = useState({
    profileIconImg: "",
    summonerLevel: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);

  const [eloInfo, setEloInfo] = useState([]);

  const [mostUsedChamps, setMostUsedChamps] = useState({});

  let server = "la1";

  useEffect(() => {
    const getStaticData = async () => {
      await api.getStaticData();
    };

    getStaticData();
  }, []);

  const handleSummonerChange = (name) => {
    setSummoner(name);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 400));
      dispatch(actions.setSummonerData(await api.getSummonerData(summoner)));
      dispatch(actions.setMatcheslist(await api.getMatchList()));
      setLoading(false);
    };

    fetchData();
    setLoading(false);
  }, [summoner]);

  return (
    <>
      <MainLayout>
        <Sidebar />
        <SummonerInfo />
      </MainLayout>
      {/* <Navbar
        onSubmit={(name) => {
          handleSummonerChange(name);
        }}
        onRegionChange={(region) => {
          server = region;
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <MainContainer>
        <SideBar />
      </MainContainer>

      {loading ? (
        <div className="container d-flex justify-content-center">
          <div className="position-absolute mt-5 p-0">
            <Loader
              type="Puff"
              color="#2c99ff"
              height={50}
              width={50}
              className="position-absolute"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={200}
        animationOutDuration={200}
        isVisible={!loading}
        z
      >
        <MainContainer>
          <Column1>
            <EloInfo
              queue={rankType}
              onQueueChange={(e) => {
                setRankType(e);
              }}
            />
          </Column1>
          <Column2>
<<<<<<< HEAD
            {/* <SummonerInfo data={summonerInfo} /> */}
            <Matches matches={matchList} />
=======
            <SummonerInfo data={summonerInfo} />
            <Matches />
>>>>>>> tmp
          </Column2>
          <Column3>
            <MostUsedChamps data={mostUsedChamps} />
          </Column3>
        </MainContainer>
      </Animated>

      <br /> */}
    </>
  );
};

export default Stats;
