import openPanelReducer from './openPanelReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    openPanel : openPanelReducer,
});

export default allReducers;