import * as actionTypes from "./actionTypes";

export const coinStart = () => {
  return {
    type: actionTypes.COIN_START,
  };
};

export const coinSuccess = () => {
  return {
    type: actionTypes.COIN_SUCCESS,
  };
};

export const coinFail = (error) => {
  return {
    type: actionTypes.COIN_FAIL,
    error,
  };
};

export const getAll = () => {
  return {
    type: actionTypes.COIN_GET_ALL,
  };
};

export const getPromoted = () => {
  return {
    type: actionTypes.COIN_GET_PROMOTED,
  };
};

export const getTodayBest = () => {
  return {
    type: actionTypes.COIN_GET_TODAY_BEST,
  };
};

export const getAllTimeBest = () => {
  return {
    type: actionTypes.COIN_GET_ALL_TIME_BEST,
  };
};

export const vote = (id) => {
  return {
    type: actionTypes.COIN_VOTE,
    id,
  };
};

export const updateTabKey = (tabKey) => {
  return {
    type: actionTypes.COIN_TAB_KEY,
    tabKey,
  };
};
