import * as Joi from 'joi';

const validationObject = {
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.number().default(3000),
};
export type ConfigKeys = typeof validationObject;
export const validationSchema = Joi.object(validationObject);
