import React, { Component } from 'react'
import { View, } from 'react-native'
import Video from 'react-native-video'

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('main');  
          }, 2500)
    }
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',width:null,height:null}}>
               <Video source={require('./img/hero.mp4')}
                     style={{position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             opacity: 0.3}}
                             muted={true}
                             repeat={true}
                             resizeMode="cover"     />
                             
           
               {/*<Image style={{ width: windowSize.width, height: windowSize.height}} source={require('./images/splash.png')}></Image>*/} 
            </View>
        );
    }
}

