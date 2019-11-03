import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform, Text } from "react-native";
import Colors from '../constants/Colors';
import React from 'react';
import CatagoryMealScreen from "../Screens/CatagoryMealScreen";
import CatoagoryScreen from "../Screens/CatoagoryScreen";
import MealDetailsScreen from "../Screens/MealDetailsScreen";
import FavourtScreen from '../Screens/FavouritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FilterScreen from "../Screens/FilterScreen";

const defaultNavigations = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : "",
    },
    headerTitleStyle : {
        fontSize : 20,
        fontWeight : "bold"
        //fontFamily: '',
    },

    headerBackTitleStyle : {
        //fontFamily : ""
    },

    headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor
}
const MealNavigator = createStackNavigator({

    Categories: CatoagoryScreen,

    CatagoryMeal: { screen: CatagoryMealScreen },

    MealDetails: MealDetailsScreen
},
    {
        mode: "card",
        //initialRouteName : "MealDetails",
        defaultNavigationOptions: defaultNavigations
    });

const tabScreenConfig = {
    Meal: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor} />
                );
            },
            tabBarColor : Colors.pink,
            tabBarLabel : Platform.OS === "android" ? <Text style = {{fontSize : 16, fontWeight : "bold"}}>Meal</Text> : "Meal"
        }
    },
    Favourts: {
        screen: FavourtScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <MaterialIcon name="favorite" size={30} color={tabInfo.tintColor} />
                );
            },
            tabBarColor : Colors.blackColor,
            tabBarLabel : Platform.OS === "android" ? <Text style = {{fontSize : 16, fontWeight : "bold"}}>Favourit</Text> : "Favourit"
        }
    }
};



const MealBottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor : "white",
    shifting : true,
    barStyle : {
        backgroundColor : Colors.primaryColor
    },

}) : createBottomTabNavigator(tabScreenConfig
    , {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
            labelStyle : {
                 fontSize : 10,
                 fontWeight : "bold"
            }
        }
    }
);

const filterStack = createStackNavigator({
    filters : {screen : FilterScreen}
}, {
        mode: "card",
        //initialRouteName : "MealDetails",
        defaultNavigationOptions: defaultNavigations
});

const MainNavigator = createDrawerNavigator({
    MealFavs : {screen : MealBottomNavigator, navigationOptions : {drawerLabel : "My Favourites"}},
    Filter : {screen : filterStack, navigationOptions : {drawerLabel : "My Filters"}}
},{
    contentOptions : {
        activeTintColor : Colors.pink,
        labelStyle : {
            fontSize: 16,
            fontWeight: 'bold',
        }
    }
});

export default createAppContainer(MainNavigator);
