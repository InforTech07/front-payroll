"use client";
import DepartmentPage from "./[id]/page";

export default DepartmentPage;
// import {useEffect, useState } from "react";
// import ContainerApp from "@/components/container/container-app";
// import NavbarApp from '@/components/navs/navbar-app';
// import FormCreateUpdateDepartment from "@/components/ui/employee/form-department";
// import TableDepartment from "@/components/ui/employee/table-department";
// import { useAppSelector } from "@/hooks/redux";
// import { useAppDispatch } from "@/hooks/redux";
// import { getDepartments } from "@/redux/employee/department-slice";


// function DepartmentPage() {
//     const departments = useAppSelector(state => state.department.departments);
//     const dispatch = useAppDispatch();

//     // useEffect(() => {
//     //   dispatch(getDepartments());
//     // }, []);
//   return (
//     <ContainerApp>
//         <NavbarApp title='Departamento'/>
//         <FormCreateUpdateDepartment/>
//         <TableDepartment  departments={departments}/>
//     </ContainerApp>
//   );
// }

// export default DepartmentPage;