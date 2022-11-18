import { Controller } from '@nestjs/common';
import { PageOptions } from './utils/classes/page-options.class';
import { ICommonController } from './utils/interfaces/common.interface';
import {
  ISuccessResponse,
  IErrorResponse
} from './utils/interfaces/response.interface';
import { TCommonController } from './utils/types/types';

/**
 * @class CommonController
 */
@Controller()
export class CommonController {}
