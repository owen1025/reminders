# reminders

## Project spec
- node.js
- Express
- knexjs
- mysql

## Project structure

- helpers
    - knexHelper.js : knexjs wrapper
    - validationHelper.js : REST(POST, PATCH, DELETE) 요청 시 body data가 정상적인 지 확인, 원래는 controller 단에 middleware 형태로 작성하려 했으나 시간이 부족하여 controller 로직단에서 체크 진행
- models
    - topicModel.js : 테이블 `TOPICS` 관련 비즈니스 로직 코드 정리
    - topicItemModel.js : 테이블 `TOPIC_ITEMS` 관련 비즈니스 로직 코드 정리
- routes
    - topic
        - index.js
            - BASE_URL/topic 관련 routing 정리
        - topicCtrl.js
            - BASE_URL/topic 관련 controller 로직 정리

## Initialize
```bash
    mysql -u {mysql-user-id} -p {database-name} < reminder.sql
    # 이후 package.json에 명시된 database info 수정 필요(id/password)
```

## Start!

```bash
    git clone https://github.com/owen1025/reminders.git
    cd reminders
    npm install
    npm start
```
## API docs

- GET http://localhost:8080/topic Topic 목록
- POST http://localhost:8080/topic Topic 만들기
- PATCH http://localhost:8080/topic/:topic_id Topic 수정
- DELETE http://localhost:8080/topic/:topic_id Topic 삭제
- GET http://localhost:8080/topic/:topic_id/item Topic의 모든 Item 목록
- POST http://localhost:8080/topic/:topic_id/item Topic Item 추가
- PATCH http://localhost:8080/topic/:topic_id/item/:item_id Topic Item 업데이트
- DELETE http://localhost:8080/topic/:topic_id/item/:item_id Topic Item 삭제