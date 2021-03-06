import * as actions from './actions';

export const pauseGame = () => {
  return {
    type: actions.PAUSE_GAME
  };
};

export const resumeGame = () => {
  return {
    type: actions.RESUME_GAME
  };
};

export const clearGame = () => {
  return {
    type: actions.CLEAR_GAME
  };
};

export const setIntervalId = (intervalId) => {
  return {
    type: actions.SET_INTERVAL_ID,
    intervalId
  }
};

export const changeSpeedSlow = () => {
  return {
    type: actions.SPEED_SLOW
  };
};

export const changeSpeedNormal = () => {
  return {
    type: actions.SPEED_NORMAL
  };
}

export const changeSpeedFast = () => {
  return {
    type: actions.SPEED_FAST
  };
}
