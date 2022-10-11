import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import Constants from 'expo-constants';

export default function HomeScreen({navigation}){
    const [homescreen, setHomescreen] = useState([]);

    useEffect(function (){
        async function getData(){
            const response = await fetch('https://raw.githubusercontent.com/PauloRFOliveira/PauloRFOliveira.github.io/main/decks.json');
            const homescreen = await response.json();
            setHomescreen(homescreen)
        }
        getData();
    }, [])

    function renderItem({ item }){
        return(
            <TouchableOpacity style={styles.decks} onPress={() => navigation.navigate('DecklistScreen', {main : item.main})}>

                <Text>{item.name}</Text>
                <Text>{item.format}</Text>

            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <View style={styles.header}>

                <Image style={styles.headerImg} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/21RUM0xP4UL._SX331_BO1,204,203,200_.jpg"}}/>
                <Text style={styles.headerText}>Baralhos de Magic</Text>

            </View>

            <FlatList
                data={homescreen}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    header: {
        height: 60,
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    headerImg : {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    decks: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});