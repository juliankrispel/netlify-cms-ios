import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER, LOAD_CONFIG } from './constants';
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const app = handleActions({
  [OPEN_DRAWER]: (state) => state.set('isOpenDrawer', true),
  [OPEN_DRAWER]: (state) => state.set('isOpenDrawer', false),
  [TOGGLE_DRAWER]: (state) => state.set('isOpenDrawer', !state.get('isOpenDrawer')),
}, fromJS({
  isOpenDrawer: false,
}));

export default { app };
