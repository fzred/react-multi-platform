import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classNames from 'classnames/bind'
import Layout from '../../components/Layout'
import FootNav from '../../components/FootNav'
import s from './Search.css'

const cx = classNames.bind(s)

@connect(state => ({
  category: state.category,
}))
@withStyles(s)
class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.array,
  }

  constructor() {
    super()
    this.state = {
      curCategory: null,
    }
    this.footHtml = (
      <div>
        <FootNav active="search" />
      </div>
    )
  }

  componentWillMount() {
    const { category } = this.props
    this.setState({
      curCategory: category[0],
    })
  }

  switchCategory(cate) {
    console.log(this, cate)
  }

  render() {
    const { category } = this.props
    const { curCategory } = this.state
    const subCategory = curCategory.sublevel
    const footHtml = this.footHtml
    return (
      <Layout layer={footHtml}>
        <div className={s.root}>
          <div className={`flex ${s.categoryWarp}`}>
            <ul className={s.category1}>
              {
                category.map(item => (
                  <li
                    key={item.cid}
                    className={cx({
                      cateogryActive: item === curCategory,
                    })}
                    onClick={() => this.switchCategory(item)}
                  >
                    <div className={s.cname}><span>{item.categName}</span></div>
                    <img src="imgs/bg_classification1.png" alt={''} className={s.choose} />
                  </li>
                ))
              }
            </ul>
            <div className={s.category2}>
              {JSON.stringify(subCategory)}
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}

export default Search
