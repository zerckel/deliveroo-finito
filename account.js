import React, {Component} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Container} from 'native-base';
import {SharedElement} from "react-navigation-shared-element";


class account extends Component {
  constructor(props) {
    super(props);
  }

  static sharedElements = (navigation, otherNavigation, showing) => {
    return [{id: navigation.getParam("id"), animation: 'move', resize: 'stretch'}];
  };

  render() {
    return (
            <Container>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View>
                  <SharedElement id={this.props.navigation.getParam("id")}>
                    <Image style={{width: Dimensions.get('window').width, height: 257}} resizeMode="contain"
                           source={{uri: this.props.navigation.getParam("url")}}/>
                  </SharedElement>
                </View>
                <View>

                </View>
              </View>

            </Container>
    );
  }
}

export default account;
