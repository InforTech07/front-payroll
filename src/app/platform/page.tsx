"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { getDepartments } from "@/redux/hrm/department-slice";
import { getJobPositions } from "@/redux/hrm/job-position-slice";
import { getEmployees } from "@/redux/hrm/employee-slice";
import { getPayrollPeriods } from "@/redux/pm/payroll-period-slice";
import { useRouter } from "next/navigation";

import React, { ReactNode } from 'react';
import Link from "next/link";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { apiServices } from "@/services/api-service";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ultimas 7 nóminas',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total de nominas',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

function MyChart() {
    return <Bar options={options} data={data} />;
}



type DashboardProps = {
    name: string;
}
function DashboardAdmin({name}: DashboardProps){
    const {data: session, status} = useSession();
    const [countDepartments, setCountDepartments] = React.useState<number>(0);
    const [countEmployees, setCountEmployees] = React.useState<number>(0);
    const [countJobPositions, setCountJobPositions] = React.useState<number>(0);

    const getDataDashboard = async () => {
        const departaments = await apiServices.get('department/get_count_departments_by_company/?company=' + session?.user?.idCompany);
        const employees = await apiServices.get('employee/get_count_employees_by_company/?company=' + session?.user?.idCompany);
        const jobpositions = await apiServices.get('job-position/get_count_job_positions_by_company/?company=' + session?.user?.idCompany);
        setCountDepartments(departaments.count);
        setCountEmployees(employees.count);
        setCountJobPositions(jobpositions.count);
    }

    useEffect(() => {
        getDataDashboard();
    }, []);
    return(
        <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">{name}</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{countDepartments} Departamentos</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        Los departamentos son las areas de trabajo de tu empresa, puedes crear tantos como necesites.
                    </p>
                    <Link href="/platform/hrm/department" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        <span className="mx-1">ir a departamentos</span>
                        <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>

                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{countEmployees} Empleados</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        Los empleados son los trabajadores de tu empresa, puedes crear tantos como necesites.
                    </p>
                    <Link href="/platform/hrm/employee" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        <span className="mx-1">ir a empleados</span>
                        <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>

                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{countJobPositions} Cargos</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        Los cargos son los puestos de trabajo de tu empresa, puedes crear tantos como necesites.
                    </p>

                    <Link href="/platform/hrm/jobposition" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        <span className="mx-1">ir a cargos</span>
                        <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
                </div>
            </section>

            <div className="container px-6 py-10 h-96 flex items-center justify-center gap-8">
            <MyChart />
            <MyChart />
        </div>
    </>

    )
}

function DashboardUser(){
    const {data: session, status} = useSession();
    const urlAvatar = 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return(
        <section className="h-full bg-white dark:bg-gray-900 rounded-md">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
        <div className="lg:w-1/2 lg:mx-10">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Bienvenido</h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Tu espacio de trabajo, donde podras ver tus nominas, tus vacaciones, tus permisos y mucho mas.
                </p>
            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={session?.user?.image ? session.user.image : urlAvatar} alt="avatar"/>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            {session?.user?.name}
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">563-7401</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">{session?.user?.email}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}



function PlatformPage(){
    const {data: session, status} = useSession();
    const dispatch = useAppDispatch();
    const router = useRouter();

    // const getData = async () => {
    //     if(session?.user?.idCompany !== undefined){
    //         dispatch(getDepartments(session?.user?.idCompany as number));
    //         dispatch(getJobPositions(session?.user?.idCompany as number));
    //         dispatch(getEmployees(session?.user?.idCompany as number));
    //         dispatch(getPayrollPeriods(session?.user?.idCompany as number));
    //     }
    // }


    useEffect(() => {
    }, []);
    return(
        <>
        {
            session && session?.user?.role === "admin" && <DashboardAdmin name={session?.user?.name as string} /> 
        }
        {
            session && session?.user?.role === "user" && <DashboardUser /> 
        }
        </> 
    )
}

export default PlatformPage;