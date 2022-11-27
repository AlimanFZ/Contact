import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { loginPage, splashPage, homePage, updatePage, createPage } from "../page";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

const Router = () => {
    React.useEffect(() => {
        LogBox.ignoreLogs(["..."]);
    }, []);
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={splashPage} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={homePage} />
            <Stack.Screen name="Update" component={updatePage} />
            <Stack.Screen name="Create" component={createPage} />
            <Stack.Screen name="Login" component={loginPage} />
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({});
