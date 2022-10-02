import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

import colors from "../constants/colors";

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        color: colors.text
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
});

//using props
export const RowItem = ({ text, onPress, Icon }) => {
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
            <Text style={styles.text}>{ text }</Text>
            <Entypo name={ Icon } size={30} color={colors.icon}/>
            {/* { rightIcon } */}
        </TouchableOpacity>

    );
};

export const RowSeparator = () => <View style={styles.separator}/>;