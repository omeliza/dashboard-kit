/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Modal, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import Input from 'components/Input/Input';
import CustomButton from 'components/CustomButton/CustomButton';
import { IContactModal } from 'interfaces/interfaces';
import {
  addContact,
  setCurrentId,
  setCurrentContact,
  updateContact,
} from 'redux/slices/contacts/contacts.slice';
import {
  AddPhotoDesc,
  StyledAddIcon,
  StyledForm,
  StyledPaper,
} from 'pages/Contacts/ContactsModal/styles';
import { ErrorTypo } from 'components/Typographies/Typographies';
import { addContactSchema } from 'pages/Contacts/ContactsModal/validationSchema';
import { CencelButton, ModalTitle, StyledBtnGroup } from 'styles/styles';

const ContactsModal = () => {
  const isOpen = useAppSelector((state) => state.modal.isContactModalOpen);
  const currentId = useAppSelector((state) => state.contacts.currentId);

  const currentContact = useAppSelector(
    (state) => state.contacts.currentContact,
  );
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
    reset();
    dispatch(toggleContactModal());
    dispatch(setCurrentId(undefined));
    dispatch(
      setCurrentContact({
        id: undefined,
        src: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }),
    );
  };

  const cancel = () => {
    reset();
    dispatch(setCurrentId(undefined));
    dispatch(
      setCurrentContact({
        id: undefined,
        src: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }),
    );
  };

  const addContactSubmit = (data: IContactModal) => {
    if (!currentId) {
      dispatch(
        addContact({
          src: data.image,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          address: data.address,
        }),
      ).catch((e) => e.message);
    } else {
      dispatch(
        updateContact({
          id: currentId,
          src: currentContact.src || '',
          firstName: currentContact.firstName,
          lastName: currentContact.lastName,
          email: currentContact.email,
          address: currentContact.address,
        }),
      ).catch((e) => e.message);
    }
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledPaper>
        <>
          <ModalTitle>
            {currentId ? 'Editing contact' : 'Add new contact'}
          </ModalTitle>
          <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(addContactSubmit)}>
              <Button
                component="label"
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  paddingLeft: 0,
                }}
              >
                <>
                  <StyledAddIcon />
                  <AddPhotoDesc>Add photo</AddPhotoDesc>
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    name="image"
                    onChange={(e) =>
                      dispatch(
                        setCurrentContact({
                          ...currentContact,
                          src: e.target.value,
                        }),
                      )
                    }
                  />
                </>
              </Button>
              <Input
                placeholder="First name"
                label="First name"
                type="text"
                name="firstName"
                value={currentContact.firstName}
                changeHandler={(e) =>
                  dispatch(
                    setCurrentContact({
                      ...currentContact,
                      firstName: e.target.value,
                    }),
                  )
                }
              />
              {errors.firstName && (
                <ErrorTypo>{errors.firstName.message}</ErrorTypo>
              )}
              <Input
                placeholder="Last name"
                label="Last name"
                type="text"
                name="lastName"
                value={currentContact.lastName}
                changeHandler={(e) =>
                  dispatch(
                    setCurrentContact({
                      ...currentContact,
                      lastName: e.target.value,
                    }),
                  )
                }
              />
              {errors.lastName && (
                <ErrorTypo>{errors.lastName.message}</ErrorTypo>
              )}
              <Input
                placeholder="Email"
                label="Email"
                type="email"
                name="email"
                value={currentContact.email}
                changeHandler={(e) =>
                  dispatch(
                    setCurrentContact({
                      ...currentContact,
                      email: e.target.value,
                    }),
                  )
                }
              />
              {errors.email && <ErrorTypo>{errors.email.message}</ErrorTypo>}
              <Input
                placeholder="Address"
                label="Address"
                type="text"
                name="address"
                value={currentContact.address}
                changeHandler={(e) =>
                  dispatch(
                    setCurrentContact({
                      ...currentContact,
                      address: e.target.value,
                    }),
                  )
                }
              />
              {errors.address && (
                <ErrorTypo>{errors.address.message}</ErrorTypo>
              )}
              <StyledBtnGroup orientation="vertical">
                <CustomButton name="Save" />
                <CencelButton variant="text" onClick={cancel} type="reset">
                  Cancel
                </CencelButton>
              </StyledBtnGroup>
            </StyledForm>
          </FormProvider>
        </>
      </StyledPaper>
    </Modal>
  );
};

export default ContactsModal;
