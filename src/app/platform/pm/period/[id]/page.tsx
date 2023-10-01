"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdatePeriod from '@/components/pm/form-period';
import TablePeriod from '@/components/pm/table-period';
import { useAppSelector } from "@/hooks/redux";


function PeriodPage() {
    const payrollPeriods = useAppSelector(state => state.payrollPeriod.payrollPeriods);
    const idBtnDrawer = "pm-concepts-drawer";
    return (
        <>
            <NavbarApp title='Periodos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdatePeriod idBtnDrawer={idBtnDrawer}/>
            <TablePeriod payrollPeriods={payrollPeriods}/>
        </>
    );
}

export default PeriodPage;