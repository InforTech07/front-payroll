"use client";
import { use, useEffect, useState } from "react";
import ContainerApp from "@/components/container/container-app";
import NavbarApp from '@/components/navs/navbar-app';
import FormRegisterDepartment from "@/components/ui/employee/form-department";
import { IDepartment } from "@/entitys/employee";
import { employeeService } from "@/services/employee-service";
import TableDepartment from "@/components/ui/employee/table-department";

function DepartmentPage() {
    const [data, setData] = useState<IDepartment[]>([]);

    useEffect(() => {
        employeeService.getDepartments().then(res => {
            if(res){
                setData(res.results);
                return;
            }
        }).catch(err => {
            console.log(err);
            return;
        });
    }, []);
  return (
    <ContainerApp>
        <div className='flex flex-col md:space-x-4'>
            <NavbarApp title='Departamento'/>
            <FormRegisterDepartment />
            <TableDepartment data={data}/>
        </div>
    </ContainerApp>
  );
}

export default DepartmentPage;