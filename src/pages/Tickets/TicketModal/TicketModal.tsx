import React from 'react';
import { Modal, Typography } from '@mui/material';

import Input from 'components/Input/Input';
import { useAppSelector } from 'redux/hooks';

const TicketModal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  return (
    <Modal open={isOpen} sx={{ width: '380px', height: '606px' }}>
      <>
        <Typography>Add ticket</Typography>
        <form>
          <Input
            placeholder="Add description"
            label="Ticket details"
            type="text"
            name="details"
          />
          <Input
            placeholder="Name"
            label="Customer name"
            type="text"
            name="details"
          />
          <Input placeholder="Name" label="Date" type="date" name="date" />
        </form>
      </>
    </Modal>
  );
};

export default TicketModal;
