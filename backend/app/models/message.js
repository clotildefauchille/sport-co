const Sequelize = require("sequelize");
const sequelize = require("../database");

class Message extends Sequelize.Model {}

Message.init(
  {
    comment: Sequelize.STRING,
  },
  {
    sequelize,
    tableName: "sport",
  }
);

module.exports = Message;
