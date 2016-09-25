import React, { Component } from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native'
import { color as styleColor } from '../../styleVar'

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  proWrap: {
    width: width / 2,
    height: width / 2,
    backgroundColor: '#ff9999',
  },
  img: {
    width: width / 2,
    height: width / 2,
  },
})

export default class extends Component {
  renderPro(item, i) {
    return (
      <View style={styles.proWrap} key={i}>
        <Image source={{ uri: item.logourl }}
          style={styles.img}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {
          this.props.item.list.productList.map(this.renderPro.bind(this))
        }
      </View>
    )
  }
}
