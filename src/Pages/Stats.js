import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import EloInfo from "../Components/EloInfo";
import SummonerInfo from "../Components/SummonerInfo";
import MostUsedChamps from "../Components/MostUsedChamps";
import Matches from "../Components/Matches";

import Loader from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";

import { MainLayout } from "./styles/Stats.style";
import { api } from "../data/lolApi.js";
import actions from "../redux/data/actions";
import { useDispatch } from "react-redux";
import Sidebar from "../Components/Sidebar";

import { defaultVariant } from "../utils.js";

const Stats = () => {
  const [summoner, setSummoner] = useState("Rekkłes Fanboy");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      try {
        dispatch(actions.setSummonerData(await api.getSummonerData(summoner)));
        dispatch(actions.setMatcheslist(await api.getMatchList()));
        setError(false);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [summoner]);

  return (
    <>
      <MainLayout>
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <Navbar
            searchSummoner={(summoner) => {
              setSummoner(summoner);
            }}
            updateServer={(server) => {
              api.server = server;
            }}
          />
          <AnimatePresence>
            {loading ? (
              <div className="loader">
                <Loader
                  type="TailSpin"
                  color="#117f90"
                  height={60}
                  width={60}
                />
              </div>
            ) : (
              <>
                {!error ? (
                  <motion.div key="summonerData" {...defaultVariant}>
                    <SummonerInfo />
                  </motion.div>
                ) : (
                  <motion.div
                    key="error"
                    className="error-container"
                    {...defaultVariant}
                  >
                    <h1>Error trying to fetch that summoner :(</h1>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
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
            <SummonerInfo data={summonerInfo} />
            <Matches />
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
