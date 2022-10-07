import { SetSelectedIndexAC } from 'store/actions/sidebar/types';

export const setSelectedIndex: SetSelectedIndexAC = (selectedIndex) => {
  return { type: 'SET_SELECTED_INDEX', selectedIndex };
};
