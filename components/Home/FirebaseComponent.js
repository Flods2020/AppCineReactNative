import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../../firebase';

const FirebaseComponent = () => {

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
        })
    })

    const register = () => {
        auth.createUserWithEmailAndPassword("wololotest@tera.com", "password").then(res => {
            console.log(res);
            console.log("succes");
        })
        .catch(err => {
            alert(err);
        })
    }

    const login = () => {
        auth.signInWithEmailAndPassword("wololotest@tera.com", "password").then(res => {
            console.log(res);
            console.log("succes");
        })
        .catch(err => {
            alert(err);
        })
    }

    const logout = () => {
        auth.signOut().then(() => {
            console.log('deconnecter');
        })
    }

    return (
        <View style={{margin: 150}}>
            <Text >WOLOLO</Text>
            <Button title='register' onPress={register}/>
            <Button title='sign in' onPress={login}/>
            <Button title='sign out' onPress={logout}/>
        </View>
    )
}

export default FirebaseComponent;

const styles = StyleSheet.create({})
