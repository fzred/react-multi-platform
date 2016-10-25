import React, {
  View,
  PropTypes,
} from 'react-native'
import UniversalRouter from '../../common/universalRouter'
import routes from '../routes'

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
    try {
      const route = UniversalRouter.resolve(routes, {
        path: props.path,
        store: this.context.store,
        redirect(to) {
          const error = new Error(`Redirecting to "${to}"...`)
          error.status = 301
          error.path = to
          throw error
        },
      })

      this.setState({ route })
    } catch (err) {
      if (err.status === 301) {
        this.context.nav.replace({ path: err.path || '/' })
        return
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
