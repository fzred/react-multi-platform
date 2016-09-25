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
import Swiper from 'react-native-swiper'

export default class extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
              showsButtons={false}
              autoplay={true}
              height={imgHeight}>
        {
          this.props.item.list.map((item, i) => {
            return (<Image source={{ uri: item.acturl }}
                           style={styles.img}
                           key={i}/>)
          })
        }
      </Swiper>
    )
  }
}

const width = Dimensions.get('window').width
const imgHeight = width * 0.64
const styles = StyleSheet.create({
  wrapper: {
    height: imgHeight,
    flexDirection: 'column',
  },
  img: {
    flex: width,
    height: imgHeight,
  },
})
