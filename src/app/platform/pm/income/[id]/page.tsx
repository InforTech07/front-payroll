"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateConcepts from '@/components/pm/form-concepts';
import TableConcepts from '@/components/pm/table-concepts';
import { useAppSelector } from "@/hooks/redux";


function IncomePage() {
    const departments = useAppSelector(state => state.department.departments);
    const idBtnDrawer = "pm-concepts-drawer";
    return (
        <>
            <NavbarApp title='Conceptos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateConcepts idBtnDrawer={idBtnDrawer}/>
            <TableConcepts  departments={departments}/>
        </>
    );
}

export default IncomePage;