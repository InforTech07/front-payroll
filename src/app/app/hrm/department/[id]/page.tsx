"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateDepartment from "@/components/hrm/form-department";
import TableDepartment from "@/components/hrm/table-department";
import { useAppSelector } from "@/hooks/redux";


function DepartmentPage() {
    const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "hrm-department-drawer";
    return (
        <>
            <NavbarApp title='Departamentos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateDepartment idBtnDrawer={idBtnDrawer}/>
            <TableDepartment  departments={departments}/>
        </>
    );
}

export default DepartmentPage;