import {configureStore} from '@reduxjs/toolkit';
import { personalDetailsSlice } from '../slices/personalDetailsSlice';
import { educationSlice } from '../slices/educationSlice';
import { workHistorySlice } from '../slices/workHistorySlice';

const store = configureStore({
    reducer: {
        personalDetails: personalDetailsSlice.reducer,
        education: educationSlice.reducer,
        workHistory: workHistorySlice.reducer,
    }, 
});

export default store;