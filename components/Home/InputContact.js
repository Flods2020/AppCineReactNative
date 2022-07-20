import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


const InputContact = () => {
    return (
        <View>Contact
            <TextInput
        style={styles.input}
        placeholder='name'
       /*  onChangeText={onChangeText}
         value={text}*/
      />
        <TextInput
        style={styles.input}
        placeholder=' last name'
       /*  onChangeText={onChangeText}
         value={text}*/
      />
        <TextInput
        style={styles.input}
        placeholder='email'
       /*  onChangeText={onChangeText}
         value={text}*/
      />
        </View>
    )
}

export default InputContact

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,
      },
})
