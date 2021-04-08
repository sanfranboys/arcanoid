export type Message = {
  id: number | string
  text: string
  author: string
}

export type MessageProps = {
  message: Message
  offset?: boolean
}
