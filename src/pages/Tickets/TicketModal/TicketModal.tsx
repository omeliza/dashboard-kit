/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Modal } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { FormProvider, useForm } from 'react-hook-form';

import Input from 'components/Input/Input';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import SelectBlock from 'pages/Tickets/SelectBlock/SelectBlock';
import { addTicketSchema } from 'constants/validationSchemas';
import { ErrorTypo } from 'pages/Contacts/ContactsModal/ErrorTypo';
import { ITicketModal } from 'interfaces/interfaces';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import CustomButton from 'components/CustomButton/CustomButton';
import {
  addTicket,
  setCurrentTicket,
  setCurrentTicketId,
  updateTicket,
} from 'redux/slices/tickets/tickets.slice';
import { ActionPayloadTicketType } from 'redux/slices/tickets/types';
import {
  StyledPaper,
  StyledTicketForm,
} from 'pages/Tickets/TicketModal/styles';
import {
  CencelButton,
  ModalTitle,
  StyledBtnGroup,
} from 'components/Modals/styles';
import { StyledLabel } from 'components/Input/styles';

const TicketModal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modal.isTicketModalOpen);
  const currentId = useAppSelector((state) => state.tickets.currentTicketId);
  const currentTicket = useAppSelector((state) => state.tickets.currentTicket);

  const methods = useForm<ITicketModal>({
    mode: 'onBlur',
    resolver: joiResolver(addTicketSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClose = () => {
    reset();
    dispatch(toggleTicketModal());
    dispatch(setCurrentTicketId(undefined));
    dispatch(
      setCurrentTicket({
        id: undefined,
        ticketDetails: '',
        customerName: '',
        priority: undefined,
      }),
    );
  };
  const cancel = () => {
    reset();
    dispatch(setCurrentTicketId(undefined));
    dispatch(
      setCurrentTicket({
        id: undefined,
        ticketDetails: '',
        customerName: '',
        priority: undefined,
        date: '',
      }),
    );
  };

  const addTicketSubmit = (data: ActionPayloadTicketType) => {
    if (!currentId) {
      dispatch(
        addTicket({
          ticketDetails: data.ticketDetails,
          customerName: data.customerName,
          date: data.date,
          priority: data.priority,
        }),
      );
    } else {
      dispatch(
        updateTicket({
          id: currentId,
          ticketDetails: data.ticketDetails,
          customerName: data.customerName,
          priority: data.priority,
          date: data.date,
        }),
      );
    }
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledPaper>
        <>
          <ModalTitle>Add new ticket</ModalTitle>
          <FormProvider {...methods}>
            <StyledTicketForm onSubmit={handleSubmit(addTicketSubmit)}>
              <>
                <Input
                  placeholder="Add description"
                  label="Ticket details"
                  type="text"
                  name="ticketDetails"
                  value={currentTicket.ticketDetails}
                  changeHandler={(e) =>
                    dispatch(
                      setCurrentTicket({
                        ...currentTicket,
                        ticketDetails: e.target.value,
                      }),
                    )
                  }
                />
                {errors.ticketDetails && (
                  <ErrorTypo>{errors.ticketDetails.message}</ErrorTypo>
                )}
                <Input
                  placeholder="Name"
                  label="Customer name"
                  type="text"
                  name="customerName"
                  value={currentTicket.customerName}
                  changeHandler={(e) =>
                    dispatch(
                      setCurrentTicket({
                        ...currentTicket,
                        customerName: e.target.value,
                      }),
                    )
                  }
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
                  // value={currentTicket.date}
                  changeHandler={(e) =>
                    dispatch(
                      setCurrentTicket({
                        ...currentTicket,
                        date: e.target.value,
                      }),
                    )
                  }
                  // disabled={currentId !== undefined}
                />
                {errors.date && <ErrorTypo>{errors.date.message}</ErrorTypo>}
                <StyledLabel>
                  {'Priority'.toUpperCase()}
                  <SelectBlock />
                </StyledLabel>
                {errors.priority && (
                  <ErrorTypo>{errors.priority.message}</ErrorTypo>
                )}
                <StyledBtnGroup orientation="vertical">
                  <CustomButton name="Save" />
                  <CencelButton variant="text" onClick={cancel}>
                    Cancel
                  </CencelButton>
                </StyledBtnGroup>
              </>
            </StyledTicketForm>
          </FormProvider>
        </>
      </StyledPaper>
    </Modal>
  );
};

export default TicketModal;
