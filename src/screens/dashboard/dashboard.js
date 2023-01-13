import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components";
import * as COLOR from "../../utils/colors";
import * as STRINGS from "../../utils/strings";

export default function ContactScreen(props) {
    return (
        <View style={styles.container}>
            <Button onPress={() => props.navigation.navigate("ContactScreen")}>
                <Text style={styles.button_text}>{STRINGS.CONTACT_US}</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems:"center",
        justifyContent:"center"
    },
    button_text: {
        color: COLOR.WHITE,
        fontSize: 16
    }
})