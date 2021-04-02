
import { DataTypes } from 'sequelize';
import sequelize from './connect';
import SiteTheme from './siteTheme';

const User = sequelize.define('userTheme', {
  userId: DataTypes.STRING,
}, {
  timestamps: false
});

User.belongsTo(SiteTheme, {
  foreignKey: {
    name: 'theme',
    defaultValue: 1
  }
})

export default User
