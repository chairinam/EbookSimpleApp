import React, {Component} from 'react';
import {Image, ActivityIndicator, View, StyleSheet} from 'react-native';

import Home from '../main/home/Home';
//import FictionBook from '../book/FictionBook'

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('MyTabs', {screen: 'Home'});
      //this.props.navigation.navigate(FictionBook);
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/ebook_splash.png')}
        />
        <ActivityIndicator style={{marginTop: 40}} size="large" color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 136,
    height: 200,
  },
});
