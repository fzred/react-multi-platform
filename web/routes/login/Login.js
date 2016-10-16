import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import s from './Login.css'
import { login } from '../../../common/actions/user'
import cookie from '../../common/cookie'
import { SID } from '../../common/vars'

class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.submitHandle = this.submitHandle.bind(this)
    this.state = {
      phone: '18576762101',
      pwd: '123456',
    }
  }

  async login() {
    const { code, data, desc } = await this.props.dispatch(login({
      phone: this.state.phone,
      pwd: this.state.pwd,
    }))
    if (code === 1000) {
      cookie.set(SID, data.sid, {
        path: '/',
        expires: 30,
      })
      console.log(code, data, desc)
    }
  }

  submitHandle(e) {
    e.preventDefault()
    this.login()
  }

  render() {
    return (
      <Layout>
        <div className={s.root}>
          <form onSubmit={this.submitHandle}>
            <input
              type="text"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
              placeholder="请输入手机号码"
            />
            <input
              type="password"
              value={this.state.pwd}
              onChange={e => this.setState({ pwd: e.target.value })}
              placeholder="请输入密码"
            />
            <input type="submit" />
          </form>
          <div>
            用户名:{this.state.phone}<br />
            密码:{this.state.pwd}
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect()(withStyles(s)(Login))
