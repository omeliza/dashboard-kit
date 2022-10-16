import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  FirstNamePayload,
  LastNamePayload,
  IssuePayload,
  PriorityPayload,
  EmailPayload,
  AddressPayload,
} from 'redux/slices/wizard/types';
import { initialState } from 'redux/slices/wizard/initialState';

export const wizardSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<FirstNamePayload>) => {
      const { index } = action.payload;
      state.step1[index].firstName = action.payload.firstName;
    },
    setLastName: (state, action: PayloadAction<LastNamePayload>) => {
      const { index } = action.payload;
      state.step1[index].lastName = action.payload.lastName;
    },
    setIssueDetail: (state, action: PayloadAction<IssuePayload>) => {
      const { index } = action.payload;
      state.step2[index].issueDetail = action.payload.issueDetail;
    },
    setPriority: (state, action: PayloadAction<PriorityPayload>) => {
      const { index } = action.payload;
      state.step2[index].priority = action.payload.priority;
    },
    setEmail: (state, action: PayloadAction<EmailPayload>) => {
      const { index } = action.payload;
      state.step3[index].email = action.payload.email;
    },
    setAddress: (state, action: PayloadAction<AddressPayload>) => {
      const { index } = action.payload;
      state.step3[index].address = action.payload.address;
    },
    setList: (state) => {
      const obj = {
        id: state.list.length + 1,
        issueDetail: state.step2.map((item) => item.issueDetail),
        priority: state.step2.map((item) => item.priority),
        name: state.step1.map((item) => `${item.firstName} ${item.lastName}`),
        address: state.step3.map((item) => item.address),
        email: state.step3.map((item) => item.email),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.list.length <= 1 && state.list[0].id === null
        ? (state.list = [obj])
        : state.list.push(obj);
    },
    clearSteps: (state) => {
      state.step1 = [{ firstName: '', lastName: '' }];
      state.step2 = [{ issueDetail: '', priority: '' }];
      state.step3 = [{ address: '', email: '' }];
    },
  },
});

export default wizardSlice.reducer;

export const {
  setAddress,
  setEmail,
  setFirstName,
  setLastName,
  setIssueDetail,
  setPriority,
  setList,
  clearSteps,
} = wizardSlice.actions;
