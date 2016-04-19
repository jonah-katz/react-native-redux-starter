import React, { Component, PropTypes,View, Text } from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Im in app.js!
                </Text>

            </View>
        );
    }
}
        // <Navbar
        //   isAuthenticated={isAuthenticated}
        //   dispatch={dispatch}
        // />
        // {children}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node
}

function mapStateToProps(state) {
  const { signIn } = state
  const { isAuthenticated } = signIn

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(App)

