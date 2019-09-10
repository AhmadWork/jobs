import React, { Component } from 'react'
import {SafeAreaView ,ActivityIndictor,View,StatusBar} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import {Font,Notifications} from 'expo';
import {store,persistor} from "./src/store";
import { PersistGate } from 'redux-persist/es/integration/react';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from "./src/screens/MapScreen";
import DeckScreen from "./src/screens/DeckScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import {Icon} from 'react-native-elements';
export default class Main extends Component {
  
  async componentWillMount(){

    let fonts=await Font.loadAsync({

      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });
if(fonts){
      this.setState({ fontsAreLoaded: true })
}
}
  render() {
    const MainNavigator = createBottomTabNavigator({

      welcome: { screen: WelcomeScreen },

      auth: { screen: AuthScreen },

      main: {

        screen: createBottomTabNavigator({

          map: { screen: MapScreen },

          deck: { screen: DeckScreen },

          review: {

            screen: createStackNavigator({

              review: { screen: ReviewScreen },

              settings: { screen: SettingsScreen },

            }),

            navigationOptions: {

              title: 'Review',

              tabBarLabel: 'Review',

              tabBarIcon: ({ tintColor }) => (

                <Icon name="favorite" size={25} color={tintColor} />

              )

            }

          }

        }, {

          tabBarOptions: {

            labelStyle: { fontSize: 12 },

          },

        }),

      }

    }, {

      navigationOptions: {

        tabBarVisible: false,

      },

      lazy: true,

    });



    return (

<Provider store={store}>
<PersistGate loading={this.renderLoading} persistor={persistor}>
<SafeAreaView style={styles.container}  >


<MainNavigator/>  

</SafeAreaView>
</PersistGate>
</Provider>
  
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',

    justifyContent: 'center',
  },
};

