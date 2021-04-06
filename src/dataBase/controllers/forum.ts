import { Response } from 'express'
import sequelize from 'sequelize'
import { ForumModel, TopicMessageModel, TopicModel } from '../models/forum'

export const getForums = (_req: any, res: Response) => {
  ForumModel.findAll({
    include: [
      {
        model: TopicModel,
        as: 'topics',
        attributes: [],
      },
    ],
    attributes: [
      'id',
      'title',
      [sequelize.fn('count', sequelize.col('topics')), 'topicsCount'],
    ],
    group: ['forum.id'],
  })
    .then((forums) => {
      res.send({ forums })
    })
    .catch(() => res.status(404).send({}))
}

export const getTopicById = (req: any, res: Response) => {
  TopicModel.findByPk(req.params.id, {
    include: [
      {
        model: TopicMessageModel,
        as: 'messages',
        attributes: ['id', 'text', 'author'],
        include: [
          { model: TopicMessageModel, as: 'answers', attributes: ['id'] },
        ],
      },
    ],
    attributes: ['id', 'title'],
  })
    .then((topic) => {
      res.send({ topic })
    })
    .catch(() => res.status(404).send({}))
}

export const getForumById = (req: any, res: Response) => {
  ForumModel.findByPk(req.params.id, {
    attributes: ['id', 'title'],
    include: [
      {
        model: TopicModel,
        as: 'topics',
        include: [
          {
            model: TopicMessageModel,
            as: 'messages',
            attributes: [],
          },
        ],
        attributes: [
          'id',
          'title',
          [
            sequelize.fn('count', sequelize.col('topics->messages')),
            'messagesCount',
          ],
        ],
        group: ['topics.id'],
      },
    ],
    group: ['forum.id', 'topics.id'],
  })
    .then((forum) => {
      res.send({ forum })
    })
    .catch(() => res.status(404).send({}))
}

export const createTopic = (req: any, res: Response) => {
  const { title, forumId } = req.body
  TopicModel.create({
    title,
    forumId,
  })
    .then((el) => {
      res.send(el)
    })
    .catch(() => res.status(404).send())
}

export const createMessage = async (req: any, res: Response) => {
  const { text, author, topicId } = req.body
  TopicMessageModel.create({
    text,
    author,
    topicId,
  })
    .then(() => {
      res.send({
        text,
        author,
        topicId,
      })
    })
    .catch(() => res.status(404).send())
}

export default getForums
