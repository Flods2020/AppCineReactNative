import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({data}) => {
    // console.log(data);
    return (
        <View>
            {data.map((res) => {
                console.log(res);
                return(
                    <View key={res}>
                        <Text>{res.prenom}</Text>
                        <Text>{res.nom}</Text>
                        <Text>{res.age + ' ans'}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
