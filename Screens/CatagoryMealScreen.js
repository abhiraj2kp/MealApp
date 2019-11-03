import React from "react";
import { View,Text,Button,StyleSheet,FlatList } from "react-native";
import {MEALS} from '../data/dummy-data';
import MealItem from "../Components/MealItem";

const CatogoryMealScreen = props => {
    const catagoryItem = props.navigation.getParam("CatagoryName");
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catagoryItem.id)>=0);
    const renderMealItem = itemData => {
        return(
            <MealItem
                title = {itemData.item.title}
                duration = {itemData.item.duration}
                complexity = {itemData.item.complexity}
                affordability = {itemData.item.affordability}
                onSelectMeal = {() => {props.navigation.navigate({routeName: "MealDetails",params : {mealId : itemData.item.id}})}}
                imageUrl = {itemData.item.imageUrl}
             />
        );
    };
    return(
        <View style = {styles.container} >
            <FlatList 
                data = {displayMeals}
                keyExtractor = {(item,index) => {item.id} }
                style={{ width: '100%' }}
                renderItem = {renderMealItem} />
        </View>
    )
} 

CatogoryMealScreen.navigationOptions = naviOpt => {
    const item = naviOpt.navigation.getParam("CatagoryName");
    return({
        headerTitle : item.title,
    }
    );
};

export default CatogoryMealScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        padding : 15
    }
});