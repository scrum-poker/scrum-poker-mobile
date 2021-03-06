import initialState from './initial-state';
import types from '../actions/action-types';

export default (state = initialState.players, action) => {
  switch (action.type) {
    case types.PLAYERS:
      return action.players;
    default:
      return state;
  }
};
