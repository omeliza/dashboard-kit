import Joi from 'joi';

export const step2 = Joi.object({
  step2: Joi.array()
    .items({
      issueDetail: Joi.string()
        .label('Issue details')
        .min(6)
        .max(25)
        .required(),
      priority: Joi.string().label('Priority').required(),
    })
    .required()
    .min(1),
});
