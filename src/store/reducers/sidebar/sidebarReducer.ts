/* eslint-disable @typescript-eslint/naming-convention */
import { Reducer } from 'redux';

import { initialState } from 'store/reducers/sidebar/initState';
import { InitState, ISetSelectedIndex } from 'store/reducers/sidebar/types';

type action = ISetSelectedIndex;

const sidebarReducer: Reducer<InitState, action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_SELECTED_INDEX':
      return { ...state, selectedIndex: action.selectedIndex };
    default:
      return { ...state };
  }
};

export default sidebarReducer;
