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
import { columnsPermission, columnsPermissionPDF } from "@/constants/pm";
import { downLoadPdf, downloadCsv } from "@/services/tools-service";
import { toast } from "react-toastify";

type TableProps = {
    permissions: IPermission[];
    handleChangeStatusPermission: (id:number,status:string)=> void;
}

function TablePermissions({permissions, handleChangeStatusPermission}: TableProps) {
    const handleExportRows = (rows: MRT_Row<IPermission>[]) => {
        const periodsSelected = rows.map((row) => row.original);
        downloadCsv(periodsSelected);
      };
  
      const handleDownloadCVS = () => {
        downloadCsv(permissions);
      }
      const handleExportPdf = () => {
        downLoadPdf(permissions, columnsPermissionPDF);
      }
      const handleExportRowsPdf = (rows: MRT_Row<IPermission>[]) => {
        const periodsSelected = rows.map((row) => row.original);
        downLoadPdf(periodsSelected, columnsPermissionPDF);
      }
  
    return(
      <MaterialReactTable
          columns={columnsPermission}
          data={permissions}
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
          renderRowActionMenuItems={({row}) => [
            <MenuItem
              key={0}
              onClick={() => {
                // ver el id del permiso
                handleChangeStatusPermission(row.original.id as number, "APROBADO")
              }}
              sx={{ m: 0 }}
            >
              Aprobar con descuento de sueldo
            </MenuItem>,
            <MenuItem
            key={0}
            onClick={() => {
              // ver el id del permiso
              handleChangeStatusPermission(row.original.id as number, "APROBADO_SIN_DESCUENTO")
            }}
            sx={{ m: 0 }}
          >
            Aprobado sin descuento de sueldo
          </MenuItem>,
            <MenuItem
              key={1}
              onClick={() => {
                handleChangeStatusPermission(row.original.id as number, "RECHAZADO")
              }}
              sx={{ m: 0 }}
            >
              Rechazar
            </MenuItem>,
          ]}
        />
    )
}


function PermssionPage(){
    const { data: session } = useSession();
    const [permissions, setPermissions] = useState<IPermission[]>([]);
    const getPermissions = async () => {
        const res = await apiServices.get("request_absence/get_requests_absence_by_company/?company=" + session?.user?.idCompany);
        console.log(res); 
        setPermissions(res);
    }

    const handleChangeStatusPermission = async (id:number,status:string) => {
        const item = permissions.find((item) => item.id === id);
        if(item){
            item.status = status;
            const res = await apiServices.put("request_absence/" + item.id +"/",  item);
            if(res){
                setPermissions([...permissions]);
                toast.success("Se actualizo el estado del permiso");
            }
        }
    }

    useEffect(() => {
        getPermissions();
    }, []);
    return (
        <>
            <NavbarApp title="Cola de permisos" idBtnDrawer="hola" btnNew={false} />
            <TablePermissions permissions={permissions} handleChangeStatusPermission={handleChangeStatusPermission} />
        </>
    )
}

export default PermssionPage;