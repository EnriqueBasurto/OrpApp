
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {loadPage} from "./Api";
import * as d3 from "d3/dist/d3";
import {Group, Shape, Surface} from "react-native/Libraries/ART/ReactNativeART";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  constructor(){
    super();
    this.login = this.login.bind(this);

    this.state={
      channel:"",
    };
  }

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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

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

      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
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
