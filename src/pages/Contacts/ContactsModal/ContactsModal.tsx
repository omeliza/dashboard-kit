/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Modal,
  Typography,
  Button,
  Paper,
  styled,
  ButtonGroup,
} from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { $white, $black } from 'constants/colors';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import Input from 'components/Input/Input';
import { addContactSchema } from 'constants/validationSchemas';
import CustomButton from 'components/CustomButton/CustomButton';
import { IContactModal } from 'interfaces/interfaces';
import { ErrorTypo } from 'pages/Contacts/ContactsModal/ErrorTypo';
import { addContact } from 'redux/slices/contacts/contacts.slice';

const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  min-height: 674px;
  background-color: ${$white};
  border: '2px solid #000';
  box-shadow: 24;
  padding: 32px 32px 40px 32px;
  text-align: 'center';
`;

const ContactsModal = () => {
  const isOpen = useAppSelector((state) => state.modal.isContactModalOpen);

  const dispatch = useAppDispatch();

  const methods = useForm<IContactModal>({
    mode: 'onBlur',
    resolver: joiResolver(addContactSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClose = () => {
    dispatch(toggleContactModal());
    reset();
  };

  const cancel = () => {
    handleClose();
    reset();
  };

  const addContactSubmit = (data: {
    image?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    src?: string;
  }) => {
    dispatch(
      addContact({
        src: data.image,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        address: data.address,
      }),
    );
    handleClose();
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
          Add new contact
        </Typography>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(addContactSubmit)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '316px',
              minHeight: '536px',
            }}
          >
            <Button
              component="label"
              sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 0 }}
            >
              <AddIcon
                sx={{
                  fontSize: '60px',
                  color: 'rgba(159, 162, 180, 0.5)',
                  mr: '20px',
                  display: 'flex',
                  justifyContent: 'start',
                  ml: '-5px',
                  mb: 0,
                }}
              />
              <Typography
                sx={{
                  color: `${$black}`,
                  letterSpacing: '0.2px',
                  fontWeight: 600,
                }}
              >
                Add photo
              </Typography>
              <input type="file" hidden accept="image/*" name="image" />
            </Button>
            <Input
              placeholder="First name"
              label="First name"
              type="text"
              name="firstName"
            />
            {errors.firstName && (
              <ErrorTypo>{errors.firstName.message}</ErrorTypo>
            )}
            <Input
              placeholder="Last name"
              label="Last name"
              type="text"
              name="lastName"
            />
            {errors.lastName && (
              <ErrorTypo>{errors.lastName.message}</ErrorTypo>
            )}
            <Input
              placeholder="Email"
              label="Email"
              type="email"
              name="email"
            />
            {errors.email && <ErrorTypo>{errors.email.message}</ErrorTypo>}
            <Input
              placeholder="Address"
              label="Address"
              type="text"
              name="address"
            />
            {errors.address && <ErrorTypo>{errors.address.message}</ErrorTypo>}
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

export default ContactsModal;
