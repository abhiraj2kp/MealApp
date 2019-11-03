import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <View style={styles.listItem}>
                    <Text key={ingredient}>{ingredient}</Text>
                </View>
            ))}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <View style={styles.listItem}>
                    <Text key={step}>{step}</Text>
                </View>
               
            ))}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = naviOpt => {
    const mealId = naviOpt.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return ({
        headerTitle: selectedMeal.title,
    }
    );
};
export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin : 10,
    },

    image: {
        height: 200,
        borderRadius :  10,
        overflow : "hidden"
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});