import { Sequelize,DataTypes } from 'sequelize'

export const sequelize = new Sequelize('postgres://user:password@0.0.0.0:5432/name')

export const Thema = sequelize.define('Thema', {
  nameThema:{
    type:DataTypes.STRING
  },
  classThema:{
    type:DataTypes.STRING
  }
});

