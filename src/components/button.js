import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as COLOR from "../utils/colors";

export function Button(props) {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        {...props}
        style={[styles.container, props.style]}>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 45,
        borderRadius: 10,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: COLOR.PRIMARY,
        marginVertical: 10
    }
})