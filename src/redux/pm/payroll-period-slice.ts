import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollPeriod } from "@/interfaces/pm";
import { toast } from "react-toastify";
import { apiServices } from "@/services/api-service";


export interface IPayrollPeriodState {
    payrollPeriods:IPayrollPeriod[];
    //payrollConcept: IPayrollConcept;
    loading: boolean;
    error: string;
}
const initialState:IPayrollPeriodState = {
    payrollPeriods: [],
    loading: false,
    error: "",
};

export const getPayrollPeriods = createAsyncThunk(
    "payrollperiod/getPayrollPeriods",
    async (companyId: number) => {
        try {
            const response = await apiServices.get('payroll_period/get_payroll_periods/?company='+ companyId);
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerPayrollPeriod = createAsyncThunk(
    "payrollperiod/registerPayrollPeriod",
    async (data: IPayrollPeriod,thunkAPI) => {
        try {
            const response = await apiServices.post('payroll_period/', data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updatePayrollPeriod = createAsyncThunk(
    "payrollperiod/updatePayrollPeriod",
    async (data: IPayrollPeriod,thunkAPI) => {
        try {
            const response = await apiServices.put('payroll_period/', data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deletePayrollPeriod = createAsyncThunk(
    "payrollperiod/deletePayrollPeriod",
    async (id: number,thunkAPI) => {
        try {
            const response = await apiServices.delete('payroll_period/' + id); 
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const payrollPeriodSlice = createSlice({
    name: "payrollperiod",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPayrollPeriods.fulfilled, (state, action) => {
            state.payrollPeriods = action.payload as IPayrollPeriod[];
        }).addCase(getPayrollPeriods.rejected,() => {
            toast.error("Error al obtener los periodos de nomina");
        }).addCase(registerPayrollPeriod.fulfilled, (state, action) => {
            state.payrollPeriods.push(action.payload as IPayrollPeriod);
            toast.success("Periodo de nomina registrado correctamente");
        }).addCase(registerPayrollPeriod.rejected, (state, action) => {
            toast.error("Error al registrar el periodo de nomina");
        }).addCase(updatePayrollPeriod.fulfilled, (state, action) => {
            const index = state.payrollPeriods.findIndex((payrollConcept) => payrollConcept.id === action.payload.id);
            state.payrollPeriods[index] = action.payload as IPayrollPeriod;
            toast.success("Periodo de nomina actualizado correctamente");
        }).addCase(updatePayrollPeriod.rejected, (state, action) => {
            toast.error("Error al actualizar el periodo de nomina");
        }).addCase(deletePayrollPeriod.fulfilled, (state, action) => {
            state.payrollPeriods = state.payrollPeriods.filter((payrollConcept) => payrollConcept.id !== action.payload);
            toast.success("Periodo de nomina eliminado correctamente");
        }).addCase(deletePayrollPeriod.rejected, (state, action) => {
            toast.error("Error al eliminar el periodo de nomina");
        });
    },
});

export const selectPayrollPeriod = (state: RootState) => state.payrollPeriod.payrollPeriods;

export default payrollPeriodSlice.reducer;