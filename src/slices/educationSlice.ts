import { createSlice } from "@reduxjs/toolkit";
import { EducationModel } from "../models/EducationModel";

const initialState : EducationModel[] = [];

export const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addNewEducation: (state) => {
            state.push({
                titleOfStudy: "",
                institution: "",
                startDate: "",
                endDate: "",
                description: ""
            });
        },
        updateTitleOfStudy: (state, action) => {
            const { index, titleOfStudy } = action.payload;
            state[index] = { ...state[index], titleOfStudy }; // Update the title
        },
        updateInstitution: (state, action) => {
            const { index, institution } = action.payload;
            state[index] = {...state[index], institution }; // Update the institution
        },
        updateStartDate: (state, action) => {
            const { index, startDate } = action.payload;
            state[index] = {...state[index], startDate }; // Update the startDate
        },
        updateEndDate: (state, action) => {
            const { index, endDate } = action.payload;
            state[index] = {...state[index], endDate }; // Update the endDate
        },
        updateDescription: (state, action) => {
            const { index, description } = action.payload;
            state[index] = {...state[index], description }; // Update the description
        },        
        removeEducation: (state, action) => {
            const {index } = action.payload;
            state.splice(index, 1);
        }
    }
});