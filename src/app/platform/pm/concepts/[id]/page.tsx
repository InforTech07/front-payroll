"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateConcepts from '@/components/pm/form-concepts';
import TableConcepts from '@/components/pm/table-concepts';
import { useAppSelector } from "@/hooks/redux";


function ConceptsPage() {
    const payrollConcepts = useAppSelector(state => state.payrollConcept.payrollConcepts);
    const idBtnDrawer = "pm-concepts-drawer";
    return (
        <>
            <NavbarApp title='Conceptos de nomina' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateConcepts idBtnDrawer={idBtnDrawer}/>
            <TableConcepts  payrollConcepts={payrollConcepts}/>
        </>
    );
}

export default ConceptsPage;