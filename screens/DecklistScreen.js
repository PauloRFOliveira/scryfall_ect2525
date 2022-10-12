import {View, StyleSheet, Text, FlatList, Image, ScrollView, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";

import axios from "axios";

export default function DecklistScreen({route, navigation}){
    const { link }  = route.params;
    const url = link.toString();
    const [object, setObject] = useState([]);

    async function fetchObject(){
        try{
            const response = await axios(url);
            console.log(response);
            setObject(response.data)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchObject();
    }, [])

    function renderItem({item}){
        return(
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CardScreen', {image : item.image})}>

                <Image style={styles.cardImg} source={{uri: item.art}}/>

                <View style={styles.cardInfo}>

                    <Text style={styles.cardInfo}>{item.quantity}x {item.cardname}</Text>
                    <Text style={styles.cardInfo}>{item.cardtype}</Text>

                </View>

            </TouchableOpacity>
        );
    }

    return(
        <ScrollView style={styles.container}>

            <StatusBar style="auto"/>

            <View style={styles.header}>

                <Text>Deck: {object.name}</Text>
                <Text>Formato: {object.format}</Text>

            </View>

            <View style={styles.deckDivider}>

                <Text>Maindeck {object.mainsize} cards</Text>

            </View>

            <FlatList
                data={object.main}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.deckDivider}>

                <Text>Sideboard {object.sidesize} cards</Text>

            </View>

            <FlatList
                data={object.side}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    deckDivider: {
        height: 40,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        height: 60,
        backgroundColor: "#fff",
        flexDirection: "row",
        padding: 5,
        margin: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginEnd: 5,
    },
    cardInfo: {
        fontWeight: "bold",
        alignItems: "center",
        flex: 1,
    }
});