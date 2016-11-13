import React from 'react'
import Product from './Product'
import { getDetail, getGraphicDetail, getRecommendProduct, getStandard } from '../../../common/actions/product'

export default {

  path: '/product/:itemCode',

  name: 'productDetail',

  async action({ store }, { itemCode }) {
    if (!store.getState().product[itemCode]) {
      await Promise.all([
        store.dispatch(getDetail({ itemCode })),
        store.dispatch(getGraphicDetail({ itemCode })),
        store.dispatch(getRecommendProduct({ itemCode })),
        store.dispatch(getStandard({ itemCode })),
      ])
    }

    return {
      title: `商品详情：${itemCode}`,
      component: <Product itemCode={itemCode} />,
    }
  },

}
