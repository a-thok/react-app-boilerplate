import { createReducer, makeActionCreator } from '../../utils';

const START = 'REQUESTS/START';
const SUCCESS = 'REQUESTS/SUCCESS';
const FAIL = 'REQUESTS/FAIL';

export default createReducer(0, {
  [START]: state => state + 1,

  [SUCCESS]: state => state - 1,

  [FAIL]: state => state - 1,
});

export const startRequest = makeActionCreator(START);

export const successRequest = makeActionCreator(SUCCESS);

export const failRequest = makeActionCreator(FAIL);
