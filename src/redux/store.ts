import { configureStore } from "@reduxjs/toolkit";
import { departmentSlice } from "./hrm/department-slice";
import { jobPositionSlice } from "./hrm/job-position-slice";
import { employeeSlice } from "./hrm/employee-slice";
import { payrollConceptSlice } from "./pm/payroll-concept-slice";
import { payrollPeriodSlice } from "./pm/payroll-period-slice";
import { employeeDocumentSlice } from "./hrm/employee-doc-slice";
import { familyMemberSlice } from "./hrm/family-member-slice";
import { payrollSlice } from "./pm/payroll-slice";

export const store = configureStore({
    reducer: {
        department: departmentSlice.reducer,
        jobPosition: jobPositionSlice.reducer,
        employee: employeeSlice.reducer,
        employeeDocument: employeeDocumentSlice.reducer,
        payrollConcept: payrollConceptSlice.reducer,
        payrollPeriod: payrollPeriodSlice.reducer,
        familyMember: familyMemberSlice.reducer,
        payroll: payrollSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;