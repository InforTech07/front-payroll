import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IFamilyMember } from "@/interfaces/hrm";
import { toast } from "react-toastify";
import  { employeeService } from "@/services/employee-service";
import { apiServices } from "@/services/api-service";


export interface IFamilyMemberState {
    familyMembers: IFamilyMember[];
    loading: boolean;
    error: string;
}

const initialState: IFamilyMemberState = {
    familyMembers: [],
    loading: false,
    error: "",
};

export const getFamilyMembers = createAsyncThunk(
    "familymember/getFamilyMembers",
    async (employeeId:number | string) => {
        try {
            const response = await apiServices.get(`family_member/get_family_members/?employee=${employeeId}`)
            return response;
        } catch (error) {
            return error
        }
    }
);

export const registerFamilyMember = createAsyncThunk(
    "familymember/registerFamilyMember",
    async (data: IFamilyMember,thunkAPI) => {
        try {
            const response = await apiServices.post('family_member/', data)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateFamilyMember = createAsyncThunk(
    "familymember/updateFamilyMember",
    async (data: IFamilyMember,thunkAPI) => {
        try {
            const response = await apiServices.put(`family_member/${data.id}/`, data)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteFamilyMember = createAsyncThunk(
    "familymember/deleteFamilyMember",
    async (id: number,thunkAPI) => {
        try {
            const response = await apiServices.delete(`family_member/${id}/`)
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const familyMemberSlice = createSlice({
    name: "familymember",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getFamilyMembers.fulfilled, (state, action) => {
            state.familyMembers = action.payload as IFamilyMember[];
            state.loading = false;
        }).addCase(getFamilyMembers.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(registerFamilyMember.fulfilled, (state, action) => {
            state.familyMembers.push(action.payload as IFamilyMember);
            toast.success("FamilyMember registered successfully");
        }).addCase(registerFamilyMember.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(deleteFamilyMember.fulfilled, (state, action) => {
            state.familyMembers = state.familyMembers.filter((item) => item.id !== action.payload);
            toast.success("FamilyMember deleted successfully");
        }).addCase(deleteFamilyMember.rejected, (state, action) => {
            toast.error(action.error.message);
        }).addCase(updateFamilyMember.fulfilled, (state, action) => {
            const index = state.familyMembers.findIndex((item) => item.id === action.payload.id);
            state.familyMembers[index] = action.payload as IFamilyMember;
            toast.success("FamilyMember updated successfully");
        }).addCase(updateFamilyMember.rejected, (state, action) => {
            toast.error(action.error.message);
        });
        
    },
});

export const selectFamilyMember = (state: RootState) => state.familyMember.familyMembers;

export default familyMemberSlice.reducer;