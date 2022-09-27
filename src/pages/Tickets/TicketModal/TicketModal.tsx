/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Button,
  ButtonGroup,
  Modal,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { FormProvider, useForm } from 'react-hook-form';

import Input, { StyledLabel } from 'components/Input/Input';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import SelectBlock from 'pages/Tickets/SelectBlock/SelectBlock';
import { addTicketSchema } from 'constants/validationSchemas';
import { ErrorTypo } from 'pages/Contacts/ContactsModal/ErrorTypo';
import { ITicketModal } from 'interfaces/interfaces';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import CustomButton from 'components/CustomButton/CustomButton';
import { $white } from 'constants/colors';

const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  min-height: 606px;
  background-color: ${$white};
  border: '2px solid #000';
  box-shadow: 24;
  padding: 32px 32px 40px 32px;
  text-align: 'center';
`;

const TicketModal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modal.isTicketModalOpen);
  const methods = useForm<ITicketModal>({
    mode: 'onBlur',
    resolver: joiResolver(addTicketSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const addTicket = () => {};

  const handleClose = () => {
    dispatch(toggleTicketModal());
    reset();
  };
  const cancel = () => {
    handleClose();
    reset();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledPaper>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '30px',
            letterSpacing: '0.3px',
            textAlign: 'center',
            mb: '32px',
          }}
        >
          Add new ticket
        </Typography>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(addTicket)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '316px',
              minHeight: '452px',
            }}
          >
            <Input
              placeholder="Add description"
              label="Ticket details"
              type="text"
              name="ticketDetails"
            />
            {errors.ticketDetails && (
              <ErrorTypo>{errors.ticketDetails.message}</ErrorTypo>
            )}
            <Input
              placeholder="Name"
              label="Customer name"
              type="text"
              name="customerName"
            />
            {errors.customerName && (
              <ErrorTypo>{errors.customerName.message}</ErrorTypo>
            )}
            <Input
              type="date"
              label="Date"
              placeholder="Date"
              name="date"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <ErrorTypo>{errors.date.message}</ErrorTypo>}
            <StyledLabel>
              {'Priority'.toUpperCase()}
              <SelectBlock />
            </StyledLabel>
            {errors.priority && (
              <ErrorTypo>{errors.priority.message}</ErrorTypo>
            )}
            <ButtonGroup
              orientation="vertical"
              sx={{
                display: 'flex',
                minHeight: '95px',
                justifyContent: 'space-between',
                mt: '24px',
              }}
            >
              <CustomButton name="Save" />
              <Button
                variant="text"
                onClick={cancel}
                sx={{
                  ml: 'calc(50% - 158px)',
                  display: 'block',
                  letterSpacing: '0.2px',
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        </FormProvider>
      </StyledPaper>
    </Modal>
  );
};

export default TicketModal;
