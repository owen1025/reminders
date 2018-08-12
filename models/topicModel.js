'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    getTopics : () => {
        return knexHelper
            .select('topicId AS id', 'name', 'created_at')
            .from('TOPICS')
            .where('status', '!=', 'deleted')
            .orderBy('created_at', 'DESC');
    },

    createTopic : topicData => {
        const { name } = topicData;

        return knexHelper('TOPICS')
            .insert({ name });
    },

    updateTopic : (topicId, topicData) => {
        const { name } = topicData;

        return knexHelper('TOPICS')
            .where({ topicId })
            .update({ name });
    },

    deleteTopic : topicId => {
        return knexHelper('TOPICS')
            .where({ topicId })
            .update({ status : 'deleted' })
    }
};