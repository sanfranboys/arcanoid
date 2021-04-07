import { Message } from 'ducks/forum/types'

export type MessageProps = {
  message: Message
  onAnswer: (author: string, id: number) => void
  offset?: boolean
}
