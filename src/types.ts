import { Request } from "express";

export type CustomRequest = {
  customProperty:Object | null
} & Request
