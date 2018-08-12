'use strict';

module.exports = {
    bodyCheck : (checkRule, checkData) => {
        for (let key in checkData) {
            if (typeof(checkData[key]) != checkRule[key]) {
                throw {
                    statusCode  : 406,
                    message     : '함수 인자가 유효하지 않음',
                };
                break;
            }
        }
    },
};