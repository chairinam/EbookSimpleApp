import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  // increaseCounter = () =>{
  //     this.setState({counter:this.state.counter+1})
  // }

  // decreaseCounter = () =>{
  //     this.setState({counter:this.state.counter-1})
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sub}>
          <TouchableOpacity
            onPress={() => this.props.increaseCounter()}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.counter}</Text>
          <TouchableOpacity
            onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical : 10,
  },
  sub: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
