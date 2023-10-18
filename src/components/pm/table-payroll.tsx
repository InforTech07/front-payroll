"use client";
import { IPayroll } from "@/interfaces/pm";
import { getPayrolls } from "@/redux/pm/payroll-slice";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";




function TablePayroll(){
    const dispatch = useAppDispatch();
    const { data: session } = useSession();
    const router = useRouter();
    const payrolls = useAppSelector(state => state.payroll.payrolls);
    
    const handleDeleteDepartment = (id: number) => {
        console.log(id);
        alert("operacion en desarrollo")
       // confirm("¿Estas seguro de eliminar este departamento?") && dispatch(deleteJobPosition(id));
    }
    const formatDate = (date: string) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString();
    };

    useEffect(() => {
        dispatch(getPayrolls(session?.user?.idCompany as number));
    }, []);
    return(
        <section className="w-full py-4">
            <div className="grid grid-cols-3 gap-4">
                { Array.isArray(payrolls) && payrolls.map((item: IPayroll, index) => (
                    <div key={index} className={'w-full  px-4 py-3 rounded-md bg-gray-200' }>
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-light text-gray-800">Nomina: {formatDate(item.date_generated as string)}</span>
                            <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-white rounded-md">
                                <div className="flex items-center gap-x-6">
                                    <button onClick={()=>handleDeleteDepartment(item.id as number)} className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                    {/* <button onClick={()=>router.push(`/platform/pm/payroll/${item.payroll_period}`)} className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button> */}
                                </div>
                            </span>
                        </div>
                
                        <div>
                            <div className="mt-6 mb-6">
                                <Link 
                                    href={`/platform/pm/payroll/${item.payroll_period}`}
                                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Pre Nomina
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TablePayroll;