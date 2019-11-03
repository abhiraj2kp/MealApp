import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native';
import Colors from '../constants/Colors'

const CatagoryTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItemStyle}>
            <TouchableCmp
                style={{flex : 1}}
                onPress={props.onPress}>
                <View style={{ ...styles.continer, ...{ backgroundColor: props.color } }}>
                    <Text numberOfLines={2} style={styles.titleStyle}>{props.title}</Text>
                </View>

            </TouchableCmp>
        </View>

    );
};

const styles = StyleSheet.create({
    gridItemStyle : {
        margin : 15,
        height : 150,
        flex :1,
        borderRadius : 10,
        //overflow : Platform.OS === 'android' && Platform.Version >= 21 ? "hidden" : "visible",
        elevation : 3,
    },
    continer : {
        flex : 1,
        borderRadius : 10,
        shadowColor : Colors.blackColor,
        shadowOffset : {width : 0, height : 3},
        shadowRadius : 10,
        padding : 15,
        justifyContent : "flex-end",
        alignItems : "flex-end"
    },
    titleStyle : {
        fontSize : 15,
        fontWeight : "bold",
        textAlign : "right"
    }
});
export default CatagoryTile;

