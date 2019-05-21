import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { initializeStore } from "./ReduxStore/initializeStore";
import { Provider } from "react-redux";
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoadingComplete: false,
    };
    // this._loadResourcesAsync.then(this.setState({ isLoadingComplete: true }));
  }

  componentDidMount() {
    this.store = initializeStore();
    this._loadResourcesAsync().then(this.setState({ isLoadingComplete: true }));
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <View>
          <Text>Loading....</Text>
        </View>
        // <AppLoading
        //   startAsync={this._loadResourcesAsync}
        //   onError={this._handleLoadingError}
        //   onFinish={this._handleFinishLoading}
        // />
      );
    } else {
      return (
        <Provider store={this.store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
            <Text>This is america</Text>
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
