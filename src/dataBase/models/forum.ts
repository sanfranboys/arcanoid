import { DataTypes } from 'sequelize'
import sequelize from '../connect'

export const ForumModel = sequelize.define('forum', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
})

export const TopicModel = sequelize.define('topic', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
})

export const TopicMessageModel = sequelize.define('message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
})

ForumModel.hasMany(TopicModel, { as: 'topics' })

TopicModel.belongsTo(ForumModel, {
  foreignKey: 'forumId',
  as: 'forum',
})

TopicModel.hasMany(TopicMessageModel, { as: 'messages' })

TopicMessageModel.belongsTo(TopicModel, {
  foreignKey: 'topicId',
  as: 'message',
})

TopicMessageModel.hasMany(TopicMessageModel, { as: 'answers' })

TopicMessageModel.belongsTo(TopicMessageModel, {
  foreignKey: 'answerId',
  as: 'answerTo',
})
