import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Text} from 'react-native';

import FictionBook from '../../book/FictionBook';
import HisFictionBook from '../../book/HisFictionBook';
import FictionAxios from '../../book/FictionAxios';

export default class Category extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.to}
          onPress={() => this.props.navigation.navigate(FictionBook)}>
          <Text style={styles.text}>Fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => this.props.navigation.navigate(HisFictionBook)}>
          <Text style={styles.text}>Historical Fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={() => this.props.navigation.navigate(FictionAxios)}>
          <Text style={styles.text}>Thriller</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  to: {
    margin: 10,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#ffefd5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
