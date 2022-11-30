import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './src/routers';
import "expo-dev-client"
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const App = () => {
    GoogleSignin.configure({
        webClientId: '191611062873-6lh4bfmt7jsjf9rcfmpr9tjhb158009p.apps.googleusercontent.com'
    })
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
