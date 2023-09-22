"use client";
import { use, useEffect, useState } from "react";
import { IDepartment } from "@/entitys/employee";


interface ITableDepartmentProps{
    data : IDepartment[];
}

function TableDepartment({data}: ITableDepartmentProps){
    return(
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                <tr>
                    <th></th> 
                    <th>Departamento</th> 
                    <th>Descripcion</th> 
                    <th>Empresa</th> 
                    <th> Opciones </th>
                </tr>
                </thead> 
                <tbody>
                    
                    { data.map((item, index) => (
                        <tr key={index}>
                            <th className="text-black">{item.id}</th> 
                            <td className="text-black">{item.name}</td> 
                            <td className="text-black">{item.description}</td> 
                            <td className="text-black">{item.company}</td> 
                            <td>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn m-1 text-black">opciones</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <button className="btn btn-ghost text-black">Item 1</button>
                                        </li>
                                        <li>
                                            <button className="btn btn-ghost text-black">Item 2</button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        ))
                    }

                    {/* { [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
                        <tr key={index}>
                            <th className="text-black">1</th> 
                            <td className="text-black">Cy Ganderton</td> 
                            <td className="text-black">Quality Control Specialist</td> 
                            <td className="text-black">Littel, Schaden and Vandervort</td> 
                            <td className="text-black">Canada</td> 
                            <td className="text-black">12/16/2020</td> 
                            <td className="text-black">Blue</td>
                            <td>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn m-1 text-black">opciones</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <button className="btn btn-ghost text-black">Item 1</button>
                                        </li>
                                        <li>
                                            <button className="btn btn-ghost text-black">Item 2</button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>))
                    } */}
                </tbody> 
            </table>
        </div>
    )
}

export default TableDepartment;