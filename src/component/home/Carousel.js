import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class Carousel extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: 'white',
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 10,
        }}>
        <TouchableOpacity onPress={this.props.screen}>
          <Image
            source={this.props.imageUri}
            style={{width: 287, height: 300, resizeMode: 'stretch'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
