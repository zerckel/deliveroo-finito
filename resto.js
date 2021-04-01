import React, {Component} from 'react';
import {Dimensions, Image, Text, View, StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Container, Icon} from 'native-base';

class resto extends Component {

  static sharedElements = (navigation, otherNavigation, showing) => {
    return [{id: navigation.getParam("id"), animation: 'move', resize: 'stretch'}];
  }

  render() {
    return (
            <Container>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <SharedElement id={this.props.navigation.getParam("id")}>
                  <Image style={{width: Dimensions.get('window').width, height: 257}} resizeMode="contain"
                         source={{uri: this.props.navigation.getParam("url")}}/>
                </SharedElement>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingHorizontal: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 40}}>
                    McDonald's
                  </Text>
                  <Text style={{fontWeight: 'bold', paddingVertical: 5}}>
                    American - Sandwiches - Burgers
                  </Text>
                  <Text>
                    2,51km away - 129 Avenue du Maréchal Foch, -View map
                  </Text>
                  <Text>
                    McDonald's, chaîne emblématique de burger's....
                  </Text>
                  <View style={styles.notes}>
                    <Icon style={styles.star} name="star" size={20} />
                    <Icon style={styles.star} name="star" size={20} />
                    <Icon style={styles.star} name="star" size={20} />
                    <Icon style={styles.star} name="star" size={20} />
                    <Text style={styles.notesText}>
                      4.5 (50+)
                    </Text>
                  </View>
                </View>
              </View>
            </Container>
    );
  }
}

export default resto;

const styles = StyleSheet.create({
  notes: {
    flexDirection: 'row',
    fontSize: 12,
    alignItems: 'center',
  },
  star: {
    color: "#E9D758"
  },
  notesText: {
    marginLeft: 5,
  }
})
