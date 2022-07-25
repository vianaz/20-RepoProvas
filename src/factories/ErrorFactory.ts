import { errorSchemas } from "@schemas/schemas/ErrorSchemas";
import { ErrorTypes, IError } from "@schemas/types/ErrorInterface";

export class ErrorFactory {
  public error: IError;
  constructor(type: ErrorTypes) {

    this.error = errorSchemas[type];
  }
}
