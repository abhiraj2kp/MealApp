import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.blackColor }}
          thumbColor={Platform.OS === 'android' ? Colors.pink : ''}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };

const FilterScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);


    const saveFilter = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilter });
    },[saveFilter])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Available Filters</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />

        </View>
    )
}
FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter',
        headerLeft: (
            <Ionicon name="md-menu" size={30} color="white" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        ),
        headerRight : (
            <Ionicon name="ios-save" size={30} color="white" onPress={() => {
                const params = navData.navigation.getParam('save');
            }} />
        )
    };
};
export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
      },
});