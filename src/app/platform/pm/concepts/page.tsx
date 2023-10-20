"use client";
import React from 'react';
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateConcepts from '@/components/pm/form-concepts';
import TableConcepts from '@/components/pm/table-concepts';
import { useAppSelector } from "@/hooks/redux";
import TablePayrollConcept from '@/components/pm/table-concepts';
import FormCreateUpdatePayrollConcept from '@/components/pm/form-concepts';

function OperationPage(){
    //const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "pm-concept-drawer";
    return (
        <>
            <NavbarApp title='Conceptos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateConcepts idBtnDrawer={idBtnDrawer}/>
            <TablePayrollConcept/>
        </>
    );
}

export default OperationPage;