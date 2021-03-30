import { DataTypes } from 'sequelize';
import { sequelize } from './index';

const SiteTheme = sequelize.define('siteTheme', {
  themeName: DataTypes.STRING,
  themeClass: DataTypes.STRING
}, {
  timestamps: false
});

export default SiteTheme


