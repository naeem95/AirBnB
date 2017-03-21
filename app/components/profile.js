/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const list = [
    {
        "id": 1,
        "title": "Invite friends",
        "icon": "present",
    }, 
    {
        "id": 2,
        "title": "Settings",
        "icon": "settings",
    }, 
    {
        "id": 3,
        "title": "Help & support",
        "icon": "support",
    }, 
    {
        "id": 4,
        "title": "Why host",
        "icon": "heart",
    }, 
    {
        "id": 5,
        "title": "Become a host",
        "icon": "home",
    }, 
    {
        "id": 6,
        "title": "Give us feedback",
        "icon": "feed",
    }, 
];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Profile extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')

    this.state = {
      dataSource: ds.cloneWithRows(list)
    }
  }
    componentDidMount(){
    this.props.close();
  }

  renderRow(item){
    return(
        <TouchableOpacity>
        <View style={{ 
            flex: 1, 
            flexDirection: "row", 
            justifyContent:"space-between",
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderBottomColor: "#f5f5f5",
            borderBottomWidth: 1,
            minHeight: 25,
            }}>
            <Text style={{flex: 1, fontSize: 18, fontFamily: "Helvetica Neue"}}>
                {item.title}
            </Text>
            <Icon name={item.icon} size={18} />
        </View>
        </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={{
            //flex: 1,
            paddingVertical:10,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }} >Han</Text>
                <Text style={{color: "#8D8D8D"}}> View and edit profile </Text>
            </View>
            <Image source={{uri: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/11954751_10204811667955065_6047555687880575228_n.jpg?oh=40ff5265e3513c6529a83e2c78589727&oe=596B30D9"}} style={{ 
                width: 50, 
                height: 50, 
                borderRadius: 25,
                }}/>
        </View>

      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

