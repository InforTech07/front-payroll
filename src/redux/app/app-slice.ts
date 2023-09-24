import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IAppState {
    isEditMode: boolean;
    idEdit: string | number;
}

const initialState: IAppState = {
    isEditMode: false,
    idEdit: "",
}


export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setEditMode: (state, action: PayloadAction<string | number>) => {
            state.isEditMode = true;
            state.idEdit = action.payload;
        },
    },
});

export const { setEditMode } = appSlice.actions;
export default appSlice.reducer;