import Joi from 'joi';

export const addTicketSchema = Joi.object({
  ticketDetails: Joi.string().min(6).max(25).required(),
  customerName: Joi.string().label('Customer name').min(6).max(20).required(),
  date: Joi.string().label('Date').required(),
  priority: Joi.any().required(),
});
