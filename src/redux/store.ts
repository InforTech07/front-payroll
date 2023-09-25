import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app/app-slice";
import { departmentSlice } from "./hrm/department-slice";
import { jobPositionSlice } from "./hrm/job-position-slice";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        department: departmentSlice.reducer,
        jobPosition: jobPositionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;