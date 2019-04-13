
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
 
export default class Boy extends Component {
  constructor(props){
    super(props);
    this.state = {
      word:""
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>男孩页面</Text>
        <Button 
          title="跳转到另一个页面"
          onPress={()=>{
            alert("dd");
          }}
        ></Button>
      </View>
    );
  }
}