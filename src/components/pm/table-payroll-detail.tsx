"use client";
import React from "react";
import { useAppDispatch } from "@/hooks/redux";
import { getPayrollPeriods } from "@/redux/pm/payroll-period-slice";
//import { useRouter } from "next/navigation";
import { IPayrollDetail } from "@/interfaces/pm";
import { useAppSelector } from "@/hooks/redux";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import {
    MaterialReactTable,
    type MRT_Row,
  } from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { columnsPayrollDetail, columnsPayrollDetailPDF, columnsPayrollDetail2 } from "@/constants/pm";
import { downLoadPdf, downloadCsv, convertDateDDMMYYYY } from "@/services/tools-service";
import { getPayrollConcepts } from "@/redux/pm/payroll-concept-slice";
import { apiServices } from "@/services/api-service";
import { useParams, useSearchParams } from "next/navigation";

const TableDetail = ({columns, data, columnsPdf}: any) => {

    const handleExportRows = (rows: MRT_Row<IPayrollDetail>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downloadCsv(periodsSelected);
    };

    const handleDownloadCVS = () => {
      downloadCsv(data);
    }
    const handleExportPdf = () => {
      downLoadPdf(data, columnsPdf);
    }
    // const handleExportRowsPdf = (rows: MRT_Row<IPayrollDetail>[]) => {
    //   const periodsSelected = rows.map((row) => row.original);
    //   downLoadPdf(periodsSelected, columnsPayroll);
    // }

  return(
    <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
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




function TablePayrollDetail() {
  const { data: session, status } = useSession();
  const [payrollDetail, setPayrollDetail] = React.useState<IPayrollDetail[]>([]);
  const dispatch = useAppDispatch();
  const params = useParams();
  const queryParams = useSearchParams();
  const id = params.id;
  const type = queryParams.get('type');

  //const columnsPayroll = 
  
  //const concepts = useAppSelector(state => state.payrollConcept.payrollConcepts) as IPayrollDetail[];
  //console.log(concepts)
  const getPayrollDetail= async () => {
      const res = await apiServices.get('payroll/generate_prev_payroll/?payroll_period=' + id + '&company=' + session?.user?.idCompany);
      setPayrollDetail(res);
  }
  useEffect(() => {
    getPayrollDetail();
  }, []);

  return (
      <div>
        {
          type === 'MONTLY' ? (
            <TableDetail columns={columnsPayrollDetail} data={payrollDetail} columnsPdf={columnsPayrollDetailPDF} />
          ): (
            <TableDetail columns={columnsPayrollDetail2} data={payrollDetail} columnsPdf={columnsPayrollDetailPDF}/>
          )
        }
      </div>
  );
};

export default TablePayrollDetail;
