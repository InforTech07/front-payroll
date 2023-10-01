"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormUpdateEmployee from "@/components/hrm/form-employee-edit";
import TableEmployeeDocuments from '@/components/hrm/table-employee-doc';
import TableEmployee from "@/components/hrm/table-employee";
import TableFamilyMember from '@/components/hrm/table-family-member';
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { useEffect } from 'react';
import { getDepartments } from '@/redux/hrm/department-slice';
import { getEmployees } from '@/redux/hrm/employee-slice';
import { getJobPositions } from '@/redux/hrm/job-position-slice';



function EmployeePage() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector(state => state.employee.employees);
    const idBtnDrawer = "hrm-employee-drawer";

    useEffect(() => {
        //dispatch(getEmployees());
        dispatch(getDepartments());
        dispatch(getJobPositions());
    }, []);

    return (
        <>
            <NavbarApp title='Detalles de empleado' idBtnDrawer={idBtnDrawer}/>
            <FormUpdateEmployee idBtnDrawer={idBtnDrawer}/>
            <div className="divider"></div>
            <TableEmployeeDocuments/>
            <div className="divider"></div>
            <TableFamilyMember/>
        </>
    );
}

export default EmployeePage;