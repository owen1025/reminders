'use strict';

const knexHelper = require('../helpers/knexHelper').get();

const _findTopicFunc = topicId => {
    return knexHelper
        .from('TOPICS')
        .where({ topicId })
        .first();
}

module.exports = {
    getTopics : () => {
        return knexHelper
            .select('topicId AS id', 'name', 'created_at')
            .from('TOPICS')
            .where('status', '!=', 'deleted')
            .orderBy('created_at', 'DESC');
    },

    createTopic : async topicData => {
        try {
            const { name } = topicData;

            const createdTopicId = await knexHelper('TOPICS')
                .insert({ name });
            
            return _findTopicFunc(createdTopicId[0]);
        } catch(error) {
            throw error;
        }
    },

    updateTopic : async (topicId, topicData) => {
        try {
            const { name } = topicData;

            await knexHelper('TOPICS')
                .where({ topicId })
                .update({ name });
            
            return _findTopicFunc(topicId);
        } catch(error) {
            throw error;
        }
    },

    deleteTopic : topicId => {
        return knexHelper('TOPICS')
            .where({ topicId })
            .update({ status : 'deleted' })
    }
};