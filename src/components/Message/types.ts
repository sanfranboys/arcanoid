export type Message = {
  id: number
  text: string
  author: string
}

export type MessageProps = {
  message: Message
  offset?: boolean
}
