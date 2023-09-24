import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IDepartment } from "@/interfaces/employee";
import { toast } from "react-toastify";
import  { employeeService } from "@/services/employee-service";


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
    async () => {
        try {
            const response = await employeeService.getDepartments();
            return response.results;
        } catch (error) {
            return error
        }
    }
);

export const registerDepartment = createAsyncThunk(
    "department/registerDepartment",
    async (data: IDepartment,thunkAPI) => {
        try {
            const response = await employeeService.registerDepartment(data);
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
            const response = await employeeService.updateDepartment(data);
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
            const response = await employeeService.deleteDepartment(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const departmentSlice = createSlice({
    name: "department",
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