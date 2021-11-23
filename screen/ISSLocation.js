import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import MapView,{Marker} from 'react-native-maps';
import axios from "axios";
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
//import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class ISSLocationScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            location: {}
        }
    }

        componentDidMount(){
            this.getISSLocation()
        }

getISSLocation = ()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
.then(response=>{
    this.setState({location: response.data})
})
.catch(error=>{
    Alert.alert(error.message)
})
}

    
    render(){
        return(
            <View style = {styles.container}>
            <SafeAreaView style = {styles.droidSafeArea}></SafeAreaView>
                <ImageBackground source = {require("../ISS-assets/assets/iss_bg.jpg")} style = {styles.backgroundImage}> 
                <View style = {styles.titleContainer}>  
                <Text style = {styles.titleText}>ISSLocationscreen</Text>
                </View>
                <View style = {styles.mapContainer}>
                <MapView style = {styles.map} 
                region = {{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                    latitudeDelta: 100,
                    longitudeDelta: 100,

                }}> 
                    
                </MapView>
                </View>
            </ImageBackground>
               
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
    
        },
        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            
        },
    
        droidSafeArea: {
            marginTop: Platform.OS === "android"? StatusBar.currentHeight: 0,
        },
        titleContainer:{
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        titleText: {
            fontSize: 40,
            fontWeight: "bold",
            color: "white"
    },
        mapContainer: {
            flex: 0.6,
    
        },
        map: {
            width: "100",
            height: "100",
        }
    })