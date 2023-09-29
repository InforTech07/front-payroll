import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollConcept } from "@/interfaces/pm";
import { toast } from "react-toastify";
import  { pmService } from "@/services/pm-service";


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
    async () => {
        try {
            const response = await pmService.getPayrollConcepts();
            return response.results;
        } catch (error) {
            return error
        }
    }
);

export const registerPayrollConcept = createAsyncThunk(
    "payrollconcept/registerPayrollConcept",
    async (data: IPayrollConcept,thunkAPI) => {
        try {
            const response = await pmService.registerPayrollConcept(data);
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
            const response = await pmService.updatePayrollConcept(data);
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
            const response = await pmService.deletePayrollConcept(id);
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
    reducers: {
        // setDepartments: (state, { payload }: PayloadAction<IDepartment[]>) => {
        //     state.departments = payload;
        // },
        // setDepartment: (state, { payload }: PayloadAction<IDepartment>) => {
        //     state.department = payload;
        // },
        // setLoading: (state, { payload }: PayloadAction<boolean>) => {
        //     state.loading = payload;
        // },
        // setError: (state, { payload }: PayloadAction<string>) => {
        //     state.error = payload;
        // },
    },
    extraReducers(builder) {
        builder.addCase(getPayrollConcepts.fulfilled, (state, action) => {
            state.payrollConcepts = action.payload as IPayrollConcept[];
        }).addCase(getPayrollConcepts.rejected,() => {
            toast.error("Error al obtener los departamentos");
        }).addCase(registerPayrollConcept.fulfilled, (state, action) => {
            state.payrollConcepts.push(action.payload as IPayrollConcept);
            toast.success("Departamento registrado correctamente");
        }).addCase(registerPayrollConcept.rejected, (state, action) => {
            toast.error("Error al registrar el departamento");
        }).addCase(updatePayrollConcept.fulfilled, (state, action) => {
            const index = state.payrollConcepts.findIndex((payrollConcept) => payrollConcept.id === action.payload.id);
            state.payrollConcepts[index] = action.payload as IPayrollConcept;
            toast.success("Departamento actualizado correctamente");
        }).addCase(updatePayrollConcept.rejected, (state, action) => {
            toast.error("Error al actualizar el departamento");
        }).addCase(deletePayrollConcept.fulfilled, (state, action) => {
            state.payrollConcepts = state.payrollConcepts.filter((payrollConcept) => payrollConcept.id !== action.payload);
            toast.success("Departamento eliminado correctamente");
        }).addCase(deletePayrollConcept.rejected, (state, action) => {
            toast.error("Error al eliminar el departamento");
        });
    },
});

export const selectPayrollConcepts = (state: RootState) => state.payrollConcept.payrollConcepts;

export default payrollConceptSlice.reducer;