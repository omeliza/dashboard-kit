/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Divider } from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { step3 } from 'pages/Issues/Step3/step3.schema';
import { WizardFormWrapper, WizardFormTitle } from 'pages/Issues/styles';
import { Step3FormValues } from 'pages/Issues/types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { StyledLabel, StyledInput } from 'components/Input/styles';
import { ErrorTypo } from 'components/Typographies/Typographies';
import DeleteResetGroup from 'pages/Issues/DeleteResetGroup/DeleteResetGroup';
import { Block } from 'styles/styles';
import NextPrevBlock from 'pages/Issues/NextPrevBlock/NextPrevBlock';
import {
  setList,
  clearSteps,
  setEmail,
  setAddress,
} from 'redux/slices/wizard/wizard.slice';

const Step3 = () => {
  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
  } = useForm<Step3FormValues>({
    resolver: joiResolver(step3),
    mode: 'onBlur',
    defaultValues: {
      step3: [{ email: '', address: '' }],
    },
  });

  const dispatch = useAppDispatch();
  const { fields, append, remove } = useFieldArray({ control, name: 'step3' });

  const step3State = useAppSelector((state) => state.wizard.step3);

  const navigate = useNavigate();
  const onSubmit = () => {
    dispatch(setList());
    dispatch(clearSteps());
    navigate('/issues');
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
                EMAIL
                <StyledInput
                  placeholder="Email"
                  {...register(`step3.${index}.email` as const)}
                  type="email"
                  value={step3State[index].email}
                  onChange={(e) =>
                    dispatch(setEmail({ email: e.target.value, index }))
                  }
                />
              </StyledLabel>

              {errors?.step3?.[index]?.email && (
                <ErrorTypo>{errors?.step3?.[index]?.email?.message}</ErrorTypo>
              )}
              <StyledLabel>
                ADDRESS
                <StyledInput
                  placeholder="Address"
                  {...register(`step3.${index}.address` as const)}
                  type="text"
                  value={step3State[index].address}
                  onChange={(e) =>
                    dispatch(setAddress({ address: e.target.value, index }))
                  }
                />
              </StyledLabel>

              {errors?.step3?.[index]?.address && (
                <ErrorTypo>
                  {errors?.step3?.[index]?.address?.message}
                </ErrorTypo>
              )}
              <DeleteResetGroup index={index} reset={reset} remove={remove} />
            </section>
          ))}
          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => append({ email: '', address: '' })}
          >
            Add
          </Button>

          <NextPrevBlock name="Submit" />
        </form>
      </Block>
    </WizardFormWrapper>
  );
};

export default Step3;
