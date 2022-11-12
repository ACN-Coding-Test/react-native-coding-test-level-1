import {createSlice, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from './index';

export type Info = {
    name: string;
    email: string;
};

type ContactType = {
    loading: boolean;
    info: Info;
    date: string;
};

const contactState = {
    loading: false,
    info: {
        name: '',
        email: ''
    },
    date: new Date().toDateString()
} as ContactType;

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactState,
    reducers: {
        setLoadingStart: state => {
            state.loading = true;
        },

        setLoadingEnd: state => {
            state.loading = false;
        },

        onChangeInfo: (
            state,
            {
                payload
            }: PayloadAction<{
                key: keyof Info;
                value: string;
            }>
        ) => {
            let {key, value} = payload;
            state.info[key] = value;
        },

        onChangeBOD: (
            state,
            {
                payload
            }: PayloadAction<{
                value: string;
            }>
        ) => {
            let {value} = payload;

            state.date = value;
        }
    }
});

export const {setLoadingStart, setLoadingEnd, onChangeInfo, onChangeBOD} =
    contactSlice.actions;

export default contactSlice.reducer;
