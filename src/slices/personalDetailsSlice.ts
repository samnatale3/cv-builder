import { createSlice } from "@reduxjs/toolkit";
import { PersonalDetailsModel } from "../models/PersonalDetailsModel";

const initialState : PersonalDetailsModel = {
    firstName: '',
    lastName: '',
    personalStatement: '',
    houseNumber: '',
    street: '',
    county: '',
    postcode: ''
}

export const personalDetailsSlice = createSlice({
    name: 'personalDetails',
    initialState: initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload;
        },
        updatePersonalStatement: (state, action) => {
            state.personalStatement = action.payload;
        },
        updateHouseNumber: (state, action) => {
            state.houseNumber = action.payload;
        },
        updateStreet: (state, action) => {
            state.street = action.payload;
        },
        updateCounty: (state, action) => {
            state.county = action.payload;
        },
        updatePostcode: (state, action) => {
            state.postcode = action.payload;
        },
    },
});