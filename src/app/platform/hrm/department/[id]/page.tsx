"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateDepartment from "@/components/hrm/form-department";
import TableDepartment from "@/components/hrm/table-department";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { getDepartments } from '@/redux/hrm/department-slice';
import { useEffect } from 'react';


function DepartmentPage() {
    const dispatch = useAppDispatch();
    const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "hrm-department-drawer";
    useEffect(() => {
        dispatch(getDepartments());
    }, []);
    return (
        <>
            <NavbarApp title='Departamentos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateDepartment idBtnDrawer={idBtnDrawer}/>
            <TableDepartment  departments={departments}/>
        </>
    );
}

export default DepartmentPage;