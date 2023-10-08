"use client";
import React from 'react';
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateConcepts from '@/components/pm/form-concepts';
import FormOperation from '@/components/pm/form-operation';
import TableConcepts from '@/components/pm/table-concepts';
import { useAppSelector } from "@/hooks/redux";
import TablePayrollOperation from '@/components/pm/table-operation';

function OperationPage(){
    //const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "pm-operation-drawer";
    return (
        <>
            <NavbarApp title='Operaciones de Nomina' idBtnDrawer={idBtnDrawer}/>
            <FormOperation idBtnDrawer={idBtnDrawer}/>
            <TablePayrollOperation/>
        </>
    );
}

export default OperationPage;