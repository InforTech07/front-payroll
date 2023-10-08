"use client";

import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdatePeriod from '@/components/pm/form-period';
import TablePeriod from '@/components/pm/table-period';
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { getPayrollPeriods } from '@/redux/pm/payroll-period-slice';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';


function PeriodPage() {
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();
    const idBtnDrawer = "pm-concepts-drawer";

    // useEffect(() => {
    //     console.log(session?.user?.idCompany);
    //     dispatch(getPayrollPeriods(session?.user?.idCompany as number));
    // }, []);
    return (
        <>
            <NavbarApp title='Periodos' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdatePeriod idBtnDrawer={idBtnDrawer}/>
            <TablePeriod/>
        </>
    );
}

export default PeriodPage;