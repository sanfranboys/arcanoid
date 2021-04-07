import arrayToTree from 'array-to-tree'
import { Message } from 'ducks/forum/types'

export const getMessageList = (messages: Message[]): Message[] => {
  const treedMessages = arrayToTree(messages, {
    parentProperty: 'parentId',
  })

  const newMessages = (msgs: Message[]): Message[] => {
    const stack = msgs
    const resultArr: Message[] = []

    while (stack.length > 0) {
      const item = stack.shift()
      if (item?.children) {
        const { children, ...rest } = item
        resultArr.push({ ...rest })
        children.forEach((child: Message) => {
          stack.unshift({ ...child, offset: true })
        })
      } else {
        resultArr.push(item)
      }
    }

    return resultArr
  }

  return newMessages(treedMessages)
}
