import { createSlice } from "@reduxjs/toolkit";
import { WorkHistoryModel } from "../models/WorkHistoryModel";

const initialState : WorkHistoryModel[] = [];

export const workHistorySlice = createSlice({
    name: 'workHistory',
    initialState,
    reducers: {
        addNewWorkHistory: (state) => {
            state.push({
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
            });
        },
        updateJobTitle: (state, action) => {
            const { index, jobTitle } = action.payload;
            state[index] = { ...state[index], jobTitle }; // Update the title
        },
        updateCompany: (state, action) => {
            const { index, company } = action.payload;
            state[index] = {...state[index], company }; // Update the company
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
        removeWorkHistory: (state, action) => {
            const { index } = action.payload;
            state.splice(index, 1);
        }
    }}
);