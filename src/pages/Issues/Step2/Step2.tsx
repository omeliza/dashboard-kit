/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { Block } from 'styles/styles';
import { step2 } from 'pages/Issues/Step2/step2.schema';
import { WizardFormTitle, WizardFormWrapper } from 'pages/Issues/styles';
import { StyledInput, StyledLabel } from 'components/Input/styles';
import { ErrorTypo } from 'components/Typographies/Typographies';
import { setIssueDetail, setPriority } from 'redux/slices/wizard/wizard.slice';
import { $grey2 } from 'constants/colors';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import DeleteResetGroup from 'pages/Issues/DeleteResetGroup/DeleteResetGroup';
import { Step2FormValues } from 'pages/Issues/types';
import NextPrevBlock from 'pages/Issues/NextPrevBlock/NextPrevBlock';

const Step2 = () => {
  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
  } = useForm<Step2FormValues>({
    resolver: joiResolver(step2),
    mode: 'onBlur',
    defaultValues: {
      step2: [{ issueDetail: '', priority: '' }],
    },
  });

  const dispatch = useAppDispatch();
  const { fields, append, remove } = useFieldArray({ control, name: 'step2' });

  const step2State = useAppSelector((state) => state.wizard.step2);

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/step3');
  };
  return (
    <WizardFormWrapper>
      <Block style={{ maxHeight: '75vh' }}>
        <WizardFormTitle gutterBottom variant="h2">
          Issues Form
        </WizardFormTitle>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <section key={field.id}>
              <StyledLabel>
                ISSUE DETAILS
                <StyledInput
                  placeholder="Issue details"
                  {...register(`step2.${index}.issueDetail` as const)}
                  type="text"
                  value={step2State[index].issueDetail}
                  onChange={(e) =>
                    dispatch(
                      setIssueDetail({ issueDetail: e.target.value, index }),
                    )
                  }
                />
              </StyledLabel>

              {errors?.step2?.[index]?.issueDetail && (
                <ErrorTypo>
                  {errors?.step2?.[index]?.issueDetail?.message}
                </ErrorTypo>
              )}
              <StyledLabel>
                PRIORITY
                <Select
                  value={step2State[index].priority}
                  {...register(`step2.${index}.priority` as const)}
                  onChange={(e: SelectChangeEvent) =>
                    dispatch(setPriority({ priority: e.target.value, index }))
                  }
                  displayEmpty
                  name={`step2.${index}.priority`}
                  // inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    width: 316,
                    height: 42,
                    backgroundColor: '#fcfdfe',
                    border: '1px solid #f0f1f7',
                    borderRadius: '8px',
                    marginTop: '8px',
                  }}
                >
                  <MenuItem value="">
                    <em style={{ color: `${$grey2}` }}>Priority</em>
                  </MenuItem>
                  <MenuItem value="low">low</MenuItem>
                  <MenuItem value="normal">normal</MenuItem>
                  <MenuItem value="high">high</MenuItem>
                </Select>
              </StyledLabel>
              {errors?.step2?.[index]?.priority && (
                <ErrorTypo>
                  {errors?.step2?.[index]?.priority?.message}
                </ErrorTypo>
              )}
              <DeleteResetGroup index={index} reset={reset} remove={remove} />
            </section>
          ))}
          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => append({ issueDetail: '', priority: '' })}
          >
            Add
          </Button>
          <NextPrevBlock name="Next" />
        </form>
      </Block>
    </WizardFormWrapper>
  );
};

export default Step2;
