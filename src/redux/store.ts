import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app/app-slice";
import { departmentSlice } from "./employee/department-slice";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        department: departmentSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;