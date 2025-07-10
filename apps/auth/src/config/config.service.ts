import { ConfigService as NestConfigService } from '@nestjs/config';
import * as Joi from 'joi';

const validationObject = {
  MONGODB_URI: Joi.string().required(),
  JWT_SECRET : Joi.string().required(),
  JWT_EXPIRATION : Joi.number().required(),
  PORT: Joi.number().default(3000)
};
export type ConfigKeys = typeof validationObject;
export const validationSchema = Joi.object(validationObject);

export class ConfigService extends NestConfigService<ConfigKeys> {}
