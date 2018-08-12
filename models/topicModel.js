'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    getTopics : () => {
        return knexHelper
            .select('topicId AS id', 'name', 'created_at')
            .from('TOPICS')
            .where('status', '!=', 'deleted')
    },
};