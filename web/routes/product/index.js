import React from 'react'

export default {

  path: '/product/:itemCode',

  name: 'productDetail',

  action(context, { itemCode }) {
    return {
      title: `商品详情：${itemCode}`,
      component: (
        <div>{itemCode}</div>
      ),
    }
  },

}
