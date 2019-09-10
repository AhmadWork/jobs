import React, {Component} from 'react';
import {View, Text,ScrollView,Dimensions,Button} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {

    renderLastSlide(index){
        if (index === this.props.data.length -1){
            return (
                <Button title="OnWards"   color="#841584" onPress={this.props.onComplete }/>
            )
        }
    }
    renderSlides(){
       return this.props.data.map((slide,index) => {
            return(
            <View key={slide.text} style={styles.slide} >
<Text style={styles.slideText}>{slide.text}</Text>

{ this.renderLastSlide(index) }

            </View>
            );
        });
    }
    render(){

        return(
            <ScrollView
            horizontal
            pagingEnabled
            >
{this.renderSlides()}
            </ScrollView>
        );
    }
}
const styles = {
    slideText:{
      fontSize: 30 ,
      justifyContent:'center',
      color: 'white'
    },
    slide:{
        backgroundColor:'#87CEFA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:SCREEN_WIDTH

    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop:15
    }
}
export default Slides;