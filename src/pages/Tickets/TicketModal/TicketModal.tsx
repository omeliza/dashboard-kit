/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Modal } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input/Input';
import SelectBlock from 'pages/Tickets/SelectBlock/SelectBlock';
import { addTicketSchema } from 'constants/validationSchemas';
import { ITicketModal } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
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
import { ErrorTypo } from 'components/Typographies/Typographies';
import { AppState } from 'store/reducers/rootReducer';
import {
  addTicket,
  setCurrentTicket,
  setCurrentTicketId,
  updateTicket,
} from 'store/actions/tickets/ticketActions';
import { toggleTicketModal } from 'store/actions/modal/modalActions';
import { ActionPayloadTicketType } from 'store/reducers/tickets/types';

const TicketModal = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: AppState) => state.modal.isTicketModalOpen,
  );
  const currentId = useSelector(
    (state: AppState) => state.tickets.currentTicketId,
  );
  const currentTicket = useSelector(
    (state: AppState) => state.tickets.currentTicket,
  );

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
        priority: '',
        date: '',
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
        priority: '',
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
