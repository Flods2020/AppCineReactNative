import { element } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { db } from './firebase'


const FirestoreComponent = () => {

    const [elem, setelement] = useState([])
    useEffect(() => {
        const tab = []
        db.collection("user").get().then(res => {
            res.forEach(element => {
                tab.push(element.data())
            });
            setelement(tab)
        })
        .catch(err => console.log(err))
    }, []);

    const sendData = () => {
        db.collection("user").add({prenom:"Flower", nom:"Power"}).then(() => {
            console.log("prenom");
        })
        .catch(err => console.log(err))
    }

    const updateData = () => {
        db.collection("user").doc("LFvSkm9h1WyWiThoa3Aq").update({age: 30, prenom:"Flowa", nom:"Powa" }).then(() => {
            console.log("succes");
        })
        .catch(err => console.log(err))
    }

    const deleteData = () => {
        db.collection("user").doc("eIRKwfv9FXRP7cA6YBlf").delete().then(() => {
            console.log('Supprimer')
        })
        .catch(err => console.log(err))
    }

    return (
        <View style={{margin: 100}}>
            <Text style={{margin: 15}}>WELELE</Text>

            {
                elem.map(res => {
                    return(
                        <View>
                            <Text>{res.nom}</Text>
                            <Text>{res.prenom}</Text>
                        </View>
                    )
                })
            }

            <Button title="send" onPress={sendData} />
            <Button title="update" onPress={updateData} />
            <Button title="delete" onPress={deleteData} />
        </View>
    )
}

export default FirestoreComponent

const styles = StyleSheet.create({})
