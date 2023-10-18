"use client";
import { useAppDispatch } from "@/hooks/redux";
import { getPayrollPeriods } from "@/redux/pm/payroll-period-slice";
//import { useRouter } from "next/navigation";
import { IPayrollPeriod } from "@/interfaces/pm";
import { useAppSelector } from "@/hooks/redux";
import { useSession } from "next-auth/react";

import React, { useEffect } from 'react';
import {
  MaterialReactTable,
  type MRT_Row,
} from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { columnsPayrollPeriod, columnsPayrollPeriodPDF } from "@/constants/pm";
import { downLoadPdf, downloadCsv, convertDateDDMMYYYY } from "@/services/tools-service";

const Table= ({columns, data}: any) => {

    const handleExportRows = (rows: MRT_Row<IPayrollPeriod>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downloadCsv(periodsSelected);
    };

    const handleDownloadCVS = () => {
      downloadCsv(data);
    }
    const handleExportPdf = () => {
      downLoadPdf(data, columnsPayrollPeriodPDF);
    }
    const handleExportRowsPdf = (rows: MRT_Row<IPayrollPeriod>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downLoadPdf(periodsSelected, columnsPayrollPeriodPDF);
    }

  return(
    <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        enableRowActions
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table }) => (
          <Box
            sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
          >
            <Button
              className="bg-blue-900 hover:bg-gray-900"
              onClick={handleExportPdf}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              PDF
            </Button>
            <Button
              className="bg-gray-900 hover:bg-gray-900"
              disabled={table.getPrePaginationRowModel().rows.length === 0}
              onClick={handleDownloadCVS}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Excel
            </Button>
            <Button
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              className="bg-gray-900 hover:bg-gray-900"
              //onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Excel seleccionados
            </Button>
            <Button
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              className="bg-gray-900 hover:bg-gray-900"
              //onClick={() => handleExportRowsPdf(table.getSelectedRowModel().rows)}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              PDF seleccionados
            </Button>
          </Box>
        )}
        renderRowActionMenuItems={({ closeMenu }) => [
          <MenuItem
            key={0}
            onClick={() => {
              // View profile logic...
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            View Profile
          </MenuItem>,
          <MenuItem
            key={1}
            onClick={() => {
              // Send email logic...
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            Send Email
          </MenuItem>,
        ]}
      />
  )
};




const TablePeriod = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const periods = useAppSelector(state => state.payrollPeriod.payrollPeriods) as IPayrollPeriod[];
  useEffect(() => {
    dispatch(getPayrollPeriods(session?.user?.idCompany as number));
  }, []);

  return (
    <div className="mt-8">
      <Table columns={columnsPayrollPeriod} data={periods} />
    </div>
  );
};

export default TablePeriod;







// interface ITablePayrollPeriodProps{
//     payrollPeriods: IPayrollPeriod[];
// }

// function TabPayrollPeriod(){
//     const dispatch = useAppDispatch();
//     const router = useRouter();
//     //let payrollPeriods = [] as IPayrollPeriod[];

//     const payrollPeriods = useAppSelector(state => state.payrollPeriod.payrollPeriods) as IPayrollPeriod[];
//     // if(Array.isArray(data)){
//     //     payrollPeriods = data;
//     // }

//     //const payrollPeriods = useAppSelector(state => state.payrollPeriod.payrollPeriods) as IPayrollPeriod[];
    
//     const handleDeletePayrollConcept = (id: number) => {
//         confirm("¿Estas seguro de eliminar este departamento?") && dispatch(deletePayrollConcept(id));
//     }
//     return(
//         <section className="w-full py-4">
//             <div className="grid grid-cols-4 gap-4">
//                 { Array.isArray(payrollPeriods) ?   payrollPeriods.map((item: IPayrollPeriod, index) => (
//                     <div key={index} className={`w-full  px-4 py-3  bg-gray-200  rounded-md`}>
//                         <div className="flex items-center justify-between">
//                             <span className="text-sm font-semibold text-gray-800 ">{item.status ? "PAGADO" : "ACTIVO"}</span>
//                             <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-white rounded-md">
//                                 <div className="flex items-center gap-x-6">
//                                     <button onClick={()=>handleDeletePayrollConcept(item.id as number)} className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                                         </svg>
//                                     </button>
//                                     <button onClick={()=>router.push(`/platform/pm/concepts/${item.id}`)} className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </span>
//                         </div>
//                         <div>
//                             <h1 className="mt-2 text-sm font-semibold text-gray-800">{item.name}</h1>
//                             <div className="mt-2">
//                                 <p className="text-xs font-light text-gray-600">DEL: {item.start_date}</p>
//                                 <p className="text-xs font-light text-gray-600">AL: {item.end_date}</p>
//                             </div>
//                             <p className="mt-2 text-xs text-gray-600">Tipo del periodo: {item.type}</p>
//                         </div>
//                     </div>
//                 )):(
//                     <div className="w-full px-4 py-3 text-center bg-white rounded-md shadow-md">
//                         <h1 className="text-gray-800">No hay periodos de nomina registrados</h1>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }

// export default TabPayrollPeriod;