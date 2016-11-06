import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { getHeadPageData } from '../../../../common/actions/home'
import { color as styleColor } from '../../../styleVar'
import HomeTemplate from '../../../components/HomeTemplate/index'

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: styleColor.C10,
  },
})

class Home extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    homeList: PropTypes.object,
  }

  constructor() {
    super()
    this.onRefresh = this.onRefresh.bind(this)
    this.state = {
      isRefreshing: false,
    }
  }

  componentWillMount() {
    if (this.props.homeList.list.length === 0) {
      this.updateData()
    }
  }

  async onRefresh() {
    this.setState({ isRefreshing: true })
    await this.updateData()
    this.setState({
      isRefreshing: false,
    })
  }

  async updateData() {
    return this.props.dispatch(getHeadPageData())
  }

  render() {
    const { homeList } = this.props
    return (
      <ScrollView
        style={styles.wrap}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <View style={{ flex: 1 }}>
          <HomeTemplate template={homeList} />
          <Text>{JSON.stringify(homeList)}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  homeList: state.home,
}))(Home)
