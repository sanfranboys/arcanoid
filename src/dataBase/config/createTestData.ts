import { ForumModel, TopicMessageModel, TopicModel } from '../models/forum'
import SiteTheme from '../models/siteTheme'

const createTestData = () => {
  SiteTheme.create({
    themeName: 'default',
    themeClass: 'default-theme',
  })
  SiteTheme.create({
    themeName: 'dark',
    themeClass: 'dark-theme',
  })

  ForumModel.create({
    id: 1,
    title: 'Впечатление от игры',
  })

  ForumModel.create({
    id: 2,
    title: 'Разработка',
  })

  TopicModel.create({
    title: 'Как Вам дизайн?',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей 3',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей 2',
    forumId: 2,
  })

  TopicMessageModel.create({
    text: 'Очень крутой!',
    author: 'Junepaik',
    topicId: 1,
    likes: 150,
    dislikes: 2,
  })

  TopicMessageModel.create({
    text: 'Убейся ап стену',
    author: 'Jey',
    topicId: 1,
    likes: 0,
    dislikes: 3,
    parentId: 1,
    parentAuthor: 'Junepaik',
  })

  TopicMessageModel.create({
    text: 'КГАМ',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
    parentId: 1,
    parentAuthor: 'Junepaik',
  })

  TopicMessageModel.create({
    text: 'вложенное во вложенное',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
    parentId: 2,
    parentAuthor: 'Jey',
  })

  TopicMessageModel.create({
    text: 'Сообщение без родителя',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
  })
}

export default createTestData
