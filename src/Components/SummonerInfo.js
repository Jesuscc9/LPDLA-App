import React, { useEffect } from "react";
import { TimeDiff } from "../utils.js";
import { useSelector } from "react-redux";
import { SummonerInfoContainer } from "./styles/SummonerInfo.style";
import { api } from "../data/lolApi";

import { usePalette } from "react-palette";
import { motion, AnimatePresence } from "framer-motion";
import { defaultVariant } from "../utils.js";

const SummonerInfo = () => {
  const summonerData = useSelector((state) => {
    return state.data.summonerData;
  });

  const matches = useSelector((state) => {
    return state.data.matches;
  });

  const championImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${api.getRecentChamp(
    matches
  )}_0.jpg`;

  const { data, loading, error } = usePalette(summonerData.profileImg);

  const popularRoles = api.getMainRoles(matches);

  return (
    <>
      {summonerData.profileImg && matches.length && (
        <SummonerInfoContainer
          backgroundUrl={championImg}
          borderImg={data.darkMuted}
        >
          <div className="profile-img-container">
            <motion.img
              {...defaultVariant}
              initial={{ rotate: 20, scale: 0.7 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.1 }}
              src={summonerData.profileImg}
              alt=""
            />

            <div className="level-container">
              <div className="level">
                <p>{summonerData.summonerLevel}</p>
              </div>
            </div>
          </div>
          <div className="name-container">
            <h1>{summonerData.name}</h1>
            <p>
              Last game:{"  "}
              {matches[0]?.timestamp && TimeDiff(matches[0]?.timestamp)}
            </p>
          </div>
          <div className="roles-container">
            <p>Roles</p>
            <AnimatePresence>
              <motion.div
                className="roles-images"
                key="rolesImg"
                {...defaultVariant}
              >
                {matches.length && (
                  <>
                    <img src={popularRoles[0]} alt="" />
                    <img src={popularRoles[1]} alt="" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </SummonerInfoContainer>
      )}
    </>
  );
};

export default SummonerInfo;
