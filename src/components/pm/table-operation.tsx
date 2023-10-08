"use client"
import { useAppSelector } from "@/hooks/redux";
import { ILoans, IOvertime, IProductionBonus, ISalesCommission, ISolidarityContribution } from "@/interfaces/pm";


function TableOvertime(){
    const overtimeStored = useAppSelector(state => state.payrollOperation.overtimes);

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Horas extras</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Fecha</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Razon</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Tiempo</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Tipo</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Total</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(overtimeStored) && overtimeStored.map((item: IOvertime, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">{item.date as string}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">{item.reason}</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{item.overtime_minutes + " Minutos"}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{item.public_holiday ? "Doble" : "Simple"}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{item.amount}</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}

function TableSalesCommission(){
    const salesCommissionStored = useAppSelector(state => state.payrollOperation.salesCommissions);

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Comisiones de ventas</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Nombre del familiar</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Relacion Familiar</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Telefono del familiar</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Genero</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(salesCommissionStored) && salesCommissionStored.map((item: ISalesCommission, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">hola</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">hola</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}

function TableProductionBonus(){
    const productionBonusStored = useAppSelector(state => state.payrollOperation.productionBonuses);

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Bonus de produccion</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Nombre del familiar</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Relacion Familiar</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Telefono del familiar</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Genero</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(productionBonusStored) && productionBonusStored.map((item: IProductionBonus, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">hola</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">hola</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}

function TableSolidarityContribution(){
    const solidarityContributionStored = useAppSelector(state => state.payrollOperation.solidarityContributions);

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Contribucion solidaria</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Nombre del familiar</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Relacion Familiar</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Telefono del familiar</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Genero</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(solidarityContributionStored) && solidarityContributionStored.map((item: ISolidarityContribution, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">hola</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">hola</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}

function TableLoans(){
    const loansStored = useAppSelector(state => state.payrollOperation.loans);

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Prestamos</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Nombre del familiar</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Relacion Familiar</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Telefono del familiar</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Genero</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(loansStored) && loansStored.map((item: ILoans, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">hola</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">hola</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">hola</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}





function TablePayrollOperation(){
    return(
        <div className="flex flex-col gap-4">
            <TableOvertime/>
            <TableSalesCommission/>
            <TableProductionBonus/>
            <TableSolidarityContribution/>
            <TableLoans/>
        </div>
//         <section className="container px-4 mx-auto">
//     <div className="flex flex-col">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                 <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     <div className="flex items-center gap-x-3">
//                                             Descripcion
//                                     </div>
//                                 </th>

//                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     Fecha
//                                 </th>

//                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     Tipo de operacion
//                                 </th>

//                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     Empleado
//                                 </th>

//                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
//                                     otro
//                                 </th>

//                                 <th scope="col" className="relative py-3.5 px-4">
//                                     <span className="sr-only">Actions</span>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             <tr>
//                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                                     <div className="inline-flex items-center gap-x-3">
//                                         <span>#3066</span>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Jan 6, 2022</td>
//                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                     <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
//                                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         </svg>

//                                         <h2 className="text-sm font-normal">Paid</h2>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
//                                     <div className="flex items-center gap-x-2">
//                                         <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
//                                         <div>
//                                             <h2 className="text-sm font-medium text-gray-800 ">Arthur Melo</h2>
//                                             <p className="text-xs font-normal text-gray-600 ">authurmelo@example.com</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Monthly subscription</td>
//                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                     <div className="flex items-center gap-x-6">
//                                         <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500  hover:text-indigo-500 focus:outline-none">
//                                             Archive
//                                         </button>

//                                         <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
//                                             Download
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                                     <div className="inline-flex items-center gap-x-3">
//                                         <span>#3065</span>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Jan 5, 2022</td>
//                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                     <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60">
//                                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         </svg>

//                                         <h2 className="text-sm font-normal">Cancelled</h2>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text whitespace-nowrap">
//                                     <div className="flex items-center gap-x-2">
//                                         <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
//                                         <div>
//                                             <h2 className="text-sm font-medium text-gray-800">Andi Lane</h2>
//                                             <p className="text-xs font-normal text-gray-600">andi@example.com</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
//                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                     <div className="flex items-center gap-x-6">
//                                         <button className="text-gray-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
//                                             Archive
//                                         </button>

//                                         <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
//                                             Download
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
    )
}

export default TablePayrollOperation;