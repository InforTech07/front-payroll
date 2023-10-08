// import EmployeePage from "./[id]/page";
// export default EmployeePage;
"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateEmployee from "@/components/hrm/form-employee";
import TableEmployee from "@/components/hrm/table-employee";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { useEffect } from 'react';
import { getDepartments } from '@/redux/hrm/department-slice';
import { getEmployees } from '@/redux/hrm/employee-slice';
import { getJobPositions } from '@/redux/hrm/job-position-slice';
import { useSession } from 'next-auth/react';


function EmployeePage() {
    const {data: session, status} = useSession();
    const dispatch = useAppDispatch();
    const idBtnDrawer = "hrm-employee-drawer";
    //dispatch(getEmployees(session?.user?.idCompany as number));
    // useEffect(() => {
    //     dispatch(getDepartments());
    //     dispatch(getJobPositions());
    // }, []);
    return (
        <>
            <NavbarApp title='Empleados' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateEmployee idBtnDrawer={idBtnDrawer}/>
            <TableEmployee/>
        </>
    );
}

export default EmployeePage;