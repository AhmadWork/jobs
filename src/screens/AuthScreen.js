import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions';
class AuthScreen extends Component {
componentDidMount(){
    this.onAuthComplete(this.props);
    this.props.facebookLogin();

}

componentWillReceiveProps(nextProps){
    this.onAuthComplete(nextProps);
}

onAuthComplete(props){
    if(props.token){
        this.props.navigation.navigate('map');
    }
}

    render(){

        return(
            <View>

            </View>
        );
    }

}
function mapStateToprops({auth}){
    return {token: auth.token};
}
export default connect(mapStateToprops,actions) (AuthScreen);