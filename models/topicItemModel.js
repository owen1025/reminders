'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    getItems : topicId => {
        return knexHelper
            .select('TI.itemId AS id', 'TI.name', 'TI.status', 'TI.created_at', 'TI.remind_at')
            .from('TOPICS AS T')
            .innerJoin('TOPIC_ITEMS AS TI', 'T.topicId', '=', 'TI.topicId')
            .where('T.topicId', '=', Number(topicId))
            .andWhere('T.status', '!=', 'deleted')
            .andWhere('TI.status', '!=', 'deleted')
            .orderBy('TI.remind_at', 'DESC');
    },
};