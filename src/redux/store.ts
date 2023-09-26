import { configureStore } from "@reduxjs/toolkit";
import { departmentSlice } from "./hrm/department-slice";
import { jobPositionSlice } from "./hrm/job-position-slice";
import { employeeSlice } from "./hrm/employee-slice";

export const store = configureStore({
    reducer: {
        department: departmentSlice.reducer,
        jobPosition: jobPositionSlice.reducer,
        employee: employeeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;