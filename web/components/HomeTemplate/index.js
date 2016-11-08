import React, { PropTypes } from 'react'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
import px2rem from '../../common/px2rem'
import BannerList from './components/BannerList'
import HorizontalTwoAct from './components/HorizontalTwoAct'
import ProductListRows from './components/ProductListRows'
import HeadCategory1 from './components/HeadCategory1'
import HeadCategory2 from './components/HeadCategory2'
import HeadCategory3 from './components/HeadCategory3'
import HorizontalSlideAct from './components/HorizontalSlideAct'

function renderMudule(item) {
  switch (item.styleCode) {
    case 'banner_list':
      return <BannerList item={item} />
    case 'horizontal_two_act':
      return <HorizontalTwoAct item={item} />
    case 'product_list_rows':
      return <ProductListRows item={item} />
    case 'head_category_1':
      return <HeadCategory1 item={item} />
    case 'head_category_2':
      return <HeadCategory2 item={item} />
    case 'head_category_3':
      return <HeadCategory3 item={item} />
    case 'horizontal_slide_act':
      return <HorizontalSlideAct item={item} />
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
          data-stylecode={item.styleCode}
          key={i}
        >
          {renderMudule(item)}
        </section>
      ))}
    </div>
  )
}

HomeTemplate.propTypes = {
  template: PropTypes.object.isRequired,
}

export default HomeTemplate
