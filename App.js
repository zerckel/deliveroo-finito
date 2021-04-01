import React, {Component} from 'react';
import {TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import pageRestaurant from './resto';
import deliveroo from './deliveroo';
import account from './account'

const AppNavigator = createSharedElementStackNavigator({
  home: deliveroo,
  resto: pageRestaurant,
  account: account
}, {
  initialRouteName: 'home',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  }
});
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

export default App;
