import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollConcept } from "@/interfaces/pm";
import { toast } from "react-toastify";
import { apiServices } from "@/services/api-service";


export interface IPayrollConceptState {
    payrollConcepts:IPayrollConcept[];
    //payrollConcept: IPayrollConcept;
    loading: boolean;
    error: string;
}
3
const initialState:IPayrollConceptState = {
    payrollConcepts: [],
    loading: false,
    error: "",
};

export const getPayrollConcepts = createAsyncThunk(
    "payrollconcept/getPayrollConcepts",
    async (companyId: number) => {
        try {
            const response = await apiServices.get('payroll_concept/get_payroll_concepts_by_company/?company=' + companyId);
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerPayrollConcept = createAsyncThunk(
    "payrollconcept/registerPayrollConcept",
    async (data: IPayrollConcept,thunkAPI) => {
        try {
            const response = await apiServices.post('payroll_concept/', data);   
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updatePayrollConcept = createAsyncThunk(
    "payrollconcept/updatePayrollConcept",
    async (data: IPayrollConcept,thunkAPI) => {
        try {
            const response = await apiServices.put('payroll_concept/', data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deletePayrollConcept = createAsyncThunk(
    "payrollconcept/deletePayrollConcept",
    async (id: number,thunkAPI) => {
        try {
            const response = await apiServices.delete('payroll_concept/' + id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const payrollConceptSlice = createSlice({
    name: "payrollconcept",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPayrollConcepts.fulfilled, (state, action) => {
            state.payrollConcepts = action.payload as IPayrollConcept[];
        }).addCase(getPayrollConcepts.rejected,() => {
            toast.error("Error al obtener los conceptos de nomina");
        }).addCase(registerPayrollConcept.fulfilled, (state, action) => {
            state.payrollConcepts.push(action.payload as IPayrollConcept);
            toast.success("Concepto de nomina registrado correctamente");
        }).addCase(registerPayrollConcept.rejected, (state, action) => {
            toast.error("Error al registrar el Concepto de nomina");
        }).addCase(updatePayrollConcept.fulfilled, (state, action) => {
            const index = state.payrollConcepts.findIndex((payrollConcept) => payrollConcept.id === action.payload.id);
            state.payrollConcepts[index] = action.payload as IPayrollConcept;
            toast.success("Concepto de nomina actualizado correctamente");
        }).addCase(updatePayrollConcept.rejected, (state, action) => {
            toast.error("Error al actualizar el departamento");
        }).addCase(deletePayrollConcept.fulfilled, (state, action) => {
            state.payrollConcepts = state.payrollConcepts.filter((payrollConcept) => payrollConcept.id !== action.payload);
            toast.success("Concepto de nomina eliminado correctamente");
        }).addCase(deletePayrollConcept.rejected, (state, action) => {
            toast.error("Error al eliminar el Concepto de nomina");
        });
    },
});

export const selectPayrollConcepts = (state: RootState) => state.payrollConcept.payrollConcepts;

export default payrollConceptSlice.reducer;