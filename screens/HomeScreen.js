import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import Constants from 'expo-constants';

import HomeScreenHeader from "../components/HomeScreenHeader";

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
            <TouchableOpacity style={styles.decks} onPress={() => navigation.navigate('DecklistScreen', {id: item.id})}>

                <Text>{item.name}</Text>
                <Text>{item.format}</Text>

            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <HomeScreenHeader/>

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
    decks: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});