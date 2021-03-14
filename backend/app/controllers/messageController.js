const { Activity, Message, User } = require('../models');

const Sequelize = require("sequelize");
const { formatDate } = require('../selectors/formatDate');

const messageController = {

    addMessageToActivity: async (req, res) => {
        console.log('----------> addMessageToActivity');
        let activityId = parseInt(req.params.id);
        const { userId, message } = req.body;

        try {
            const newMessage = await Message.create({
                comment: message,
                activity_id: activityId,
                user_id: userId,
            });

            console.log(newMessage);
            res.status(201).send('newActivity well created,');

        } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
      }
    },

    getMessageByActivity: async (req, res) => {
        console.log('----------> getMessageByActivity');
        let activityId = parseInt(req.params.id);
        try {
            const messages = await Message.findAll({
                include: [
                    {
                        association: 'users',
                        attributes: ['id', 'pseudo'],
                    }
                ],
                attributes: ['id','created_at', 'comment', 'activity_id'],
                where: {
                    activity_id: activityId,
                },
                order: [['created_at', 'DESC']],
            });
            
            const formatedMessages = messages.map((message) => {
                return {
                  ...message.dataValues,
                  created_at: formatDate(message.created_at),
                }
            });

            res.json(formatedMessages);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = messageController;