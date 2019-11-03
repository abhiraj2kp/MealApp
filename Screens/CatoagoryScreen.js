import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryTile from "../Components/CatagoryTile";
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";


const CatogoryScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CatagoryTile color = {itemData.item.color} title={itemData.item.title} onPress={() => { props.navigation.navigate({ routeName: "CatagoryMeal", params: { CatagoryName: itemData.item } }); }} />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CatogoryScreen.navigationOptions = navData => {
   return {
    headerTitle: 'Meal Categories',
    headerLeft : (
        <Ionicon name = "md-menu" size ={30} color = {Colors.blackColor} onPress = {() =>{
            navData.navigation.toggleDrawer();
        }} />
    )};
};

export default CatogoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

});

{/* <Button onPress = {() => {props.navigation.navigate({routeName : "CatagoryMeal"}); }} title = "Move to Catagory Meal Screen!"/> */ }
{/* <Button onPress = {() => {props.navigation.navigate("CatagoryMeal"); }} title = "Move to Catagory Meal Screen!"/> */ }
{/* <Button onPress = {() => {props.navigation.push("Categories"); }} title = "Move to Catagory Meal Screen!"/> */ }
{/* <Button onPress = {() => {props.navigation.replace("MealDetails") }} title = "Move to Catagory Meal Screen!"/> */ }