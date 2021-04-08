import { ForumWithTopicCounts } from 'ducks/forum/types'

export type ForumProps = {
  forum: ForumWithTopicCounts
  onClick?: () => void
}
