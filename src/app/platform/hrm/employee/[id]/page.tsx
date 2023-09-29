"use client";
import NavbarApp from '@/components/navs/navbar-app';
import FormUpdateEmployee from "@/components/hrm/form-employee-edit";
import TableEmployeeDocuments from '@/components/hrm/table-employee-doc';
import TableEmployee from "@/components/hrm/table-employee";
import TableFamilyMember from '@/components/hrm/table-family-member';
import { useAppSelector } from "@/hooks/redux";
import ModalUploadFile from '@/components/hrm/modal-uploud';


function EmployeePage() {
    const employees = useAppSelector(state => state.employee.employees);
    const idBtnDrawer = "hrm-employee-drawer";
    return (
        <>
            <NavbarApp title='Detalles de empleado' idBtnDrawer={idBtnDrawer}/>
            <FormUpdateEmployee idBtnDrawer={idBtnDrawer}/>
            <div className="divider"></div>
            <TableEmployeeDocuments/>
            <div className="divider"></div>
            <TableFamilyMember/>
        </>
    );
}

export default EmployeePage;