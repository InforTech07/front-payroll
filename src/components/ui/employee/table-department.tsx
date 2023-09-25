"use client";
import { use, useEffect, useState } from "react";
import { IDepartment, IJobPosition } from "@/interfaces/hrm";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { getDepartments, deleteDepartment } from "@/redux/hrm/department-slice";
import { deleteJobPosition } from "@/redux/hrm/job-position-slice";
import { useRouter } from "next/navigation";
import FormCreateUpdateJobPosition from "./form-job-position";

interface ITableDepartment{
    //handleUpdate: (item: IDepartment) => void;
    departments: IDepartment[];
}

function TableDepartment({departments}: ITableDepartment){
    const dispatch = useAppDispatch();
    const router = useRouter();
    const jobPositions = useAppSelector(state => state.jobPosition.jobPositions);
    
    const handleDeleteDepartment = (id: number) => {
        confirm("¿Estas seguro de eliminar este departamento?") && dispatch(deleteDepartment(id));
    }
    const handleDeleteJobPosition = (id: number) => {
        confirm("¿Estas seguro de eliminar este puesto de trabajo?") && dispatch(deleteJobPosition(id));
    }
    return(
        <section className="w-full py-4">
            <div className="grid grid-cols-2 gap-4">
                { departments.map((item: IDepartment, index) => (
                    <div className="w-full  px-4 py-3 bg-white rounded-md shadow-md">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-light text-gray-800">12/02/2023</span>
                            <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
                                <div className="flex items-center gap-x-6">
                                    <button onClick={()=>handleDeleteDepartment(item.id as number)} className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                    {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}
                                    <button onClick={()=>router.push(`/employee/department/${item.id}`)} className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </div>
                            </span>
                        </div>
                
                        <div>
                            <h1 className="mt-2 text-l font-semibold text-gray-800">{item.name}</h1>
                            <p className="mt-2 text-xs text-gray-600">{item.description}</p>
                        </div>

                        <details className="collapse bg-base-200">
                            <summary className="collapse-title text-xs text-gray-700 p-2 min-h-fit">Puestos de trabajo</summary>
                            <div className="collapse-content"> 
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th className="text-xs"></th>
                                        <th className="text-xs">Name</th>
                                        <th className="text-xs">Descripcion</th>
                                        <th className="text-xs">Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        item.jobPositions && item.jobPositions.map((jPosition: IJobPosition, index) => {
                                            return (
                                                <tr>
                                                    <th className="text-gray-700 text-xs">{index + 1}</th>
                                                    <td className="text-gray-700 text-xs">{jPosition.name}</td>
                                                    <td className="text-gray-700 text-xs">{jPosition.description}</td>
                                                    <td className="text-gray-700 text-xs">
                                                        <div className="flex items-center gap-x-6">
                                                            <button onClick={()=>handleDeleteJobPosition(jPosition.id as number)} className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>
                                                            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}
                                                            <button onClick={()=>router.push(`/employee/department/${jPosition.id}`)} className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )

                                        })
                                    }
                                    </tbody>
                                </table>
                                </div>
                                <label htmlFor={`drawer-form${item.id}`} className=" btn btn-success btn-xs px-1 py-1 text-xs">Nuevo</label>
                                <FormCreateUpdateJobPosition department={item.id as string} />
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </section>
//         <section className="w-full">
//             <div className="flex flex-col mt-6">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                 <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-200">
//                             <tr>
//                                 <th scope="col" className="py-1 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
//                                     <div className="flex items-center gap-x-3">
//                                         <span>No.</span>
//                                     </div>
//                                 </th>
//                                 <th scope="col" className="py-1 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
//                                     <div className="flex items-center gap-x-3">
//                                         <span>Departamento</span>
//                                     </div>
//                                 </th>
//                                 <th scope="col" className="px-12 py-1 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     <button className="flex items-center gap-x-2">
//                                         <span>Descripcion</span>
//                                     </button>
//                                 </th>
//                                 <th scope="col" className="px-12 py-1 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     <span>Acciones</span>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             { departments.map((item: IDepartment, index) => (
//                             <tr key={item.id}>
//                                 <td className="px-4 py-2 text-sm text-gray-500 whitespace-nowrap">{index+1}</td>
//                                 <td className="px-4 py-2 text-sm text-gray-500  whitespace-nowrap">{item.name}</td>
//                                 <td className="px-4 py-2 text-sm text-gray-500  whitespace-nowrap">{item.description}</td>
//                                 <td className="px-4 py-2 text-sm whitespace-nowrap">
//                                     <div className="flex items-center gap-x-6">
//                                         <button onClick={()=>dispatch(deleteDepartment(item.id as number))} className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                                             </svg>
//                                         </button>

//                                         <button onClick={()=>router.push(`/employee/department/${item.id}`)} className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="flex items-center justify-between mt-6">
//         <a href="#" className="flex items-center px-5 py-1 text-xs text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
//             </svg>

//             <span>
//                 Anterior
//             </span>
//         </a>
//         <div className="items-center hidden lg:flex gap-x-3">
//             <a href="#" className="px-2 py-1 text-xs text-blue-500 rounded-md bg-blue-100/60">1</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">3</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">2</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">...</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">12</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">13</a>
//             <a href="#" className="px-2 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-100">14</a>
//         </div>
//         <a href="#" className="flex items-center px-5 py-1 text-xs text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
//             <span>
//                 Siguiente
//             </span>

//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
//             </svg>
//         </a>
//     </div>
// </section>
    )
}

export default TableDepartment;

//)=>router.push(`/employee/department/${item.id}`)