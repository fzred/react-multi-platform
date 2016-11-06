import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native'
import Swiper from 'react-native-swiper'

const width = Dimensions.get('window').width
const imgHeight = width * 0.64
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  img: {
    flex: width,
    height: imgHeight,
  },
})

function BannerList({ item }) {
  return (
    <Swiper
      showsButtons
      autoplay
      height={imgHeight}
    >
      {
        item.list.map((img, i) => (
            <View key={i} style={styles.slide}>
              <Image
                source={{ uri: img.bannerImg }}
                style={styles.img}
              />
            </View>
          )
        )
      }
    </Swiper>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BannerList
