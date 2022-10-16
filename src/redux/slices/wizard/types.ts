export type Step1FormValues = {
  firstName: string;
  lastName: string;
};
export type Step2FormValues = {
  issueDetail: string;
  priority: string;
};
export type Step3FormValues = {
  email: string;
  address: string;
};
export type ListType = {
  id: number | null;
  issueDetail: string[];
  priority: string[];
  name: string[];
  email: string[];
  address: string[];
};
export type InitialStateType = {
  step1: Step1FormValues[];
  step2: Step2FormValues[];
  step3: Step3FormValues[];
  list: ListType[];
};

export type FirstNamePayload = {
  firstName: string;
  index: number;
};
export type LastNamePayload = {
  lastName: string;
  index: number;
};
export type IssuePayload = {
  issueDetail: string;
  index: number;
};
export type PriorityPayload = {
  priority: string;
  index: number;
};
export type EmailPayload = {
  email: string;
  index: number;
};
export type AddressPayload = {
  address: string;
  index: number;
};
