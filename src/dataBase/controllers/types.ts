import { Request } from "express";

export type CustomRequestController = {
  body: {
    userId: number,
    theme: number
  }
} & Request
