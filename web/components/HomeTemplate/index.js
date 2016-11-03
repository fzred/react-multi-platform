import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import px2rem from '../../common/px2rem'
import BannerList from './components/BannerList'
import HorizontalTwoAct from './components/HorizontalTwoAct'
import ProductListRows from './components/ProductListRows'

function renderMudule(item, i) {
  switch (item.styleCode) {
    case 'banner_list':
      return <BannerList key={i} item={item} />
    case 'horizontal_two_act':
      return <HorizontalTwoAct key={i} item={item} />
    case 'product_list_rows':
      return <ProductListRows key={i} item={item} />
    default:
      return null
  }
}

function HomeTemplate({ template }) {
  return (
    <div>
      {template.list.map((item, i) => (
        <section
          style={{ marginBottom: `${px2rem(item.margin)}rem` }}
          stylecode={item.styleCode}
        >
          {renderMudule(item, i)}
        </section>
      ))}
    </div>
  )
}

HomeTemplate.propTypes = {
  template: PropTypes.object.isRequired,
}

return HomeTemplate
