import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import FirebaseComponent from './components/Home/FirebaseComponent';
import Home from './components/Home/Home';
import InputContact from './components/Home/InputContact';
import FirestoreComponent from './firestoreComponent';

const data = [
  {/*
    id:0,
    nom : "tera-campus",
    description : "école"
  */},
  {
    id: 1,
    prenom: "Flower",
    nom : "POWER",
    age : 30,
    taff1 : "Formation Développeur Web Full Stack",
    inc1 : "ENI",
    taff2 : "Formation ASI",
    inc2 : "Tera Campus"
  }
]

const HomeView = (props) =>{
  
  const onPress = () => {
    console.log("button press");
  }

  return(
    <View style={styles.viewHome}>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} style={{width:50, height:50}} />
      <TextInput placeholder={props.placeholder} style={styles.input}/>
      <Button title='Ze Bouton' onPress={onPress()}/>
    </View>
  )
}

export default function App() {
  return ( 
    // <View style={styles.container}>
    //   <View style={{ flexDirection:"row"}}>
    //     <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} style={{width:65, height:65, padding: 10}}/>
    //   <Text style={{height:30, paddingLeft:3, paddingTop:5, fontWeight:"bold"}}> Flower Power</Text>
    //     <Text style={{fontWeight:"bold", marginStart: 5}}>
    //       <Home data={data}></Home>
    //     </Text>
    //   </View>
    //   <View style={{width:320, height:150, margin:5, borderRadius:15, backgroundColor:"orange"}}>
    //     <View style={{paddingLeft:15}}>
    //     <Text style={{fontWeight:"bold", textAlign:"center", paddingTop:7, fontSize:12}}>Parcours professionnel</Text>
    //     <Text style={{paddingTop:7, fontWeight:"bold"}}>Tera Campus</Text>
    //     <Text>  -Etudiant ASI</Text>
    //     <Text style={{paddingTop:3, fontWeight:"bold"}}>ENI</Text>
    //     <Text>  -Etudiant Développeur Web et Web Mobile</Text>
    //     </View>
    //   </View>
    //   <View style={{height:150, flexDirection:"row"}}>
    //     <View style={{backgroundColor:"lightblue", margin:4, borderRadius:15, width:155}}>
    //       <Text style={{paddingTop:7, fontSize:12, fontWeight:"bold", textAlign:"center"}}>Parcours perso</Text>
    //       <Text style={{textAlign:"center", padding:12}}>-Bac-Fac-Taff</Text>
    //     </View>
    //     <View style={{backgroundColor:"grey", margin:4, borderRadius:15, width:155}}>
    //       <Text style={{paddingTop:7, fontSize:12, fontWeight:"bold", textAlign:"center"}}>Hobbies</Text>
    //       <Text style={{textAlign:"center", padding:12}}>-Sport-Musique-Films/Séries/Animes</Text>
    //     </View>
    //   </View>
    //   <InputContact />
    // </View>
    // <FirestoreComponent/>);
    <ScrollView>
      <View style={styles.container}>
        <HomeView title="WOLOLO" placeholder="Wololo"/>
        <HomeView title="WELELE" placeholder="Welele"/>
        <HomeView title="WALALA" placeholder="Walala"/>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: '5%',
    width: '100%',
    // height:'100%',
    alignItems:"center",
    borderWidth: 4,
    borderRadius:15,
  },
   
  viewHome: {
    margin:'15%',
    marginTop:'20%',
    alignItems:"center",
    borderRadius:10,
    borderWidth:1,
    padding:20,
    width:'100%',
    // height:70,
    backgroundColor:'lightgrey',
  },
  title: {
    fontSize:20,
    color:"black",
    fontWeight:"bold"
  },
  input: {
    width:'100%',
    height: 15,
    borderWidth:1,
    padding:'5%',
    // paddingStart:'25%',
    borderRadius:10,
    margin:'5%',
  },
});
