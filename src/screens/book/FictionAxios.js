import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Image, Text, Button} from 'react-native';
import axios from 'axios';

export default class FictionAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomData: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      const randomData = res.data;
      console.log(randomData);
      this.setState({randomData});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.randomData}
          renderItem={({item}) => {
            return (
              <View style={styles.view}>
                <Image
                  source={require('../../assets/ebook_book.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Button
                  title="Add to Chart"
                  color="#2660ff"
                  onPress={() => {
                    Alert.alert('Success added to Chart');
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  view: {
    backgroundColor: '#ffb521',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 4,
    marginVertical: 10,
    width: 400,
    height: 200,
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    height: 87,
    width: 100,
  },
});
