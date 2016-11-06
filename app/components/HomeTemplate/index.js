import React, { PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import BannerList from './components/BannerList'


function renderModule(item) {
  switch (item.styleCode) {
    case 'banner_list':
      return <BannerList item={item} />
    // case 'horizontal_two_act':
    //   return <HorizontalTwoAct item={item} />
    // case 'product_list_rows':
    //   return <ProductListRows item={item} />
    default:
      return null
  }
}

function HomeTemplate({ template }) {
  return (
    <View style={{ flex: 1 }}>
      {template.list.map((item, i) => (
        <View style={{ flex: 1 }} key={i}>
          {renderModule(item)}
        </View>
      ))}
    </View>
  )
}

HomeTemplate.propTypes = {
  template: PropTypes.object.isRequired,
}

export default HomeTemplate
