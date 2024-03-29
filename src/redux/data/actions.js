const actions = {
  SET_LATEST_VERSION: "DATA/SET_LATEST_VERSION",
  SET_RUNES: "DATA/SET_RUNES",
  SET_SUMMONERS: "DATA/SET_SUMMONERS",
  SET_SUMMONER_DATA: "DATA/SET_SUMMONER_DATA",
  SET_MATCHESLIST: "DATA/SET_MATCHESLIST",
  SET_ELO: "DATA/SET_ELO",

  setRunes: (runes) => ({
    type: actions.SET_RUNES,
    payload: runes,
  }),
  setLatestVersion: (version) => ({
    type: actions.SET_LATEST_VERSION,
    payload: version,
  }),
  setSummoners: (summoners) => ({
    type: actions.SET_SUMMONERS,
    payload: summoners,
  }),
  setSummonerData: (data) => ({
    type: actions.SET_SUMMONER_DATA,
    payload: { ...data },
  }),
  setMatcheslist: (data) => ({
    type: actions.SET_MATCHESLIST,
    payload: [...data],
  }),
  setElo: (queues) => ({
    type: actions.SET_ELO,
    payload: [...queues],
  }),
};

export default actions;
