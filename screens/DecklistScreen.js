import {View, StyleSheet, Text, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";

import axios from "axios";

export default function DecklistScreen({route, navigation}){
    const { main }  = route.params;
    const url = main.toString();
    const [maindeck, setMaindeck] = useState([]);

    async function fetchMaindeck(){
        try{
            const response = await axios(url);
            console.log(response);
            setMaindeck(response.data)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMaindeck();
    }, [])

    function renderItem({item}){
        return(
            <View style={styles.card}>

                <Text>{item.cardname}</Text>

            </View>
        );
    }

    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <FlatList
                data={maindeck}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: 60,
        backgroundColor: "yellow",
    },
});