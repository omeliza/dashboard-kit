export type InitState = {
  isContactModalOpen: boolean;
  isTicketModalOpen: boolean;
};

export interface IToggleTicketModal {
  type: 'TOGGLE-TICKET-MODAL';
}

export interface IToggleContactModal {
  type: 'TOGGLE-CONTACT-MODAL';
}
