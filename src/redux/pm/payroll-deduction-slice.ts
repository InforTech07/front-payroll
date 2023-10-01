import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollDeduction } from "@/interfaces/pm";
import { toast } from "react-toastify";
import  { pmService } from "@/services/pm-service";


export interface IPayrollDeductionState {
    payrollDeductions:IPayrollDeduction[];
    //payrollConcept: IPayrollConcept;
    loading: boolean;
    error: string;
}
3
const initialState:IPayrollDeductionState = {
    payrollDeductions: [],
    loading: false,
    error: "",
};

export const getPayrollDeductions = createAsyncThunk(
    "payrolldeduction/getPayrollDeductions",
    async () => {
        try {
            const response = await pmService.getPayrollDeductions();
            return response.results;
        } catch (error) {
            return error
        }
    }
);

export const registerPayrollDeduction = createAsyncThunk(
    "payrolldeduction/registerPayrollDeduction",
    async (data: IPayrollDeduction,thunkAPI) => {
        try {
            const response = await pmService.registerPayrollDeduction(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updatePayrollDeduction = createAsyncThunk(
    "payrolldeduction/updatePayrollDeduction",
    async (data: IPayrollDeduction,thunkAPI) => {
        try {
            const response = await pmService.updatePayrollDeduction(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deletePayrollDeduction = createAsyncThunk(
    "payrolldeduction/deletePayrollDeduction",
    async (id: number,thunkAPI) => {
        try {
            const response = await pmService.deletePayrollDeduction(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const payrollDeductionSlice = createSlice({
    name: "payrolldeduction",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPayrollDeductions.fulfilled, (state, action) => {
            state.payrollDeductions = action.payload as IPayrollDeduction[];
        }).addCase(getPayrollDeductions.rejected,() => {
            toast.error("Error al obtener las deducciones de nomina");
        }).addCase(registerPayrollDeduction.fulfilled, (state, action) => {
            state.payrollDeductions.push(action.payload as IPayrollDeduction);
            toast.success("Deduciones de nomina registrado correctamente");
        }).addCase(registerPayrollDeduction.rejected, (state, action) => {
            toast.error("Error al registrar la deduccion de nomina");
        }).addCase(updatePayrollDeduction.fulfilled, (state, action) => {
            const index = state.payrollDeductions.findIndex((item) => item.id === action.payload.id);
            state.payrollDeductions[index] = action.payload as IPayrollDeduction;
            toast.success("Deduciones de nomina actualizado correctamente");
        }).addCase(updatePayrollDeduction.rejected, (state, action) => {
            toast.error("Error al actualizar el periodo de nomina");
        }).addCase(deletePayrollDeduction.fulfilled, (state, action) => {
            state.payrollDeductions = state.payrollDeductions.filter((item) => item.id !== action.payload);
            toast.success("Deduciones de nomina eliminado correctamente");
        }).addCase(deletePayrollDeduction.rejected, (state, action) => {
            toast.error("Error al eliminar la deduccion de nomina");
        });
    },
});

export const selectPayrollDeduction = (state: RootState) => state.payrollDeduction.payrollDeductions;

export default payrollDeductionSlice.reducer;