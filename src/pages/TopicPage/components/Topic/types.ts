import { TopicItemWithCounts } from 'ducks/forum/types'

export type TopicProps = {
  topic: TopicItemWithCounts
  onClick?: () => void
}
