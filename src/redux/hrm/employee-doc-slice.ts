import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IEmployeeDocument } from "@/interfaces/hrm";
import { toast } from "react-toastify";
import  { employeeService } from "@/services/employee-service";


export interface IEmployeDocumentState {
    employeeDocuments: IEmployeeDocument[];
    loading: boolean;
    error: string;
}

const initialState: IEmployeDocumentState = {
    employeeDocuments: [],
    loading: false,
    error: "",
};

export const getEmployeeDocuments = createAsyncThunk(
    "employeedocument/getEmployeeDocuments",
    async (employeeId:number | string) => {
        try {
            const response = await employeeService.getEmployeeDocuments(employeeId as number);
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerEmployeeDocument = createAsyncThunk(
    "employeedocument/registerEmployeeDocument",
    async (data: IEmployeeDocument,thunkAPI) => {
        try {
            const response = await employeeService.registerEmployeeDocument(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// export const updateEmployee = createAsyncThunk(
//     "employee/updateEmployee",
//     async (data: IEmployee,thunkAPI) => {
//         try {
//             const response = await employeeService.updateEmployee(data);
//             return response;
//         } catch (error) {
//             console.log(error);
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

export const deleteEmployeeDocument = createAsyncThunk(
    "employeedocument/deleteEmployeeDocument",
    async (id: number,thunkAPI) => {
        try {
            const response = await employeeService.deleteEmployeeDocument(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const employeeDocumentSlice = createSlice({
    name: "employeedocument",
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
        builder.addCase(getEmployeeDocuments.fulfilled, (state, action) => {
            state.employeeDocuments = action.payload as IEmployeeDocument[];
            state.loading = false;
        }).addCase(getEmployeeDocuments.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(registerEmployeeDocument.fulfilled, (state, action) => {
            state.employeeDocuments.push(action.payload as IEmployeeDocument);
            toast.success("Employee registered successfully");
        }).addCase(registerEmployeeDocument.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(deleteEmployeeDocument.fulfilled, (state, action) => {
            state.employeeDocuments = state.employeeDocuments.filter((employeeDocument) => employeeDocument.id !== action.payload);
            toast.success("Employee deleted successfully");
        })
        .addCase(deleteEmployeeDocument.rejected, (state, action) => {
            toast.error(action.error.message);
        });
        
    },
});

export const selectEmployeeDocument = (state: RootState) => state.employee.employees;

export default employeeDocumentSlice.reducer;