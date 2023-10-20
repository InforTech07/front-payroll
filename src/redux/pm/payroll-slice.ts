import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayroll } from "@/interfaces/pm";

import { toast } from "react-toastify";
import { apiServices } from "@/services/api-service";


export interface IPayrollState {
    payrolls: IPayroll[];
    loading: boolean;
    error: string;
}

const initialState:IPayrollState = {
    payrolls: [],
    loading: false,
    error: "",
};


export const registerPayroll = createAsyncThunk(
    "payroll/registerPayroll",
    async (data: IPayroll,thunkAPI) => {
        try {
            const response = await apiServices.post("payroll/",data)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getPayrolls = createAsyncThunk(
    "payroll/getPayrolls",
    async (companyId: number) => {
        try {
            const response = await apiServices.get("payroll/get_payrolls/?company=" + companyId)
            return response;
        } catch (error) {
            return error
        }
    }
);



export const payrollSlice = createSlice({
    name: "payroll",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(registerPayroll.fulfilled, (state, { payload }) => {
            toast.success("Payroll registered successfully");
            state.payrolls.push(payload);
        }).addCase(registerPayroll.rejected, (state, { payload }) => {
            toast.error("Error registering payroll");
        }).addCase(getPayrolls.fulfilled, (state, { payload }) => {
            state.payrolls = payload;
        }).addCase(getPayrolls.rejected, (state, { payload }) => {
            toast.error("Error getting payrolls");
        });

    },
});

export const selectPayroll = (state: RootState) => state.payroll.payrolls;

export default payrollSlice.reducer;