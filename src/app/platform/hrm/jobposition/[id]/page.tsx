"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateJobPosition from "@/components/hrm/form-jobposition";
import TableJobPosition from "@/components/hrm/table-jobposition";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { getJobPositions } from '@/redux/hrm/job-position-slice';
import { useEffect } from 'react';
import { useSession } from "next-auth/react";


function JobPositionPage() {
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();
    const jobpositions = useAppSelector(state => state.jobPosition.jobPositions);
    const idBtnDrawer = "hrm-jposition-drawer";

    useEffect(() => {
        dispatch(getJobPositions(session?.user?.idCompany as number));
    }, []);
    return (
        <>
            <NavbarApp title='Puestos de trabajo' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateJobPosition  idBtnDrawer={idBtnDrawer}/>
            <TableJobPosition  jobpositions={jobpositions}/>
        </>
    );
}

export default JobPositionPage;