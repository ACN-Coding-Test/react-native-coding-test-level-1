import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import * as COLOR from "../utils/colors";

export function Input(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{props.title}</Text>
        <TextInput
            {...props}
            placeholderTextColor={COLOR.PLACEHOLDER}
            onChangeText={(data) => props.onChangeText(data)}
            value={props.value}
            style={[styles.inputContainer, props.style]} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 5
    },
    inputContainer: {
        width: "100%",
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10
    },
    inputTitle: {
        fontSize: 12
    }
})