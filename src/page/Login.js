import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        const user_sign = await auth().signInWithCredential(googleCredential) 
        if(user_sign.user != null){
            await AsyncStorage.setItem('user', JSON.stringify(user_sign.user))
            navigation.replace('Home')
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;


    if(!user){
        return (
            <View style={styles.b1}>
                <GoogleSigninButton
                onPress={async () => { await onGoogleButtonPress() }} 
                ></GoogleSigninButton>
                {/* <Button
                    title="LOGIN WITH GOOGLE"
                    onPress={() => { navigation.navigate("Home") }}
                /> */}
            </View> 
        )
    }
    
    return (<View style={styles.b1}>
        <Text style={styles.text}>Loading...</Text>
        {/* <Button
            title="Login"
            onPress={async () => { 
                await AsyncStorage.setItem('user', JSON.stringify({name : 'Ucok'}))
                navigation.navigate("Home") }}
        />  */}
    </View>)
}

export default Login

const styles = StyleSheet.create({
    b1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text : {
        fontSize: 20,
        fontWeight: '700'
    },
    button : {
        marginTop: 12,
        color: 'white',
        backgroundColor: 'blue'
    }
})