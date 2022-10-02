import React from "react"; //Default Import
import { View , TouchableOpacity, Text, SafeAreaView, StyleSheet, ScrollView, Linking, Alert } from "react-native";  //Named Import - whatever is imported in curly braces
// import { SafeAreaView } from 'react-native-safe-area-context';
// SafeAreaView only works in iOS devices 

import colors from '../constants/colors';

import { Entypo } from '@expo/vector-icons';

import { RowItem, RowSeparator } from '../components/RowItem';

// Catching any exceptions that rise when a wrong url is given
const openUrl = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, the link is not working!');
    });
};

const styles = StyleSheet.create({
    // row: {
    //     paddingHorizontal: 20,
    //     paddingVertical: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    // },
    // text: {
    //     fontSize: 20,
    //     color: colors.text
    // },
    view: {
        marginTop: 30,
        // backgroundColor: 'red',
        flex: 1,    //makes the SafeAreaView take the whole page, height = full screen 
    },
    // separator: {
    //     backgroundColor: colors.border,
    //     height: StyleSheet.hairlineWidth,
    //     marginLeft: 20
    // }
});

export default () => {
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Themes</Text>
                <Entypo name="chevron-right" size={30} color={colors.icon}/>
            </TouchableOpacity> */}
            <RowItem
                text={'Themes'}
                onPress={() => openUrl('https://www.google.com/')}
                Icon={'chevron-right'}
            />

            {/* <View style={styles.separator}/> */}
            <RowSeparator/>

            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native Basics</Text>
                <Entypo name="export" size={30} color={colors.icon}/>
            </TouchableOpacity> */}
            <RowItem
                text='React Native Basics'
                onPress={() => openUrl('https://www.youtube.com/')}
                Icon={'export'}
            />

            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native by Example</Text>
                <Entypo name="code" size={30} color={colors.icon}/>
            </TouchableOpacity> */}

            {/* <View style={styles.separator}/> */}
            <RowSeparator/>

            <RowItem
                text='React Native by Example'
                onPress={() => openUrl('https://www.github.com/')}
                Icon={'code'}
            />

            </ScrollView>
        </SafeAreaView>
    );
};
