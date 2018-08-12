'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    getItems : topicId => {
        return knexHelper
            .select('TI.itemId AS id', 'TI.name', 'TI.status', 'TI.created_at', 'TI.remind_at')
            .from('TOPICS AS T')
            .innerJoin('TOPIC_ITEMS AS TI', 'T.topicId', '=', 'TI.topicId')
            .where('T.topicId', '=', topicId)
            .andWhere('T.status', '!=', 'deleted')
            .andWhere('TI.status', '!=', 'deleted')
            .orderBy('TI.remind_at', 'DESC');
    },

    createItem : async (topicId, topicItemData) => {
        topicItemData['topicId'] = topicId;

        try {
            const topicFindFlag = await knexHelper
                .from('TOPICS')
                .where({ topicId })
                .andWhere('status', '!=', 'deleted')
                .first();
            
            if (!topicFindFlag) {
                throw {
                    statusCode  : 400,
                    message     : '해당 Topic을 찾을 수 없습니다.'
                };
            }

            return knexHelper('TOPIC_ITEMS')
                .insert(topicItemData);   
        } catch(error) {
            throw error;
        }
    }
};