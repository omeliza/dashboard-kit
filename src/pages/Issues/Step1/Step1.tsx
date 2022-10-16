/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

import CloseFormBtn from 'pages/Issues/CloseFormBtn/CloseFormBtn';
import { ErrorTypo } from 'components/Typographies/Typographies';
import { StyledInput, StyledLabel } from 'components/Input/styles';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { step1 } from 'pages/Issues/Step1/step1.schema';
import {
  WizardFormWrapper,
  WizardFormTitle,
  NextButton,
} from 'pages/Issues/styles';
import { Block } from 'styles/styles';
import DeleteResetGroup from 'pages/Issues/DeleteResetGroup/DeleteResetGroup';
import { Step1FormValues } from 'pages/Issues/types';
import {
  clearSteps,
  setFirstName,
  setLastName,
} from 'redux/slices/wizard/wizard.slice';

const Step1 = () => {
  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
  } = useForm<Step1FormValues>({
    resolver: joiResolver(step1),
    mode: 'all',
    defaultValues: {
      step1: [{ firstName: '', lastName: '' }],
    },
  });
  const dispatch = useAppDispatch();
  const { fields, append, remove } = useFieldArray({ control, name: 'step1' });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Step1FormValues> = () => {
    navigate('/step2');
  };
  const step1State = useAppSelector((state) => state.wizard.step1);

  const closeForm = () => {
    reset();
    dispatch(clearSteps());
    navigate('/issues');
  };

  return (
    <WizardFormWrapper>
      <Block style={{ maxHeight: '75vh' }}>
        <CloseFormBtn closeForm={closeForm} />
        <WizardFormTitle gutterBottom variant="h2">
          Issues Form
        </WizardFormTitle>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <section key={field.id}>
              <StyledLabel>
                FIRST NAME
                <StyledInput
                  placeholder="First Name"
                  {...register(`step1.${index}.firstName` as const)}
                  type="text"
                  value={step1State[index].firstName}
                  onChange={(e) =>
                    dispatch(setFirstName({ firstName: e.target.value, index }))
                  }
                />
              </StyledLabel>
              {errors?.step1?.[index]?.firstName && (
                <ErrorTypo>
                  {errors?.step1?.[index]?.firstName?.message}
                </ErrorTypo>
              )}
              <StyledLabel>
                LAST NAME
                <StyledInput
                  placeholder="Last Name"
                  {...register(`step1.${index}.lastName` as const)}
                  type="text"
                  value={step1State[index].lastName}
                  onChange={(e) =>
                    dispatch(setLastName({ lastName: e.target.value, index }))
                  }
                />
              </StyledLabel>
              {errors?.step1?.[index]?.lastName && (
                <ErrorTypo>
                  {errors?.step1?.[index]?.lastName?.message}
                </ErrorTypo>
              )}
              <DeleteResetGroup index={index} reset={reset} remove={remove} />
            </section>
          ))}
          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => append({ firstName: '', lastName: '' })}
          >
            Add
          </Button>

          <NextButton type="submit">Next</NextButton>
        </form>
      </Block>
    </WizardFormWrapper>
  );
};

export default Step1;
