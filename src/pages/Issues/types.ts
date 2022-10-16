export type Step1FormValues = {
  step1: { firstName: string; lastName: string }[];
};
export type Step2FormValues = {
  step2: { issueDetail: string; priority: string }[];
};
export type Step3FormValues = {
  step3: { email: string; address: string }[];
};

export type IssuesColumn = {
  id: string;
  label: string;
  minWidth: number;
};
