import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Button, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import Counter from '../../../component/counter/Index';

export default class Library extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.view}>
              <Image
                source={require('../../../assets/ebook_book.png')}
                style={styles.logo}
              />
              <Text style={styles.title}>The Testaments</Text>
              <Text style={styles.author}>Margaret Atwood</Text>
              <Counter />
              <Button
                title="Confirm"
                color="#2660ff"
                onPress={() => {
                  Alert.alert('Success!');
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: '#ff75a8',
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  author: {
    fontSize: 12,
    paddingLeft: 5,
  },
  logo: {
    height: 85,
    width: 85,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
  },
});
