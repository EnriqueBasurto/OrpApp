/*import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from "./Home";
import GetData from "./GetData";

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    GetData: {
      screen: GetData,
    },
  },
  {
    initialRouteName: 'GetData',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {loadPage} from "./Api";
import * as d3 from "d3/dist/d3";
import {Group, Shape, Surface} from "react-native/Libraries/ART/ReactNativeART";

export default class GetData extends Component {

  login(){
    let body ="CI1VOXF6NO4H4PEC";
    console.warn("asdasdasdasdasdasd");
    loadPage(body).then(response => {
      console.warn(JSON.stringify(response));
      const y = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 300]);

                y(50); // 320
                y(80); // 512r
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
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputBotton}>
          <Text style={{color:"#000",fontWeight:"900"}}>Channel</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => {
              this.setState({channel: text})
            }}
            autoCapitalize="none"
            placeholder="Channel"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress = {() => this.login()}>
            <View style={styles.btnLogin}>
              <Text style={{color:"#fff",fontWeight:"900"}}>Graphic</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View>
          <Surface width={200} height={100}>
            <Group x={0} y={0}>
              <Shape
                d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                stroke="#000"
                strokeWidth={1}/>
            </Group>
          </Surface>
        </View>

        <Text style={styles.text}>Washes</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputBotton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:10,
    paddingLeft:5,
  },
  btnLogin: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#12c461",
    height: 50,
    borderRadius: 4
  },

  inputText:{
    height: 50,
    width:100,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor:"#fcf9fa",
    padding: 15,
  },
});
