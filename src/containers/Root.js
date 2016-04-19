import React, { Component, PropTypes, View, Navigator, Text} from 'react-native'
import { Provider } from 'react-redux'
import { App } from './App'


export default class Root extends React.Component {
  render() {
    const { store } = this.props
    return (
		<View>
			  <Navigator
			    initialRoute={{name: 'My First Scene', index: 0, component: App}}
          renderScene={ ( route, navigator ) => {
            
            var Component = route.component
            // return (
            //   <View>
            //     <Component navigator={navigator} route={route} />
            //   </View>
            // )
          }}
			  />
		</View>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
