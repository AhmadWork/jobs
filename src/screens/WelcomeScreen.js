import React, {Component} from 'react';
import _ from 'lodash';
import {View, AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';
import Slides from '../components/slides';



const SLIDE_DATA = [
{id:0, text: 'Welcome to JobApp'},
{id:1, text: 'Set your Loaction then swipe away'},  
{id:2, text: 'Are You Ready '}
]
class WelcomeScreen extends Component {
    state={token: null}
    
async componentWillMount(){
  let token = await AsyncStorage.getItem('fb_token');
if(token){
    this.props.navigation.navigate('map');
}else {
    this.setState({token:false});
}
}

onSlideComplete(){
    this.props.navigation.navigate('auth');
}
    render(){
if(_.isNull(this.state.token)){
   < AppLoading />
}
        return(
            <View style={styles.viewStyle}>
<Slides data={SLIDE_DATA} onComplete={this.onSlideComplete.bind(this)}/>
            </View>
        );
    }
}
const styles = {
    viewStyle:{   
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

}
export default WelcomeScreen;