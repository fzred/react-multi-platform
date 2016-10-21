import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { fetchHomeHeadPageData } from '../../../../common/actions'
import { color as styleColor } from '../../../styleVar'
import Type1 from './components/Type1'
import Type2 from './components/Type2'
import Type10 from './components/Type10'
import Type14 from './components/Type14'

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: styleColor.C10,
  },
})


function renderMudule(item, i) {
  switch (item.mtype) {
    case 1:
      return <Type1 key={i} item={item} />
    case 2:
      return <Type2 key={i} item={item} />
    case 10:
      return <Type10 key={i} item={item} />
    case 14:
      return <Type14 key={i} item={item} />
    default:
      return null
  }
}

class Home extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    homeList: PropTypes.object,
  }

  componentWillMount() {
    if (this.props.homeList.list.length === 0) {
      this.props.dispatch(fetchHomeHeadPageData())
    }
  }

  render() {
    const { homeList } = this.props
    return (
      <ScrollView style={styles.wrap}>
        <View>
          <Text>{JSON.stringify(homeList)}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  homeList: state.home,
}))(Home)
