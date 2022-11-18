import { HttpStatus } from '@nestjs/common';
import { ErrorMessage } from './utils/consts/variables.const';
import {
  IErrorResponse,
  IValidationErrors
} from './utils/interfaces/response.interface';

/**
 * @class CommonService
 */
export class CommonService {
  /**
   * Repository of derived class type
   */
  protected repository: any;

  /**
   * @constructor CommonService
   * @param repository
   */
  constructor(repository: any) {
    this.repository = repository;
  }

  /**
   * @description Function to handle validation error response
   * @param message
   * @param statusCode
   * @param validationErrors
   * @returns
   */
  static handleValidationError(
    message: string,
    statusCode?: HttpStatus,
    validationErrors?: Array<IValidationErrors>
  ): IErrorResponse {
    return {
      ...{
        statusCode: statusCode || HttpStatus.FAILED_DEPENDENCY,
        message: message || ErrorMessage.SOMETHING_WENT_WRONG,
        validationErrors: validationErrors
      }
    };
  }
}
