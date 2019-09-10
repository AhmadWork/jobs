import React, {Component} from 'react';
import {View,Text, Dimensions, Platform} from 'react-native';
import {connect} from 'react-redux';
import Swipe from '../components/Swipe';
import { Card, Button, Icon } from 'react-native-elements';
import GoogleStaticMap from 'react-native-google-static-map';
import Geocoder from 'react-native-geocoding';
import {MapView} from 'expo';
import * as actions from '../Actions';
import {Html,Heading} from '@shoutem/ui';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDGDRUz-Wz8ZCHneIPtL-RplaFA8RIeDRE';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
Geocoder.init(GOOGLE_MAPS_APIKEY);
class DeckScreen extends Component {

  static navigationOptions = {
    title:'Jobs',
    tabBarIcon: ({tintColor}) => {
    return <Icon name="description" size={25} color={tintColor} />
}
}

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle} style={{height: 700 } }>
        
        <View style={{ height: 300 }}>
      <MapView
      scrollEnabled={false}
      style={{ flex: 1 }}
      cacheEnabled={Platform.OS === 'android'}
      initialRegion={initialRegion}
    >
    <MapView.Marker coordinate={initialRegion} />
    </MapView>
    </View>
       

        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Html
    body={job.snippet}
    />
      </Card>
    );
  }
  onSwipeLeft()
  {
console.log('left');

  }

onSwipeRight()
{
  console.log('right');


}
  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          onSwipeLeft={this.onSwipeLeft}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };

}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: SCREEN_HEIGHT*.25
    },
    map: {
      padding:5,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: .1,
      position:'relative'
    },
      detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
      }
    };


export default connect (mapStateToProps,actions) (DeckScreen);