import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../../components/Layout'
import Pager from '../../../components/Pager'
import { setSearchKey, searchPro } from '../../../../common/actions/category'
import s from './Result.css'

@connect(state => ({
  category: state.category,
}))
@withStyles(s)
class Result extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.object,
    query: PropTypes.object.isRequired,
  }

  onSearchPro = ({ startNum, pageSize }) => {
    const { category, dispatch } = this.props
    const query = { ...this.props.query }
    const queryStr = JSON.stringify(query)
    if (category.searchParamsStr !== queryStr) {
      // 搜索关键字不一样
      dispatch(setSearchKey(queryStr))
      // 重新加载
      query.startNum = 0
    } else {
      query.startNum = startNum
    }
    query.sortType = 'DATE'
    query.scope = 'ALL'
    query.pageSize = pageSize
    return dispatch(searchPro(query))
  }

  render() {
    const proList = this.props.category.proList
    return (
      <Layout>
        <div className={s.root}>
          <Pager onLoad={this.onSearchPro} model={proList}>
            <ul>
              {
                proList.list.map((item, i) => (
                  <li key={i}>
                    <img src={item.itemLogoUrl} alt={item.itemTitle} style={{ height: '200px' }} />
                    <p>{item.itemTitle}</p>
                  </li>
                ))
              }
            </ul>
          </Pager>
        </div>
      </Layout>
    )
  }

}

export default Result
