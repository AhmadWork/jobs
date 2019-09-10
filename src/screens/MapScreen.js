import React, {Component} from 'react';
import {View, Text,Dimensions} from 'react-native';
import {MapView} from 'expo';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../Actions';

const height= Dimensions.get('window').height*0.7;
const width= Dimensions.get('window').width*0.8;

class MapScreen extends Component {
    static navigationOptions = {
        title:'Map',
        tabBarIcon: ({tintColor}) => {
        return <Icon name="my-location" size={25} color={tintColor} />
    }
}
    
    state = {
        region: {
          longitude: -122,
          latitude: 37,
          latitudeDelta: 0.09,
          longitudeDelta:
            Dimensions.get("window").width / Dimensions.get("window").height * 0.09
        }
      };
     
      onRegionChangeComplete = (region) => {
        console.log(region);
this.setState({region})

      }
     
      onButtonPress = () => {
this.props.fetchJobs(this.state.region,()=> {
    this.props.navigation.navigate('deck');
})
      }
    render(){

        return(
            <View style={{flex:1}}>
<MapView 


initialRegion={this.state.region}
style={{flex:1}}
onRegionChangeComplete={this.onRegionChangeComplete}
/>
<Button large title="Search Jobs" backgrondColor="#009688" icon={{name:'search'}} style={style.buttonStyle} onPress={this.onButtonPress}/>

            </View>
        );
    }
} 



const style ={
    buttonStyle:{
      position:'absolute',
      bottom: height,
      paddingLeft:10,
      paddingRight:10,
      width:360,
      alignSelf: 'center'
  
    }}
    
export default connect(null,actions) (MapScreen);