"use client";
import { getPayrollPeriods } from "@/redux/pm/payroll-period-slice";
//import { useRouter } from "next/navigation";
import { IPayrollConcept, IPayrollPeriod } from "@/interfaces/pm";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { useSession } from "next-auth/react";

import React, { useEffect } from 'react';
import {
  MaterialReactTable,
  type MRT_Row,
} from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { columnsPayrollConcept, columnsPayrollConceptPDF } from "@/constants/pm";
import { downLoadPdf, downloadCsv, convertDateDDMMYYYY } from "@/services/tools-service";
import { getPayrollConcepts, deletePayrollConcept } from "@/redux/pm/payroll-concept-slice";


const Table= ({columns, data}: any) => {
    const dispatch = useAppDispatch();
    const handleExportRows = (rows: MRT_Row<IPayrollConcept>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downloadCsv(periodsSelected);
    };

    const handleDownloadCVS = () => {
      downloadCsv(data);
    }
    const handleExportPdf = () => {
      downLoadPdf(data, columnsPayrollConceptPDF);
    }
    const handleExportRowsPdf = (rows: MRT_Row<IPayrollConcept>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downLoadPdf(periodsSelected, columnsPayrollConceptPDF);
    }

    const handleDeleteConcept= (id: number) => {
      dispatch(deletePayrollConcept(id));
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
        renderRowActionMenuItems={({ row }:any) => [
          <MenuItem
            key={0}
            onClick={() => {
              //handleDeleteConcept(row.original.id as number);
              alert("en desarrollo")
            }}
            sx={{ m: 0 }}
          >
            Eliminar concepto
          </MenuItem>,
        ]}
      />
  )
};




const TableConcept = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const concepts = useAppSelector(state => state.payrollConcept.payrollConcepts) as IPayrollConcept[];
  console.log(concepts)
  useEffect(() => {
    dispatch(getPayrollConcepts(session?.user?.idCompany as number));
  }, []);

  return (
    <div className="mt-8">
      <Table columns={columnsPayrollConcept} data={concepts} />
    </div>
  );
};

export default TableConcept;
