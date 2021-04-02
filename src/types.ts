import { Request } from "express";

export type CustomRequest = {
  customProperty: { id: number } | null,
  customTheme?: {}
} & Request
