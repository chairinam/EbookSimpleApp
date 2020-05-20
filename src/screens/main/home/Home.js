import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import Carousel from '../../../component/home/Carousel';
import FictionBook from '../../book/FictionBook';
import HisFictionBook from '../../book/HisFictionBook';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.view}>
            <Text style={styles.title}>What book you want to read?</Text>

            <View style={{height: 310, marginVertical: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Carousel
                  imageUri={require('../../../assets/ebook_disc.png')} screen= {() => this.props.navigation.navigate(FictionBook)}
                />
                <Carousel
                  imageUri={require('../../../assets/ebook_bestseller.png')} screen= {() => this.props.navigation.navigate(FictionBook)}
                />
              </ScrollView>
            </View>

            <Text style={styles.title}>Discover</Text>

            <View style={{flex: 1, marginVertical: 5}}>
              <FictionBook />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});
