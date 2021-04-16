import { Message } from 'ducks/forum/types'
import { Request } from 'express'

export type ThemeRequestController = {
  body: {
    userId: number
    theme: number
  }
} & Request

export type MessageRequestController = {
  body: Message
} & Request
