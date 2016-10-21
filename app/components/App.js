import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

const ContextType = {
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

class App extends React.Component {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context
  }

  render() {
    const store = this.props.context.store
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return (
      <Provider store={store}>
        {React.Children.only(this.props.children)}
      </Provider>
    )
  }

}

export default App
