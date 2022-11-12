import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import DateTimePicker, {
    DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import {Paragraph, Subheading} from 'react-native-paper';
import {useAppSelector} from '../redux/hooks';
import {RootState} from '../redux';

type Props = {
    value: Date;
    onChange: (value: Date) => void;
};

const DateInput = ({value, onChange}: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <View
            testID="dateInputParent"
            style={[
                {
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '90%',
                    alignSelf: 'center'
                }
            ]}>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{borderWidth: 1, borderRadius: 5, padding: 10}}>
                <Paragraph style={{letterSpacing: 1.5}}>BirthDay :</Paragraph>
                <Subheading style={{letterSpacing: 1.5}}>
                    {String(value.toDateString())}
                </Subheading>
            </TouchableOpacity>
            {open && (
                <DateTimePicker
                    testID="dateInput"
                    maximumDate={new Date()}
                    minimumDate={new Date(1950, 0, 1)}
                    value={value}
                    mode={'date'}
                    display={'calendar'}
                    onChange={(event: DateTimePickerEvent, value: any) => {
                        onChange(value);
                        setOpen(false);
                    }}
                />
            )}
        </View>
    );
};

export default DateInput;
