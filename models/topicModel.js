'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    getTopics : () => {
        return knexHelper
            .select('topicId AS id', 'name', 'created_at')
            .from('TOPICS')
            .where('status', '!=', 'deleted')
    },

    createTopic : topicData => {
        const { name } = topicData;

        return knexHelper('TOPICS')
            .insert({ name });
    },

    // updateTopic : (topicId, topicData) => {
    //     const id = topicId;
    //     const name = { topicData };

    //     return knexHelper('TOPIC')
    //         .where({ id })
    //         .update({ name });
    // },

    // deleteTopic : topicId => {
    //     const id = topicId;

    //     return knexHelper('TOPIC')
    //         .where({ id })
    //         .update({ state : 'deleted' })
    // }
};