"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateDepartment from "@/components/hrm/form-department";
import TableEmployee from "@/components/hrm/table-employee";
import { useAppSelector } from "@/hooks/redux";


function EmployeePage() {
    //const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "hrm-employee-drawer";
    return (
        <>
            <NavbarApp title='Empleados' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateDepartment idBtnDrawer={idBtnDrawer}/>
            <TableEmployee />
        </>
    );
}

export default EmployeePage;