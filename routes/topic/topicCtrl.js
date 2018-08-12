'use strict';

const createError = require('http-errors');
const topicModel = require('../../models/topicModel');

module.exports = {
    getTopics : async (req, res, next) => {
        try {
            const topics = await topicModel.getTopics();

            res
                .status(200)
                .json({ topics });
        } catch(error) {
            next(createError(error));
        }
    },

    createTopic : async (req, res, next) => {
        try {
            const { item } = req.body;

            await topicModel.createTopic(item);

            res
                .sendStatus(201);
        } catch(error) {
            console.log(error);
        }
    },

    updateTopic : (req, res) => {

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