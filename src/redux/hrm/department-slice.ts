import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IDepartment } from "@/interfaces/hrm";
import { toast } from "react-toastify";
import { apiServices } from "@/services/api-service";


export interface IDepartmentState {
    departments: IDepartment[];
    department: IDepartment;
    loading: boolean;
    error: string;
}

const initialState: IDepartmentState = {
    departments: [],
    department: {
        name: "",
        description: "",
    },
    loading: false,
    error: "",
};

export const getDepartments = createAsyncThunk(
    "department/getDepartments",
    async (companyId: number) => {
        try {
            const response = await apiServices.get(`department/get_departments_by_company/?company=${companyId}`)
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerDepartment = createAsyncThunk(
    "department/registerDepartment",
    async (data: IDepartment,thunkAPI) => {
        try {
            const response = await apiServices.post('department/', data)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateDepartment = createAsyncThunk(
    "department/updateDepartment",
    async (data: IDepartment,thunkAPI) => {
        try {
            const response = await apiServices.put(`department/${data.id}/`, data)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteDepartment = createAsyncThunk(
    "department/deleteDepartment",
    async (id: number,thunkAPI) => {
        try {
            const response = await apiServices.delete(`department/${id}/`)
            if(response){
                return id;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getDepartments.fulfilled, (state, action) => {
            state.departments = action.payload as IDepartment[];
        }).addCase(getDepartments.rejected,() => {
            toast.error("Error al obtener los departamentos");
        }).addCase(registerDepartment.fulfilled, (state, action) => {
            state.departments.push(action.payload as IDepartment);
            toast.success("Departamento registrado correctamente");
        }).addCase(registerDepartment.rejected, (state, action) => {
            toast.error("Error al registrar el departamento");
        }).addCase(updateDepartment.fulfilled, (state, action) => {
            const index = state.departments.findIndex((department) => department.id === action.payload.id);
            state.departments[index] = action.payload as IDepartment;
            toast.success("Departamento actualizado correctamente");
        }).addCase(updateDepartment.rejected, (state, action) => {
            toast.error("Error al actualizar el departamento");
        }).addCase(deleteDepartment.fulfilled, (state, action) => {
            state.departments = state.departments.filter((department) => department.id !== action.payload);
            toast.success("Departamento eliminado correctamente");
        }).addCase(deleteDepartment.rejected, (state, action) => {
            toast.error("Error al eliminar el departamento");
        });
    },
});

export const selectDepartments = (state: RootState) => state.department.departments;

export default departmentSlice.reducer;