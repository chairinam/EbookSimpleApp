import React, {Component} from 'react';
//import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import CounterApp from './CounterApp';

const initialState = {
  counter: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);

export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
