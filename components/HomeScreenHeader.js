import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";

export default function HomeScreenHeader(){
    return(

        <View style={styles.header}>

            <Image style={styles.headerImg} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/21RUM0xP4UL._SX331_BO1,204,203,200_.jpg"}}/>
            <Text style={styles.headerText}>Baralhos de Magic</Text>

        </View>

    );
}

const styles = StyleSheet.create({
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
});