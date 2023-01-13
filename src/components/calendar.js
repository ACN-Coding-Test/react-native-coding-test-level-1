import React from "react";
import { View, StyleSheet } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import * as STRINGS from "../utils/strings";

export function CalendarSelector(props) {
    return <View style={styles.container}>
        <CalendarPicker
            initialDate={STRINGS.MAX_DATE}
            minDate={STRINGS.MIN_DATE}
            maxDate={STRINGS.MAX_DATE}
            onDateChange={day => {
                props.onDateChange(day);
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
})