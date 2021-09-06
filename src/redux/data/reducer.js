import actions from "./actions";

const initialState = {
  version: "",
  summonerData: {},
  runes: [],
  champions: {},
  summoners: {},
  matches: [],
  eloInfo: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.SET_VERSION:
      return { ...state, version: "" };

    case actions.SET_RUNES:
      return { ...state, runes: [...payload] };

    case actions.SET_SUMMONERS:
      return { ...state, summoners: { ...payload } };

    case actions.SET_SUMMONER_DATA:
      return { ...state, summonerData: { ...payload } };

    case actions.SET_MATCHESLIST:
      return { ...state, matches: [...payload] };

    default:
      return state;
  }
};

export default reducer;
