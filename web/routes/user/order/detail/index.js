import React from 'react'

export default {

  path: '/detail/:orderId',

  name: 'orderDetail',

  action(context, { orderId }) {
    return {
      title: `订单详情：${orderId}`,
      component: (
        <div>{orderId}</div>
      ),
    }
  },

}
