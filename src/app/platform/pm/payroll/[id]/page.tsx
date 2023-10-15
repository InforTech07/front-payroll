"use client";
import React from 'react'
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdate from '@/components/pm/form-payroll';
import TablePayroll from '@/components/pm/table-payroll';
import TablePayrollDetail from '@/components/pm/table-payroll-detail';
import { useRouter, useParams } from "next/navigation";


function PayrollPage(){
    const params = useParams();
    const id = params.id;
    const idBtnDrawer = "pm-payroll-drawer";
    return (
        <>
            <NavbarApp title='Nominas' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdate idBtnDrawer={idBtnDrawer}/>
            {
                id == undefined ? <TablePayroll/> : <TablePayrollDetail/>
            }
        </>
    );
}

export default PayrollPage