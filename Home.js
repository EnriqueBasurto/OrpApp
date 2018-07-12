import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Home extends Component {
  state = { animating: true };

  closeActivityIndicator = ()=> {
    setTimeout(() =>this.setState({animating: false }), 6000);
    this.props.navigation.navigate('GetData');
  };

  componentDidMount = ()=> this.closeActivityIndicator();

  render() {
    const animating = this.state.animating;
    return (
      <View style = {styles.container}>
        <ActivityIndicator
          animating = {animating}
          color = '#bc2b78'
          size = "large"
          style = {styles.activityIndicator}/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
