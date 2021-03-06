import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classNames from 'classnames/bind'
import Layout from '../../components/Layout'
import FootNav from '../../components/FootNav'
import Link from '../../components/Link'
import s from './Search.css'
import { getCategory2Level } from '../../../common/actions/category'
import bgClassification1 from './img/bg_classification1.png'

const cx = classNames.bind(s)

@connect(state => ({
  category: state.category,
}))
@withStyles(s)
class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.object,
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
    this.setState({
      curCategoryIndex: 0,
    })
  }

  switchCategory(index) {
    const cate = this.props.category.list[index]
    if (!cate.sublevel) {
      this.props.dispatch(getCategory2Level({ categId: cate.cid }))
    }
    this.setState({
      curCategoryIndex: index,
    })
  }

  render() {
    const category = this.props.category.list
    const curCategory = category[this.state.curCategoryIndex]
    const subCategory = curCategory.sublevel || []
    const footHtml = this.footHtml
    return (
      <Layout layer={footHtml}>
        <div className={s.root}>
          <div className={`flex ${s.categoryWarp}`}>
            <ul className={s.category1}>
              {
                category.map((item, i) => (
                  <li
                    key={item.cid}
                    className={cx({
                      cateogryActive: item.cid === curCategory.cid,
                    })}
                    onClick={() => this.switchCategory(i)}
                  >
                    <div className={s.cname}><span>{item.categName}</span></div>
                    <img src={bgClassification1} alt={''} className={s.choose} />
                  </li>
                ))
              }
            </ul>
            <div className={s.category2}>
              <ul className={s.subCategory}>
                {
                  subCategory.map((value, i) => (
                    <li key={i}>
                      <Link
                        to={{
                          name: 'searchResult',
                          query: {
                            categId: value.parentCategId,
                            secondCategId: value.scid,
                          },
                        }}
                      >
                        <img src={value.logourl} alt={value.categName} />
                        <p>{value.categName}</p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}

export default Search
