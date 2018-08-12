'use strict';

const validationHelper = require('../../helpers/validationHelper');

const topicModel = require('../../models/topicModel');

module.exports = {
    getTopics : async (req, res) => {
        try {
            const topics = await topicModel.getTopics();

            res
                .status(200)
                .json({ topics });
        } catch(error) {
            res
                .sendStatus(500)
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
            
            await topicModel.createTopic(item);

            res
                .sendStatus(201);
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

            await topicModel.updateTopic(topic_id, item);

            res.sendStatus(200);
        } catch(error) {
            res
                .status(error.statusCode || 500)
                .json({ message : error.message || '' });
        }
    },

    deleteTopic : (req, res) => {

    },

    getTopicIncludeItems : (req, res) => {

    },

    createTopicIncludeItem : (req, res) => {

    },

    updateTopicIncludeItem : (req, res) => {

    },

    deleteTopicIncludeItem : (req, res) => {

    },
};