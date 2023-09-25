"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateJobPosition from "@/components/hrm/form-jobposition";
import TableJobPosition from "@/components/hrm/table-jobposition";
import { useAppSelector } from "@/hooks/redux";


function JobPositionPage() {
    const jobpositions = useAppSelector(state => state.jobPosition.jobPositions);
    const idBtnDrawer = "hrm-jposition-drawer";
    return (
        <>
            <NavbarApp title='Puestos de trabajo' idBtnDrawer={idBtnDrawer}/>
            <FormCreateUpdateJobPosition  idBtnDrawer={idBtnDrawer}/>
            <TableJobPosition  jobpositions={jobpositions}/>
        </>
    );
}

export default JobPositionPage;