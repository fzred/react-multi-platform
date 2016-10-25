import React, {
  View,
  PropTypes,
} from 'react-native'
import UniversalRouter from '../../common/universalRouter'
import routesConfig from '../routes'

class PageContainer extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  static contextTypes = {
    nav: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.doMatch(this.props)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.path !== this.props.path) {
      this.doMatch(newProps)
    }
  }

  async doMatch(props) {
    const { path } = props
    try {
      const route = UniversalRouter.resolve(routesConfig, {
        path,
        store: this.context.store,
      })
      this.setState({ route })
    } catch (err) {
      if (err.status === 301) {
        this.context.nav.replace({ path: err.path || '/' })
        return
      }
      if (process.env.NODE_ENV !== 'production') {
        throw err
      }

      if (!__DEV__) {
        throw err
      }

      console.error(err) // eslint-disable-line no-console
    }
  }

  render() {
    if (!this.state.route) {
      return <View />
    }
    return this.state.route.component
  }
}

export default PageContainer
