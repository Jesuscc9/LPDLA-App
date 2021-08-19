const actions = {
  SET_LATEST_VERSION: "DATA/SET_LATEST_VERSION",
  SET_RUNES: "DATA/SET_RUNES",
  SET_SUMMONERS: "DATA/SET_SUMMONERS",
  SET_SUMMONER_DATA: "DATA/SET_SUMMONER_DATA",

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
    payload: data,
  }),
};

export default actions;
