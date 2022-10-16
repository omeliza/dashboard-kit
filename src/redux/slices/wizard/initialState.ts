import { InitialStateType } from 'redux/slices/wizard/types';

export const initialState: InitialStateType = {
  step1: [{ firstName: '', lastName: '' }],
  step2: [{ issueDetail: '', priority: '' }],
  step3: [{ email: '', address: '' }],
  list: [
    {
      id: null,
      name: [],
      issueDetail: [],
      priority: [],
      email: [],
      address: [],
    },
  ],
};
