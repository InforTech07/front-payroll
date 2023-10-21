"use client"
import NavbarApp from "@/components/navs/navbar-app";
import { IPermission } from "@/interfaces/hrm";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { apiServices } from "@/services/api-service";
import {
    MaterialReactTable,
    type MRT_Row,
  } from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { columnsSalesOrder, columnsSalesOrderPDF } from "@/constants/pm";
import { downLoadPdf, downloadCsv } from "@/services/tools-service";
import { ISalesOrder } from "@/interfaces/store";

type TableProps = {
    sales: ISalesOrder[];
    title: string;
}

function TableSales({sales,title}: TableProps) {
  
      const handleDownloadCVS = () => {
        downloadCsv(sales);
      }
      const handleExportPdf = () => {
        downLoadPdf(sales, columnsSalesOrderPDF, title);
      }  
    return(
      <MaterialReactTable
          columns={columnsSalesOrder}
          data={sales}
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


function SalesOrderPage(){
    const { data: session } = useSession();
    const [sales, setSales] = useState<ISalesOrder[]>([]);
    const getSalesOrder = async () => {
        const res = await apiServices.get("store_purchase/get_store_purchases_by_company/?company=" + session?.user?.idCompany);
        console.log(res); 
        setSales(res);
    }

    useEffect(() => {
        getSalesOrder();
    }, []);
    return (
        <>
            <NavbarApp title="Orden de ventas" idBtnDrawer="hola" btnNew={false} />
            <TableSales sales={sales} title="Ventas Tienda" />
        </>
    )
}

export default SalesOrderPage;