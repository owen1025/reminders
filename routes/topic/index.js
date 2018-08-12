'use strict';

const express = require('express');
const router = express.Router();

const topicController = require('./topicCtrl');

/**
 * @url BASE_URL/topic
 * @type GET
 * @return {array[json]} [topics]
 * @description Topic 목록 반환
 */
router.get('/', topicController.getTopics);
/**
 * @url BASE_URL/topic/:topic_id
 * @type GET
 * @param {integer} [topic_id]
 * @return {array[json]} [items]
 * @description Topic의 모든 Item 목록
 */
router.get('/:topic_id(\\d+)/item', topicController.getTopicIncludeItems);

/**
 * @url BASE_URL/topic
 * @type POST
 * @description Topic 만들기
 */
router.post('/', topicController.createTopic);
/**
 * @url BASE_URL/topic/:topic_id/item
 * @type POST
 * @param {integer} [topic_id]
 * @description Topic Item 추가
 */
router.post('/:topic_id(\\d+)/item', topicController.createTopicIncludeItem);

/**
 * @url BASE_URL/topic/:topic_id
 * @type PATCH
 * @param {integer} [topic_id]
 * @description Topic 수정
 */
router.patch('/:topic_id(\\d+)', topicController.updateTopic);
/**
 * @url BASE_URL/topic/:topic_id/item/:item_id
 * @type PATCH
 * @param {integer} [topic_id]
 * @param {integer} [item_id]
 * @description Topic Item 업데이트
 */
router.patch('/:topic_id(\\d+)/item/:item_id(\\d+)', topicController.updateTopicIncludeItem);

/**
 * @url BASE_URL/topic/:topic_id
 * @type DELETE
 * @param {integer} [topic_id]
 * @description Topic 삭제
 */
router.delete('/:topic_id(\\d+)', topicController.deleteTopic);
/**
 * @url BASE_URL/topic/:topic_id/item/:item_id
 * @type DELETE
 * @param {integer} [topic_id]
 * @param {integer} [item_id]
 * @description Topic Item 삭제
 */
router.delete('/:topic_id(\\d+)/item/:item_id(\\d+)', topicController.deleteTopicIncludeItem);

module.exports = router;