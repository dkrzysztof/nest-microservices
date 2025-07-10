import { ConfigService as NestConfigService } from '@nestjs/config';
import { ConfigKeys } from './config.const';

export class ConfigService extends NestConfigService<ConfigKeys> {}
