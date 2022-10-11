import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function DecklistScreen({route, navigation}){
    const { i } = route.params;
    const [decklist, setDecklist] = useState([]);

    useEffect(function (){
        async function getData(){
            const response = await fetch('https://raw.githubusercontent.com/PauloRFOliveira/PauloRFOliveira.github.io/main/decks.json');
            const decklist = await response.json();
            setDecklist(decklist)
        }
        getData();
    }, [])

    //function renderItem({item.id}){
        //return(

        //);
    //}

    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});