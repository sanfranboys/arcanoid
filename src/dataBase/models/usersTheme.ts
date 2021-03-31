
import { DataTypes } from 'sequelize';
import sequelize from './connect';
import SiteTheme from './siteTheme';

const UserTheme = sequelize.define('userTheme', {
  userId: DataTypes.STRING,
}, {
  timestamps: false
});

UserTheme.belongsTo(SiteTheme, {
  foreignKey: {
    name: 'theme',
    defaultValue: 1
  }
})

export default UserTheme
