import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './src/routers';

const App = () => {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
