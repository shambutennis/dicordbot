const Sequelize = require('sequelize');
const sequelize = new Sequelize('discordbot', 'username', 'password',{
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});
const Tictactoe = require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);

module.exports = {
    Tictactoe
}