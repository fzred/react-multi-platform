import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../../components/Layout'
import Pager from '../../../components/Pager'
import s from './Result.css'

@connect(state => ({
  category: state.category,
}))
@withStyles(s)
class Result extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.array,
    query: PropTypes.object.isRequired,
  }

  searchPro({ startNum }) {

  }

  render() {
    const model = []
    return (
      <Layout>
        <div className={s.root}>
          11{JSON.stringify(this.props.query)}2
          {/*<Pager onLoad={this.searchPro} model={model}>*/}
            {/*<ul>*/}
              {/*<li>123123</li>*/}
            {/*</ul>*/}
          {/*</Pager>*/}
        </div>
      </Layout>
    )
  }

}

export default Result
