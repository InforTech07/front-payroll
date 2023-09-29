// import EmployeePage from "./[id]/page";
// export default EmployeePage;
"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateEmployee from "@/components/hrm/form-employee";
import TableEmployee from "@/components/hrm/table-employee";
import { useAppSelector } from "@/hooks/redux";


function EmployeePage() {
    const employees = useAppSelector(state => state.employee.employees);
    const idBtnDrawer = "hrm-employee-drawer";
    return (
        <>
            <NavbarApp title='Empleados' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateEmployee idBtnDrawer={idBtnDrawer}/>
            <TableEmployee employees={employees}/>
        </>
    );
}

export default EmployeePage;