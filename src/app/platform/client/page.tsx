"use client";
import { ICompany } from "@/interfaces/companies";

import { useState, useEffect } from "react";
import { apiServices } from "@/services/api-service";
import NavbarApp from "@/components/navs/navbar-app";
import {
  MaterialReactTable,
  type MRT_Row,
} from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { columnsCompanyPDF, columnsCompany } from "@/constants/pm";
import { downLoadPdf, downloadCsv } from "@/services/tools-service";
import { useSession } from "next-auth/react";

type TableProps = {
  companies: ICompany[];
  title: string;
}
function TableCompanies({companies, title}: TableProps) {
  const handleExportRows = (rows: MRT_Row<ICompany>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downloadCsv(periodsSelected);
    };

    const handleDownloadCVS = () => {
      downloadCsv(companies);
    }
    const handleExportPdf = () => {
      downLoadPdf(companies, columnsCompanyPDF, title);
    }
    const handleExportRowsPdf = (rows: MRT_Row<ICompany>[]) => {
      const periodsSelected = rows.map((row) => row.original);
      downLoadPdf(periodsSelected, columnsCompanyPDF, title);
    }

  return(
    <MaterialReactTable
        columns={columnsCompany}
        data={companies}
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
      />
  )
}




function ClientPage() {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const {data: session, status} = useSession();

  const fetchCompanies = async () => {
    const companies = await apiServices.get('company/')
    setCompanies(companies.results);
  }
    useEffect(() => {
        fetchCompanies();
    }, []);


  return (
    <div>
        <NavbarApp title="Clientes" idBtnDrawer="id" btnNew={false} />
        <TableCompanies companies={companies} title="Clientes" />
    </div>
  )
}

export default ClientPage;