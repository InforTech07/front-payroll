import { configureStore } from "@reduxjs/toolkit";
import { departmentSlice } from "./hrm/department-slice";
import { jobPositionSlice } from "./hrm/job-position-slice";
import { employeeSlice } from "./hrm/employee-slice";
import { payrollConceptSlice } from "./pm/payroll-concept-slice";
import { payrollPeriodSlice } from "./pm/payroll-period-slice";
import { payrollIncomeSlice } from "./pm/payroll-income-slice";
import { payrollDeductionSlice } from "./pm/payroll-deduction-slice";

export const store = configureStore({
    reducer: {
        department: departmentSlice.reducer,
        jobPosition: jobPositionSlice.reducer,
        employee: employeeSlice.reducer,
        payrollConcept: payrollConceptSlice.reducer,
        payrollPeriod: payrollPeriodSlice.reducer,
        payrollIncome: payrollIncomeSlice.reducer,
        payrollDeduction: payrollDeductionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;