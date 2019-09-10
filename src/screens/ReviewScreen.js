import React, {Component} from 'react';
import {View,Text,ScrollView,Linking} from 'react-native';
import {connect} from 'react-redux';
import {Button,Title,ImageBackground,Tile,Divider,Subtitle} from '@shoutem/ui';
import {Icon} from 'react-native-elements';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDGDRUz-Wz8ZCHneIPtL-RplaFA8RIeDRE';
class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => {
    
    return {
  
      title: 'Review Jobs',
    headerRight:(<Text onPress={()=>{navigation.navigate('settings')}}>Settings</Text> )
    };
  };
   
      renderJobs(){

    

          return this.props.likedJobs.map(job =>{
              return(
<View>
      <ImageBackground
        styleName="large-banner"
        source={ './s.png'}
 
      >
        <Tile>
          <Title styleName="md-gutter-bottom">{job.jobtitle}</Title>
          <Subtitle styleName="sm-gutter-horizontal">{job.date}</Subtitle>
          <Button styleName="full-width" onPress={()=>Linking.openURL(job.url)}>
  <Text>Apply To Job</Text>
</Button>
       
        </Tile>
  
  
      </ImageBackground>

      <Divider styleName="line" />
    </View>
  

          )})
      }
    

    render(){
console.log(this.props.likedJobs);
        return(
            <ScrollView>
{this.renderJobs()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state){
    return {likedJobs:state.likedJobs}
}

export default connect(mapStateToProps) (ReviewScreen);