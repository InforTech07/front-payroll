import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IJobPosition } from "@/interfaces/hrm";
import { toast } from "react-toastify";
import  { employeeService } from "@/services/employee-service";


export interface IJobPositionState {
    jobPositions: IJobPosition[];
    jobPosition: IJobPosition;
    loading: boolean;
    error: string;
}

const initialState: IJobPositionState = {
    jobPositions: [],
    jobPosition: {
        name: "",
        description: "",
    },
    loading: false,
    error: "",
};

export const getJobPositions = createAsyncThunk(
    "jobPosition/getJobPositions",
    async () => {
        try {
            const response = await employeeService.getJobPositions();
            return response.results;
        } catch (error) {
            return error
        }
    }
);

export const registerJobPosition = createAsyncThunk(
    "jobPosition/registerJobPosition",
    async (data: IJobPosition,thunkAPI) => {
        try {
            const response = await employeeService.registerJobPosition(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateJobPosition = createAsyncThunk(
    "jobPosition/updateDepartment",
    async (data: IJobPosition,thunkAPI) => {
        try {
            const response = await employeeService.updateJobPosition(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteJobPosition = createAsyncThunk(
    "jobPosition/deleteDepartmen",
    async (id: number,thunkAPI) => {
        try {
            const response = await employeeService.deleteJobPosition(id);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const jobPositionSlice = createSlice({
    name: "jobPosition",
    initialState,
    reducers: {
        setJobPosition: (state, { payload }: PayloadAction<IJobPosition>) => {
            state.jobPosition = payload;
        },
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
        builder.addCase(getJobPositions.fulfilled, (state, action) => {
            state.jobPositions = action.payload as IJobPosition[];
            state.loading = false;
        }).addCase(getJobPositions.rejected, (state, action) => {
            toast.error("Error al obtener los cargos");
        }).addCase(registerJobPosition.fulfilled, (state, action) => {
            state.jobPositions.push(action.payload as IJobPosition);
            toast.success("Cargo registrado");
        }).addCase(registerJobPosition.rejected, (state, action) => {
            toast.error("Error al registrar el cargo");
        }).addCase(updateJobPosition.fulfilled, (state, action) => {
            const index = state.jobPositions.findIndex((item: any) => item.id === action.payload.id);
            state.jobPositions[index] = action.payload as IJobPosition;
            toast.success("Cargo actualizado");
        }).addCase(updateJobPosition.rejected, (state, action) => {
            toast.error("Error al actualizar el cargo");
        }).addCase(deleteJobPosition.fulfilled, (state, action) => {
            const index = state.jobPositions.findIndex((item: any) => item.id === action.payload);
            state.jobPositions.splice(index, 1);
            toast.success("Cargo eliminado");
        }).addCase(deleteJobPosition.rejected, (state, action) => {
            toast.error("Error al eliminar el cargo");
        }); 
    },
});

export const selectJobPosition = (state: RootState) => state.jobPosition.jobPositions;

export default jobPositionSlice.reducer;