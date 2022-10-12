import React from "react";
import {View, StyleSheet, Image} from "react-native";

export default function CardScreen({route}){
    const {image} = route.params;

    return(
        <View style={styles.container}>

            <Image style={styles.cardImage} source={{uri: image}}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
});