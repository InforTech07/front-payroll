"use client";
import {useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ContainerApp from "@/components/container/container-app";
import NavbarApp from '@/components/navs/navbar-app';
import FormCreateUpdateDepartment from "@/components/ui/employee/form-department";
import TableDepartment from "@/components/ui/employee/table-department";
import { useAppSelector } from "@/hooks/redux";


function DepartmentPage() {
    const departments = useAppSelector(state => state.department.departments);
  return (
    <ContainerApp>
        <NavbarApp title='Departamento'/>
        <FormCreateUpdateDepartment />
        <TableDepartment  departments={departments}/>
    </ContainerApp>
  );
}

export default DepartmentPage;