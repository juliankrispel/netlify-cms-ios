import { createAction } from 'redux-actions';
import { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER, LOAD_CONFIG } from './constants';

export const openDrawer = createAction(OPEN_DRAWER); 

export const closeDrawer = createAction(CLOSE_DRAWER);

export const toggleDrawer = createAction(TOGGLE_DRAWER);

export const loadConfig = createAction(LOAD_CONFIG);

