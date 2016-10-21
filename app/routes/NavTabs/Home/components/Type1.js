import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'

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

function Type1({ item }) {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay
      height={imgHeight}
    >
      {
        item.list.map((val, i) => (
          <Image
            source={{ uri: val.acturl }}
            style={styles.img}
            key={i}
          />)
        )
      }
    </Swiper>
  )
}

Type1.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Type1
