import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import BookList from './BookList';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => <BookList data={item} />}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
  },
});
