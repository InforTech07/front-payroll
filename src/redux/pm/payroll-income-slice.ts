import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollIncome } from "@/interfaces/pm";
import { toast } from "react-toastify";
import  { pmService } from "@/services/pm-service";


export interface IPayrollIncomeState {
    payrollIncomes:IPayrollIncome[];
    //payrollConcept: IPayrollConcept;
    loading: boolean;
    error: string;
}
3
const initialState:IPayrollIncomeState = {
    payrollIncomes: [],
    loading: false,
    error: "",
};

export const getPayrollIncomes = createAsyncThunk(
    "payrollincome/getPayrollIncomes",
    async () => {
        try {
            const response = await pmService.getPayrollPeriods();
            return response.results;
        } catch (error) {
            return error
        }
    }
);

export const registerPayrollIncome = createAsyncThunk(
    "payrollincome/registerPayrollIncome",
    async (data: IPayrollIncome,thunkAPI) => {
        try {
            const response = await pmService.registerPayrollIncome(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updatePayrollIncome = createAsyncThunk(
    "payrollincome/updatePayrollIncome",
    async (data: IPayrollIncome,thunkAPI) => {
        try {
            const response = await pmService.updatePayrollIncome(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deletePayrollIncome = createAsyncThunk(
    "payrollincome/deletePayrollIncome",
    async (id: number,thunkAPI) => {
        try {
            const response = await pmService.deletePayrollPeriod(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const payrollIncomeSlice = createSlice({
    name: "payrollincome",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPayrollIncomes.fulfilled, (state, action) => {
            state.payrollIncomes = action.payload as IPayrollIncome[];
        }).addCase(getPayrollIncomes.rejected,() => {
            toast.error("Error al obtener los periodos de nomina");
        }).addCase(registerPayrollIncome.fulfilled, (state, action) => {
            state.payrollIncomes.push(action.payload as IPayrollIncome);
            toast.success("Periodo de nomina registrado correctamente");
        }).addCase(registerPayrollIncome.rejected, (state, action) => {
            toast.error("Error al registrar el periodo de nomina");
        }).addCase(updatePayrollIncome.fulfilled, (state, action) => {
            const index = state.payrollIncomes.findIndex((payrollConcept) => payrollConcept.id === action.payload.id);
            state.payrollIncomes[index] = action.payload as IPayrollIncome;
            toast.success("Periodo de nomina actualizado correctamente");
        }).addCase(updatePayrollIncome.rejected, (state, action) => {
            toast.error("Error al actualizar el periodo de nomina");
        }).addCase(deletePayrollIncome.fulfilled, (state, action) => {
            state.payrollIncomes = state.payrollIncomes.filter((payrollIncome) => payrollIncome.id !== action.payload);
            toast.success("Periodo de nomina eliminado correctamente");
        }).addCase(deletePayrollIncome.rejected, (state, action) => {
            toast.error("Error al eliminar el periodo de nomina");
        });
    },
});

export const selectPayrollIncome = (state: RootState) => state.payrollIncome.payrollIncomes;

export default payrollIncomeSlice.reducer;