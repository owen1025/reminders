'use strict';

const topicModel        = require('../../models/topicModel'),
      topicItemModel    = require('../../models/topicItemModel');

const validationHelper  = require('../../helpers/validationHelper');

module.exports = {
    getTopics : async (req, res) => {
        try {
            const topics = await topicModel.getTopics();

            res
                .status(200)
                .json({ topics });
        } catch(error) {
            res
                .status(500)
                .json({ message : error.message });
        }
    },

    createTopic : async (req, res) => {
        try {
            const { item } = req.body;

            validationHelper
                .bodyCheck({
                    name    : 'string',
                }, item);
            
            const createdTopicInfo = await topicModel.createTopic(item);

            res
                .status(201)
                .json({ topic : createdTopicInfo });
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }
    },

    updateTopic : async (req, res) => {
        try {
            const { topic_id } = req.params;
            const { item } = req.body;

            validationHelper
                .bodyCheck({
                    name    : 'string',
                }, item);

            const updatedTopicInfo = await topicModel.updateTopic(topic_id, item);

            res
                .status(200)
                .json({ topic : updatedTopicInfo });
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }
    },

    deleteTopic : async (req, res) => {
        try {
            const { topic_id } = req.params;

            await topicModel.deleteTopic(topic_id);

            res.sendStatus(200);
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }
    },

    getTopicIncludeItems : async (req, res) => {
        try {
            const { topic_id } = req.params;

            const items = await topicItemModel.getItems(topic_id);

            res
                .status(200)
                .json({ items });
        } catch(error) {
            res
                .status(500)
                .json({ message : error.message });
        }
    },

    createTopicIncludeItem : async (req, res) => {
        try {
            const { topic_id } = req.params;
            const { item } = req.body;

            validationHelper
                .bodyCheck({
                    name        : 'string',
                    remind_at   : 'string',
                }, item);
            
            const createdItemInfo = await topicItemModel.createItem(topic_id, item);

            res
                .status(201)
                .json({ item : createdItemInfo });
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }
    },

    updateTopicIncludeItem : async (req, res) => {
        try {
            const { item_id } = req.params;
            const { item } = req.body;

            validationHelper
                .bodyCheck({
                    name        : 'string',
                    status      : 'string',
                    remind_at   : 'string',
                }, item);

            const updatedItemInfo = await topicItemModel.updateItem(item_id, item);

            res
                .status(200)
                .json({ item : updatedItemInfo });
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }  
    },

    deleteTopicIncludeItem : async (req, res) => {
        try {
            const { item_id } = req.params;

            await topicItemModel.deleteItem(item_id);

            res
                .sendStatus(200);
        } catch(error) {
            res
                .status(500)
                .json({ message : error.message });
        }
    },
};