import { updateObject } from "../../shared/utility";
import * as actionTypes from "../action/actionTypes";
import { dummyCoins, dummyPromotedCoins } from "../../dummy";

// Initial state
const initState = {
  coins: [...dummyCoins],
  allTimeBestCoins: [],
  todayBestCoins: [],
  promotedCoins: [...dummyPromotedCoins],
  error: null,
  loading: null,
  tabKey: "TodayBest",
};

// Auth Start fucntion for update state
const authStart = (state, action) => {
  // Use updateObject function to update state
  return updateObject(state, { error: null, loading: true });
};

// Auth Fail fucntion for update state
const authFail = (state, action) => {
  // Use updateObject function to update state
  return updateObject(state, { error: action.error, loading: null });
};

// Auth Success fucntion for update state
const authSuccess = (state, action) => {
  // Use updateObject function to update state
  return updateObject(state, { error: null, loading: null });
};

const getAllTimeBest = (state, action) => {
  const { coins } = state;

  const sortedCoins = coins.sort((a, b) => {
    return b.totalVotes - a.totalVotes;
  });

  // Use updateObject function to update state
  return updateObject(state, {
    allTimeBestCoins: sortedCoins,
    todayBestCoins: [],
  });
};

const getTodayBest = (state, action) => {
  const { coins } = state;

  const sortedCoins = coins.sort((a, b) => {
    return b.todayVotes - a.todayVotes;
  });

  // Use updateObject function to update state
  return updateObject(state, {
    todayBestCoins: sortedCoins,
    allTimeBestCoins: [],
  });
};

const findAndUpdate = (coins, id) => {
  return coins.map((coin) => {
    if (coin.id !== id) return coin;

    if (coin.voted) {
      coin.voted = false;
      coin.totalVotes = coin.totalVotes - 1;
      coin.todayVotes = coin.todayVotes - 1;
    } else {
      coin.voted = true;
      coin.totalVotes = coin.totalVotes + 1;
      coin.todayVotes = coin.todayVotes + 1;
    }

    return coin;
  });
};

const updateCoinVote = (state, action) => {
  const { coins, tabKey, promotedCoins } = state;
  const id = action.id;

  // Update coins array
  const updatedCoins = findAndUpdate(coins, id);

  // Update promoted coins array
  const updatedpromotedCoins = findAndUpdate(promotedCoins, id);

  let updatedState = { ...state };

  if (tabKey === "TodayBest") {
    updatedState = getTodayBest({ ...state, coins: updatedCoins }, action);
  } else {
    updatedState = getAllTimeBest({ ...state, coins: updatedCoins }, action);
  }

  return {
    ...updatedState,
    promotedCoins: updatedpromotedCoins,
  };
};

// Reducer function
const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.COIN_START:
      return authStart(state, action);

    case actionTypes.COIN_FAIL:
      return authFail(state, action);

    case actionTypes.COIN_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.COIN_GET_ALL:
      return { ...state };

    case actionTypes.COIN_GET_ALL_TIME_BEST:
      return getAllTimeBest(state, action);

    case actionTypes.COIN_TAB_KEY:
      // return updateTabKey(state, action);
      return {
        ...state,
        tabKey: action.tabKey,
      };

    // case actionTypes.COIN_GET_PROMOTED:
    //   return getPromoted(state, action);

    case actionTypes.COIN_GET_TODAY_BEST:
      return getTodayBest(state, action);

    case actionTypes.COIN_VOTE:
      return updateCoinVote(state, action);

    default:
      return state;
  }
};

export default coinReducer;
