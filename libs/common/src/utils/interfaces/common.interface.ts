import { DeleteResult, UpdateResult } from 'typeorm';
import { PageOptions } from '../classes/page-options.class';
import { QueryOptions } from '../classes/query-options.class';
import { TCommonController, TCommonService } from '../types/types';
import {
  IErrorResponse,
  IPaginatedResponse,
  ISuccessResponse
} from './response.interface';

export interface ICommonController {
  createRecord(
    createDto: unknown,
    responseAsApi: boolean
  ): Promise<TCommonController>;
  fetchOneRecord(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonController>;
  fetchAllRecords(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonController>;
  fetchAllRecordsWithPagination(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonController>;
  updateRecord(
    updateDto: unknown,
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonController>;
  softDeleteRecord(
    responseAsApi: boolean,
    criteria: any
  ): Promise<TCommonController>;
  deleteRecord(
    responseAsApi: boolean,
    criteria: any
  ): Promise<TCommonController>;
}
export interface ICommonService<T> {
  createRecord(
    createDto: unknown,
    responseAsApi: boolean
  ): Promise<TCommonService | T>;
  fetchOneRecord(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonService | T>;
  fetchAllRecords(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonService | Array<T>>;
  fetchAllRecordsWithPagination(
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonService | T | Array<T>>;
  updateRecord(
    updateDto: unknown,
    criteria: any,
    responseAsApi: boolean
  ): Promise<TCommonService | UpdateResult>;
  softDeleteRecord(
    responseAsApi: boolean,
    criteria: any
  ): Promise<TCommonService | UpdateResult>;
  deleteRecord(
    responseAsApi: boolean,
    criteria: any
  ): Promise<TCommonService | DeleteResult>;
  handleSuccess(successRes?: ISuccessResponse): ISuccessResponse;
  handleError(errorRes?: IErrorResponse): IErrorResponse;
  queryOptions(pageOptions: PageOptions): QueryOptions;
  paginate(
    records: Array<Record<string, unknown | never>>,
    totalRecords: number,
    pageOptions: PageOptions
  ): IPaginatedResponse;
  groupBy(arr: Array<any>, property: string): Promise<typeof arr>;
}
export interface ICommonRepository<T> {
  createRecord(createDto: any): Promise<T | Array<T> | unknown>;
  fetchOneRecord(criteria: any): Promise<T | Array<T> | unknown>;
  fetchAllRecords(criteria: any): Promise<T | Array<T> | any>;
  fetchAllRecordsWithCount(criteria: any): Promise<T | Array<T> | unknown>;
  updateRecord(updateDto: any, criteria: any): Promise<T | Array<T> | unknown>;
  softDeleteRecord(criteria: any): Promise<T | Array<T> | unknown>;
  deleteRecord(criteria: any): Promise<T | Array<T> | unknown>;
}
