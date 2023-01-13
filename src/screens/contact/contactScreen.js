import React, { useState } from "react";
import { View, Text, StyleSheet, ToastAndroid, Modal } from "react-native";
import moment from "moment";
import { Input, Button, CalendarSelector } from "../../components";
import * as STRINGS from "../../utils/strings";
import * as COLOR from "../../utils/colors";
import { IsEmpty } from "../../utils/util";

export default function ContactScreen() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [isCalendarPopup, setIsCalanderPopup] = useState(false);

    function submitForm() {
        if (IsEmpty(userName) || IsEmpty(email) || IsEmpty(dob)) {
            return ToastAndroid.show(STRINGS.FIELD_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
        } else if (!STRINGS.EMAIL_VALIDATION.test(email)) {
            return ToastAndroid.show(STRINGS.EMAIL_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
        } else {
            setIsCalanderPopup(false);
            setShowPopup(true)
        }
    }
    function renderCalendarPopup() {
        return (
            <View style={styles.calendar_container}>
                <Text style={styles.dob_title}>{STRINGS.DOB_TITLE}</Text>
                <CalendarSelector
                    onDateChange={date => {
                        setDob(date);
                        setShowPopup(false);
                    }} />
                <Button onPress={() => setShowPopup(false)} style={styles.cancel_button}>
                    <Text style={styles.button_text}>{STRINGS.CANCEL}</Text>
                </Button>
            </View>
        )
    }
    function renderFormPopup() {
        return (
            <View elevation={3} style={styles.form_container}>
                <View style={styles.form_pop}>
                    <Text style={styles.dob_title}>{STRINGS.USER_TITLE}</Text>
                    <View style={styles.user_details}>
                        <Text style={styles.user_text}>{userName}</Text>
                        <Text style={styles.user_text}>{email}</Text>
                        <Text style={styles.user_text}>{moment(dob).format("DD-MM-YYYY")}</Text>
                    </View>
                    <Button onPress={() => setShowPopup(false)} style={styles.cancel_button}>
                        <Text style={styles.button_text}>{STRINGS.CLOSE}</Text>
                    </Button>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Input
                    title={STRINGS.FULL_NAME}
                    placeholder={STRINGS.NAME_EXAMPLE}
                    onChangeText={data => {
                        if (STRINGS.ALPHABET_ONLY.test(data) && data.length <= 50 || data === "") {
                            setUserName(data)
                        }
                    }}
                    value={userName}
                />
                <Input
                    title={STRINGS.EMAIL}
                    placeholder={STRINGS.EMAIL_EXAMPLE}
                    onChangeText={data => setEmail(data)}
                    value={email}
                />
                <View style={styles.date_pick_container}>
                    <Text style={styles.input_title}>{STRINGS.DOB}</Text>
                    <Button onPress={() => { setIsCalanderPopup(true); setShowPopup(true) }} style={styles.dob_picker}>
                        <Text style={{ color: dob !== "" ? COLOR.BLACK : COLOR.PLACEHOLDER }}>{dob !== "" ? moment(dob).format("DD-MM-YYYY") : STRINGS.DOB_EXAMPLE}</Text>
                    </Button>
                </View>
                <Button onPress={() => submitForm()}>
                    <Text style={styles.button_text}>{STRINGS.SUBMIT}</Text>
                </Button>
            </View>
            <Modal
                transparent={isCalendarPopup ? false : true}
                visible={showPopup}>
                {isCalendarPopup ? renderCalendarPopup() : renderFormPopup()}
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    formContainer: {
        width: "90%"
    },
    button_text: {
        color: COLOR.WHITE,
        fontSize: 16
    },
    calendar_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    dob_title: {
        fontSize: 18,
        textAlign: "center",
        color: COLOR.PRIMARY
    },
    cancel_button: {
        width: "50%",
        backgroundColor: COLOR.RED
    },
    dob_picker: {
        backgroundColor: COLOR.TRANSPARENT,
        borderWidth: 1,
        alignItems: "flex-start",
        paddingHorizontal: 10,
        marginTop: 0
    },
    input_title: {
        fontSize: 12
    },
    date_pick_container: {
        marginVertical: 5
    },
    user_details: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLOR.WHITE,
        borderRadius: 20
    },
    user_text: {
        fontSize: 16,
        padding: 5
    },
    form_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLOR.TRANSPARENT_BG
    },
    form_pop: {
        width: "80%",
        backgroundColor: COLOR.WHITE,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        borderRadius: 20
    }
})