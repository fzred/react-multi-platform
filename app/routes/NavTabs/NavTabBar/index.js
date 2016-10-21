import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { color as styleColor } from '../../../styleVar'

/* eslint-disable global-require */
const tabs = [
  {
    name: '首页',
    img: [require('../../../../common/img/footicon/bt_com_menu_home_default.png'),
      require('../../../../common/img/footicon/bt_com_menu_home_active.png')],
  },
  {
    name: '分类',
    img: [require('../../../../common/img/footicon/bt_com_menu_category_default.png'),
      require('../../../../common/img/footicon/bt_com_menu_category_active.png')],
  },
  {
    name: '活动',
    img: [require('../../../../common/img/footicon/bt_com_menu_event_default.png'),
      require('../../../../common/img/footicon/bt_com_menu_event_active.png')],
  },
  {
    name: '购物车',
    img: [require('../../../../common/img/footicon/bt_com_menu_cart_default.png'),
      require('../../../../common/img/footicon/bt_com_menu_cart_active.png')],
  },
  {
    name: '我的',
    img: [require('../../../../common/img/footicon/bt_com_menu_user_default.png'),
      require('../../../../common/img/footicon/bt_com_menu_user_active.png')],
  },
]
/* eslint-enable global-require */

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: styleColor.C8,
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default class extends Component {
  static propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合

    tabNames: PropTypes.array, // 保存Tab名称
    tabIconNames: PropTypes.array, // 保存Tab图标
  }

  // setAnimationValue({ value }) {
  //   console.log(value)
  // }
  //
  // componentDidMount() {
  //   // Animated.Value监听范围 [0, tab数量-1]
  //   this.props.scrollValue.addListener(this.setAnimationValue)
  // }

  renderTabOption(tab, i) {
    let color = '#000000'
    let imgSrc = tab.img[0]
    if (this.props.activeTab === i) { // 判断i是否是当前选中的tab
      color = styleColor.C1
      imgSrc = tab.img[1]
    }
    return (
      <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
        <View style={styles.tabItem}>
          <Image
            style={{ width: 33, height: 33 }}
            source={imgSrc}
          />
          <Text style={{ color }}>
            {tab.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.tabs}>
        {tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    )
  }
}
