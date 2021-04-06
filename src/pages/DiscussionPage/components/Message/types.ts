import { Message } from 'ducks/forum/types'

export type MessageProps = {
  message: Message
  offset?: boolean
}
