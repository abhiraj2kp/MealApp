import React from "react";
import { View,Text,StyleSheet } from "react-native";

const FavouritesScreen = props => {
    return(
        <View style = {styles.container} >
            <Text>The FavouritesScreen</Text>
        </View>
    )
} 

export default FavouritesScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});