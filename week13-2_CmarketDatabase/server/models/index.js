const db = require('../db');

module.exports = {
  orders: {
    get: (userId, callback) => {
      // console.log(userId) // 1
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      // expect(data[0].id).to.equal(1);
      // expect(data[0].image).to.equal('../images/egg.png');
      // expect(data[0].name).to.equal('노른자 분리기');
      // expect(data[0].order_quantity).to.equal(2);
      // expect(data[0].price).to.equal(9900);
      // expect(data[0].total_price).to.equal(79800);
      const sql = 
      `select orders.id, orders.total_price, orders.created_at, order_items.order_quantity, items.image, items.name, items.price 
      from orders
      inner join order_items on (orders.id = order_items.order_id)
      inner join items on (order_items.item_id = items.id)
      inner join users on (orders.user_id = users.id)
      where users.id = ${userId}`
      // users => orders => orders_items
      db.query(sql, (err, result) => {
        // console.log(result)
        callback(err, result)
      })

    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      // console.log(orders);  // [ { itemId: 1, quantity: 2 }, { itemId: 2, quantity: 5 } ]
      const sql1 = `insert into orders (user_id, total_price) values (${userId}, ${totalPrice})`;
      db.query(sql1, (err, result) => {
          const sql2 = `insert into order_items (order_id, item_id, order_quantity) values ?`
          // console.log(result)
          // OkPacket {
          //   fieldCount: 0,
          //   affectedRows: 1,
          //   insertId: 1,
          //   serverStatus: 2,
          //   warningCount: 0,
          //   message: '',
          //   protocol41: true,
          //   changedRows: 0
          // }
          const params = orders.map((el) => [
            result.insertId,
            el.itemId,
            el.quantity
          ])

          db.query(sql2, [params])
            callback(err, result)
      });
    }
  },
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const sql = `select * from items`;
      db.query(sql, (err, result) => {callback(err, result)})
    }
  }
};
