import { key } from "../data/key";

export const api = {
  API_KEY: key,
  server: "la1",
  runes: {},
  champions: [],
  version: "",
  summoners: [],
  queues: [],
  summonerData: {
    accountId: "",
    id: "",
  },

  getStaticData: async () => {
    api.version = (
      await (
        await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      ).json()
    )[0];

    api.runes = await (
      await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${api.version}/data/en_US/runesReforged.json`
      )
    ).json();

    api.summoners = await (
      await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${api.version}/data/en_US/summoner.json`
      )
    ).json();

    api.champions = await (
      await (
        await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${api.version}/data/en_US/champion.json`
        )
      ).json()
    ).data;

    api.queues = await (
      await fetch(`http://static.developer.riotgames.com/docs/lol/queues.json`)
    ).json();
  },
  getSummonerName: (summonerId = api.summonerId) => {
    return Object.keys(api.summoners.data).find((e) => {
      return parseInt(api.summoners.data[e].key) == parseInt(summonerId);
    });
  },
  getRuneName: (runeId, primary) => {
    if (primary) {
      for (let i = 0; i < api.runes.length; i++) {
        const runes = api.runes[i].slots[0].runes;
        for (let j = 0; j < runes.length; j++) {
          if (runes[j].id == runeId) {
            return runes[j].icon;
          }
        }
      }
    }

    return api.runes.find((e) => {
      return e.id == runeId;
    });
  },
  getChampionName: (id) => {
    if (id == undefined) return;
    const keys = Object.keys(api.champions);
    for (let i = 0; i < keys.length; i++) {
      if (id == parseInt(api.champions[keys[i]].key)) {
        return api.champions[keys[i]].id;
      }
    }
  },
  getRoleImg: (role) => {
    if (role == "adc") role = "bottom";
    if (role == "support") role = "utility";
    if (role == "mid") role = "middle";

    return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${role}-blue.png`;
  },
  getElo: async (summonerId) => {
    const elo = await (
      await fetch(
        `https://${api.server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}$?api_key=${api.API_KEY}`
      )
    ).json();

    if (elo[0].queueType == "RANKED_SOLO_5x5") {
      return elo;
    } else {
      return [{ ...elo[1] }, { ...elo[0] }];
    }
  },
  getMostUsedChamps: async (summonerId) => {
    let mostMasteryChamps = await (
      await fetch(
        `https://${api.server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}$?api_key=${api.API_KEY}`
      )
    ).json();

    if (mostMasteryChamps.length >= 19)
      mostMasteryChamps = mostMasteryChamps.slice(0, 20);

    mostMasteryChamps.forEach((el) => {
      el.masteryImg =
        el.championLevel >= 5
          ? `https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_${el.championLevel}.png`
          : "https://raw.communitydragon.org/pbe/game/assets/ux/mastery/mastery_icon_default.png";
      el.championName = api.getChampionName(el.championId);
      el.championImg = `http://ddragon.leagueoflegends.com/cdn/${api.version}/img/champion/${el.championName}.png`;
    });

    return mostMasteryChamps;
  },
  getGameType: (queueId) => {
    if (queueId == 0) {
      return "Custom 😛";
    } else if (queueId == 400) {
      return "Normal 5v5 🍗";
    } else if (queueId == 420) {
      return "Ranked Solo 😳";
    } else if (queueId == 440) {
      return "Ranked Flex 🥵";
    } else if (queueId == 450) {
      return "ARAM 😎🤙";
    }

    let type = api.queues.find((e) => {
      return e.queueId == queueId;
    }).description;

    type = type.replace("games", "");

    return type;
  },
  getMatchList: async () => {
    let matches = (
      await (
        await fetch(
          `https://${api.server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${api.summonerData.accountId}$?api_key=${api.API_KEY}`
        )
      ).json()
    ).matches;

    // if (matches.length >= 10) matches = matches.slice(0, 10);

    // for (let i = 0; i < matches.length; i++) {
    //   matches[i].gameDetails = await (
    //     await fetch(
    //       `https://${api.server}.api.riotgames.com/lol/match/v4/matches/${matches[i].gameId}?api_key=${api.API_KEY}`
    //     )
    //   ).json();

    //   matches[i].summonerId = api.summonerData.id;
    //   matches[i].championName = api.getChampionName(matches[i].champion);

    //   const participantId = matches[i].gameDetails.participantIdentities.find(
    //     (e) => {
    //       return e.player.summonerId == api.summonerData.id;
    //     }
    //   );

    //   const gameData = matches[i].gameDetails.participants.find((e) => {
    //     return e.participantId == participantId.participantId;
    //   });

    //   matches[i].championName = matches[i].championName;
    //   matches[i].stats = gameData;
    //   matches[
    //     i
    //   ].primaryRune = `http://ddragon.leagueoflegends.com/cdn/img/${api.getRuneName(
    //     matches[i].stats.stats.perk0,
    //     true
    //   )}`;

    //   matches[i].gameType = api.getGameType(matches[i].gameDetails.queueId);

    //   matches[i].secondaryRune = `http://ddragon.leagueoflegends.com/cdn/img/${
    //     api.getRuneName(matches[i].stats.stats.perkSubStyle).icon
    //   }`;
    //   matches[i].spell1Name = `http://ddragon.leagueoflegends.com/cdn/${
    //     api.version
    //   }/img/spell/${api.getSummonerName(gameData.spell1Id)}.png`;
    //   matches[i].spell2Name = `http://ddragon.leagueoflegends.com/cdn/${
    //     api.version
    //   }/img/spell/${api.getSummonerName(gameData.spell2Id)}.png`;
    //   matches[
    //     i
    //   ].championImg = `http://ddragon.leagueoflegends.com/cdn/${api.version}/img/champion/${matches[i].championName}.png`;
    // }

    return matches;
  },
  getSummonerData: async (summoner) => {
    const summonerData = await (
      await fetch(
        `https://${api.server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${api.API_KEY}`
      )
    ).json();

    api.summonerData.accountId = summonerData.accountId;
    api.summonerData.id = summonerData.id;

    return {
      ...summonerData,
      profileImg: `http://ddragon.leagueoflegends.com/cdn/${api.version}/img/profileicon/${summonerData.profileIconId}.png`,
      // mostUsedChamps: await api.getMostUsedChamps(summonerData.id),
      // matchList: await api.getMatchList(
      //   summonerData.accountId,
      //   summonerData.id
      // ),
      // eloInfo: await api.getElo(summonerData.id),
    };
  },
};
