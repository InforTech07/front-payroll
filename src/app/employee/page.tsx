"use client";
import ContainerApp from "@/components/container/container-app";
import NavbarApp from '@/components/navs/navbar-app';
import Table from "@/components/ui/table";
import FormRegisterEmployee from "@/components/ui/employee/form-register";
import { useAppDispatch } from "@/hooks/redux";
import { getDepartments } from "@/redux/employee/department-slice";


function EmployeesPage() {
  // const dispatch = useAppDispatch();
  // dispatch(getDepartments());

  return (
    <ContainerApp>
        <div className='flex flex-col gap-4 md:space-x-4'>
            <NavbarApp title='Empleados'/>
            <FormRegisterEmployee />
            <Table />
        </div>
    </ContainerApp>
  );
}

export default EmployeesPage;