import * as Joi from 'joi';

const validationObject = {
  MONGODB_URI: Joi.string().required(),
};
export type ConfigKeys = typeof validationObject;
export const validationSchema = Joi.object(validationObject);
