import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPayrollIncome } from "@/interfaces/pm";
import { IOvertime, ISalesCommission, IProductionBonus, ISolidarityContribution, ILoans } from "@/interfaces/pm";
import { toast } from "react-toastify";
import  { pmService } from "@/services/pm-service";


export interface IPayrollOperationState {
    overtimes: IOvertime[];
    salesCommissions: ISalesCommission[];
    productionBonuses: IProductionBonus[];
    solidarityContributions: ISolidarityContribution[];
    loans: ILoans[];
    //payrollConcept: IPayrollConcept;
    loading: boolean;
    error: string;
}
3
const initialState:IPayrollOperationState = {
    overtimes: [],
    salesCommissions: [],
    productionBonuses: [],
    solidarityContributions: [],
    loans: [],
    loading: false,
    error: "",
};

// overtime operations
export const registerOvertime = createAsyncThunk(
    "payrolloperation/registerOvertime",
    async (data: IOvertime,thunkAPI) => {
        try {
            const response = await pmService.RegisterOvertime(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// sales commission operations

export const registerSalesCommission = createAsyncThunk(
    "payrolloperation/registerSalesCommission",
    async (data: ISalesCommission,thunkAPI) => {
        try {
            const response = await pmService.registerSalesCommission(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);



// production bonus operations

export const registerProductionBonus = createAsyncThunk(
    "payrolloperation/registerProductionBonus",
    async (data: IProductionBonus,thunkAPI) => {
        try {
            const response = await pmService.registerProductionBonus(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// solidarity contribution operations

export const registerSolidarityContribution = createAsyncThunk(
    "payrolloperation/registerSolidarityContribution",
    async (data: ISolidarityContribution,thunkAPI) => {
        try {
            const response = await pmService.registerSolidarityContribution(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// loans operations

export const registerLoans = createAsyncThunk(
    "payrolloperation/registerLoans",
    async (data: ILoans,thunkAPI) => {
        try {
            const response = await pmService.registerLoans(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const payrollOperationSlice = createSlice({
    name: "payrolloperation",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(registerOvertime.fulfilled, (state, action) => {
            state.overtimes.push(action.payload as IOvertime);
            toast.success("Tiempo extra registrado correctamente");
        }).addCase(registerOvertime.rejected, (state, action) => {
            toast.error("Error al registrar el tiempo extra");
        }).addCase(registerSalesCommission.fulfilled, (state, action) => {
            state.salesCommissions.push(action.payload as ISalesCommission);
            toast.success("Comisión de ventas registrada correctamente");
        }).addCase(registerSalesCommission.rejected, (state, action) => {
            toast.error("Error al registrar la comisión de ventas");
        }).addCase(registerProductionBonus.fulfilled, (state, action) => {
            state.productionBonuses.push(action.payload as IProductionBonus);
            toast.success("Bono de producción registrado correctamente");
        }).addCase(registerProductionBonus.rejected, (state, action) => {
            toast.error("Error al registrar el bono de producción");
        }).addCase(registerSolidarityContribution.fulfilled, (state, action) => {
            state.solidarityContributions.push(action.payload as ISolidarityContribution);
            toast.success("Contribución solidaria registrada correctamente");
        }).addCase(registerSolidarityContribution.rejected, (state, action) => {
            toast.error("Error al registrar la contribución solidaria");
        }).addCase(registerLoans.fulfilled, (state, action) => {
            state.loans.push(action.payload as ILoans);
            toast.success("Préstamo registrado correctamente");
        }).addCase(registerLoans.rejected, (state, action) => {
            toast.error("Error al registrar el préstamo");
        });

    },
});

export const selectPayrollOperation = (state: RootState) => state.payrollOperation.overtimes;

export default payrollOperationSlice.reducer;