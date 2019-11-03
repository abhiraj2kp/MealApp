import React,{useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import MealNavigation from "./navigation/MealNavigation";

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    return(
       <MealNavigation/>
    );
} 