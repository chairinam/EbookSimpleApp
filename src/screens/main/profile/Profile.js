import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Modal,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      inputText: 'Chairina Marsya',
      inputID: '123456',
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
  }

  handleChangeText(newText) {
    this.setState({
      inputText: newText,
    });
  }

  handleChangeID(newID) {
    this.setState({
      inputID: newID,
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.view}>
          <Image
            source={require('../../../assets/ebook_profile.png')}
            style={styles.logo}
          />
          <Text style={styles.name}>{this.state.inputText}</Text>
          <Text style={styles.id}>{this.state.inputID}</Text>
          <Button
            title="Edit Profile"
            onPress={() => {
              this.setState({isModalVisible: true});
            }}
          />
          <Modal
            animationType="fade"
            visible={this.state.isModalVisible}
            transparent={true}>
            <SafeAreaView style={styles.modal1}>
              <View style={styles.modal2}>
                <Text style={styles.modal3}>Edit Profile</Text>
                <View style = {styles.modal4}>
                  <Text style={styles.modal5}>Username:</Text>
                  <TextInput
                    style={styles.modal6}
                    placeholder="e.g John"
                    onChangeText={this.handleChangeText}
                    keyboardType="default"
                  />
                </View>

                <View style = {styles.modal4}>
                  <Text style={styles.modal5}>AccountID:</Text>
                  <TextInput
                  style={styles.modal6}
                  placeholder="e.g 1234"
                  onChangeText={this.handleChangeID}
                  keyboardType="numeric"
                  />
                </View>
                
                <Button
                  title="Save"
                  onPress={() => {
                    this.setState({isModalVisible: false});
                  }}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00d46d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  logo: {
    height: 85,
    width: 85,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
  },
  modal1:{
    flex:1,
    backgroundColor:'#000000aa',
    justifyContent:'center'
  },
  modal2:{
    alignSelf:'center',
    justifyContent:'center',
    width:300,
    height:270,
    backgroundColor:'white',
    borderRadius:20
  },
  modal3:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10
  },
  modal4:{
    flexDirection:'row',
    padding:20
  },
  modal5:{
    paddingRight:10
  },
  modal6:{
    width:180,
    borderBottomWidth:1.5,
    borderBottomColor:'black'
  }
});
