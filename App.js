import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : "tb_popular"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            title="最热"
            selectedTitleStyle={{color:"red"}}
            renderIcon={() => <Image style={styles.image}  source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/ic_trending.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}>
              <Boy></Boy>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            selectedTitleStyle={{color:"yellow"}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_unstar_navbar.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"yellow"}]} source={require('./res/images/ic_unstar_navbar.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            selectedTitleStyle={{color:"red"}}
            renderIcon={() => <Image style={styles.image}  source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/ic_trending.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{color:"yellow"}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_unstar_navbar.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"yellow"}]} source={require('./res/images/ic_unstar_navbar.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:"red"
  },
  page2:{
    flex:1,
    backgroundColor:"yellow"
  },
  image:{
    height:22,
    width:22
  }
});
