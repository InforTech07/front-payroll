import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IEmployee } from "@/interfaces/hrm";
import { toast } from "react-toastify";
import  { employeeService } from "@/services/employee-service";


export interface IEmployeState {
    employees: IEmployee[];
    employee: IEmployee;
    loading: boolean;
    error: string;
}

const initialState: IEmployeState = {
    employees: [],
    employee: {} as IEmployee,
    loading: false,
    error: "",
};

export const getEmployees = createAsyncThunk(
    "employee/getEmployees",
    async () => {
        try {
            const response = await employeeService.getEmployees();
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerEmployee = createAsyncThunk(
    "employee/registerEmployee",
    async (data: IEmployee,thunkAPI) => {
        try {
            const response = await employeeService.registerEmployee(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateEmployee = createAsyncThunk(
    "employee/updateEmployee",
    async (data: IEmployee,thunkAPI) => {
        try {
            const response = await employeeService.updateEmployee(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteEmployee = createAsyncThunk(
    "employee/deleteEmployee",
    async (id: number,thunkAPI) => {
        try {
            const response = await employeeService.deleteEmployee(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const employeeSlice = createSlice({
    name: "employee",
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
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            state.employees = action.payload as IEmployee[];
            state.loading = false;
        }).addCase(getEmployees.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(registerEmployee.fulfilled, (state, action) => {
            state.employees.push(action.payload as IEmployee);
            toast.success("Employee registered successfully");
        }).addCase(registerEmployee.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(updateEmployee.fulfilled, (state, action) => {
            const index = state.employees.findIndex((item: any) => item.id === action.payload.id);
            state.employees[index] = action.payload as IEmployee;
            toast.success("Employee updated successfully");
        }).addCase(updateEmployee.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(deleteEmployee.fulfilled, (state, action) => {
            const index = state.employees.findIndex((item: any) => item.id === action.payload);
            state.employees.splice(index, 1);
        }).addCase(deleteEmployee.rejected, (state, action) => {
            toast.error(action.error.message);
        });
        
    },
});

export const selectEmployee = (state: RootState) => state.employee.employees;

export default employeeSlice.reducer;