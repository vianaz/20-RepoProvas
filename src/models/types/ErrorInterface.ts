import { errorSchemas } from "@schemas/schemas/ErrorSchemas";

export interface IError {
  statusCode: number;
  message: string;
}

export type ErrorTypes = keyof typeof errorSchemas;
