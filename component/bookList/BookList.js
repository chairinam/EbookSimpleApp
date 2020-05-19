import React, {Component} from 'react';
import {View, Button, StyleSheet, Text, Image, Alert} from 'react-native';

import Library from '../../screens/main/library/Library';

export default class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Image
          source={require('../../assets/ebook_book.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.author}>{this.props.data.author}</Text>
        <Text style={styles.year}>{this.props.data.year}</Text>
        <Button
          title="Add to Chart"
          color="#2660ff"
          onPress={() => {
            Alert.alert('Success added to Chart');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  author: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  year: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15,
  },
  view: {
    backgroundColor: '#ffb521',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 4,
    margin: 10,
    width: 160,
    height: 300,
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    height: 87,
    width: 100,
  },
});
