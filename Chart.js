
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import {loadPage} from "./Api";
import Mask from "react-native-mask";

export default class Chart extends Component {

  login(){
    let body ="CI1VOXF6NO4H4PEC";
    console.warn("asdasdasdasdasdasd");
    loadPage(body).then(response => {
      console.warn(JSON.stringify(response));
    }).catch(error => {
      console.warn(error);
    })
  }
  constructor(){
    super();
    this.login = this.login.bind(this);

    this.state={
      channel:"",
      data : [
        { number:  8,
          name: 'Fun activities'
        }
      ],
      animating: true
    }
  }


  login(){
    let body ="CI1VOXF6NO4H4PEC";
    loadPage(body).then(response => {
      console.warn(JSON.stringify(response));
      this.props.navigation.navigate('Chart');
    }).catch(error => {
      console.warn(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Cuadro</Text>
        <Mask shape={'rounded'} wash>
          <Image
            style={styles.shapeSize}
            source={{
              uri:
                'https://static.pexels.com/photos/6556/beans-coffee-hand-morning.jpg',
            }}
          />
        </Mask>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  btnLogin: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#12c461",
    height: 50,
    //borderWidth: 1,
    borderRadius: 4
  },

  inputText:{
    height: 50,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor:"#fcf9fa",
    padding: 15
  },
});
