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

export default class extends Component {
  render() {
    return (
      <View>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Image source={{ uri: this.props.item.list[0].logourl3 }}
                   style={styles.topLeftImg}/>
          </View>
          <View style={styles.topRight}>
            <View style={[styles.topRightImg1]}>
              <Image source={{ uri: this.props.item.list[1].logourl3 }}
                     style={[styles.topRightImg]}/>
            </View>
            <Image source={{ uri: this.props.item.list[2].logourl3 }}
                   style={styles.topRightImg}/>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomImgWrap}>
            <Image source={{ uri: this.props.item.list[3].logourl3 }}
                   style={styles.bottomImg}/>
          </View>
          <View style={styles.bottomImgWrap}>
            <Image source={{ uri: this.props.item.list[4].logourl3 }}
                   style={styles.bottomImg}/>
          </View>
          <View style={styles.bottomImgWrap}>
            <Image source={{ uri: this.props.item.list[5].logourl3 }}
                   style={styles.bottomImg}/>
          </View>
          <View style={styles.bottomImgWrap}>
            <Image source={{ uri: this.props.item.list[6].logourl3 }}
                   style={styles.bottomImg}/>
          </View>
          <View style={styles.bottomImgWrap}>
            <Image source={{ uri: this.props.item.list[7].logourl3 }}
                   style={styles.bottomImg}/>
          </View>
        </View>
      </View>
    )
  }
}

const width = Dimensions.get('window').width
const borderWidth = 1 / PixelRatio.get()
const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    borderBottomWidth: borderWidth,
    borderColor: styleColor.C8,
  },
  topLeft: {
    width: width * 2 / 5,
    height: width * 2 / 5,
    borderRightWidth: borderWidth,
    borderColor: styleColor.C8
  },
  topLeftImg: {
    width: width * 2 / 5 - 1,
    height: width * 2 / 5,
  },
  topRight: {
    height: width * 2 / 5,
    flex: 1,
    borderBottomColor: '#ff0000',
  },
  topRightImg1: {
    borderBottomWidth: borderWidth,
    borderColor: styleColor.C8,
  },
  topRightImg: {
    width: width * 3 / 5,
    height: width * 1 / 5,
  },

  bottom: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: borderWidth,
    borderColor: styleColor.C8,
  },
  bottomImgWrap: {
    flex: 1,
    borderRightWidth: borderWidth,
    borderColor: styleColor.C8,
    padding: 10,
  },
  bottomImg: {
    width: width * 1 / 5 - borderWidth - 20,
    height: width * 1 / 5 - 20,
  },
})
