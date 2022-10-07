export type InitState = {
  selectedIndex: number;
};

export interface ISetSelectedIndex {
  type: 'SET_SELECTED_INDEX';
  selectedIndex: number;
}
