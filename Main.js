import React, { Component } from 'react'
import {SafeAreaView ,ActivityIndictor,View,StatusBar} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import {Font,AppLoading} from 'expo';
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

<SafeAreaView >

<MainNavigator/>  

   </SafeAreaView>
  
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

