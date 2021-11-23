import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
//import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class HomeScreen extends Component{
    render(){
        return(
            <View 
            style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}> </SafeAreaView>
                <ImageBackground source = {require("../ISS-assets/assets/bg_image.png")} style = {styles.backgroundImage}> 
                <View style = {styles.titleBar}> 
                <Text Style = {styles.titleText}> ISS Tracker App </Text>
                </View>
                <TouchableOpacity style = {styles.routeCard} onPress= {()=>
                this.props.navigation.navigate("ISSLocation")}> 
                    <Text style = {styles.routeText}>ISSLocation</Text>
                    <Text style = {styles.knowMore}>{"know more --->"} </Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    
                    </TouchableOpacity>
               
                <TouchableOpacity style = {styles.routeCard} onPress= {()=>
                this.props.navigation.navigate("Meteorscreen")}> 
                    <Text style = {styles.routeText}>MeteorScreen</Text>
                    <Text style = {styles.knowMore}>{"know more --->"} </Text>
                    <Text style = {styles.bgDigit}>2</Text> 
                    
                    </TouchableOpacity>
                  
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
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
},
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
},
    routeCard: {
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 50
    },
    bgDigit: {
        position: 'absolute',
        color: "grey",
        fotSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80

    }
})