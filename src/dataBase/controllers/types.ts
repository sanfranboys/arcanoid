import { Request } from 'express'

export type ThemeRequestController = {
  body: {
    userId: number
    theme: number
  }
} & Request
