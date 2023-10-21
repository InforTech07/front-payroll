import { type MRT_ColumnDef, type MRT_Row } from 'material-react-table';
import { IPayrollPeriod, IPayrollConcept, IPayroll, IPayrollDetail } from '@/interfaces/pm';
import { IPermission } from '@/interfaces/hrm';
import { ISalesOrder } from '@/interfaces/store';
import { ICompany } from '@/interfaces/companies';

export const columnsPayrollPeriod: MRT_ColumnDef<IPayrollPeriod>[] = [
    {
      accessorKey: 'id',
      header: 'NO.',
      id: 'id',
      size: 40,

    },
    {
      accessorKey: 'type',
      header: 'Tipo',
      size: 120,
    },
    {
      accessorKey: 'start_date',
      header: 'Fecha de inicio',
      accessorFn: (row: any) => {
        const newDate = new Date(row.start_date);
        return newDate.toLocaleDateString();
      },
      size: 200,
    },
    {
      accessorKey: 'end_date',
      header: 'Fecha de fin',
      accessorFn: (row: any) => {
        const newDate = new Date(row.end_date);
        return newDate.toLocaleDateString();
      },
      size: 200,
    },
    {
      accessorKey: 'is_open',
      header: 'Estado',
      accessorFn: (row: any) => row.is_open ? 'Abierto' : 'Cerrado',
    },
    {
      accessorKey: 'name',
      header: 'Periodo',
      size: 120,
    },
];

export const columnsPayrollPeriodPDF = [
    { header: 'NO.', dataKey: 'id' },
    { header: 'Periodo', dataKey: 'name' },
    { header: 'Fecha de inicio', dataKey: 'start_date' },
    { header: 'Fecha de fin', dataKey: 'end_date' },
    { header: 'Estado', dataKey: 'is_open'},
    { header: 'Tipo', dataKey: 'type' },
]

export const columnsPayrollConcept: MRT_ColumnDef<IPayrollConcept>[] = [
  {
    accessorKey: 'id',
    header: 'NO.',
    size: 40,
  },
  {
    accessorKey: 'concept',
    header: 'Concepto',
    accessorFn: (row: any) => {
      if (row.concept === 'OVERTIME') {
        return 'Horas extra';
      } else if (row.concept === 'SALES_COMMISSION') {
        return 'Ventas';
      } else if (row.concept === 'PRODUCTION_BONUS') {
        return 'Producción';
      } else if (row.concept === 'SOLIDARITY_CONTRIBUTION') {
        return 'Contribución solidaria';
      } else if (row.concept === 'LOANS') { 
        return 'Préstamos';
      }else{
        return row.concept;
      }
      
    },
    size: 120,
  },
  {
    accessorKey: 'amount',
    header: 'Monto',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.amount);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 200,
  },
  {
    accessorKey: 'overtime_minutes',
    header: 'Horas extra',
    size: 50,
  },
  {
    accessorKey: 'public_holiday',
    header: 'Feriado',
    accessorFn: (row: any) => row.public_holiday ? 'Si' : 'No',
    size: 50,
  },
  {
    accessorKey: 'sales',
    header: 'Ventas',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.sales);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'production',
    header: 'Producción',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.production);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'cancelled',
    header: 'Estado',
    accessorFn: (row: any) => row.cancelled ? 'Cancelado' : 'Activo',
    size: 120,
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 50,
  },
  {
    accessorKey: 'reason',
    header: 'Motivo',
    size: 100,
  },
  {
    accessorKey: 'date',
    header: 'Fecha',
    accessorFn: (row: any) => {
      const newDate = new Date(row.date);
      return newDate.toLocaleDateString();
    },
  },
];

export const columnsPayrollConceptPDF = [
  { header: 'NO.', dataKey: 'id' },
  { header: 'Concepto', dataKey: 'concept' },
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Periodo', dataKey: 'payroll_period' },
  { header: 'Fecha', dataKey: 'date' },
  { header: 'Motivo', dataKey: 'reason' },
  { header: 'Minutos extra', dataKey: 'overtime_minutes' },
  { header: 'Feriado', dataKey: 'public_holiday' },
  { header: 'Ventas', dataKey: 'sales' },
  { header: 'Producción', dataKey: 'production' },
  { header: 'Monto', dataKey: 'amount' },
  { header: 'Estado', dataKey: 'cancelled' },
];

export const columnsPayrollDetail: MRT_ColumnDef<IPayrollDetail>[] = [
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'net_salary', //net_salary
    header: 'Sueldo Neto',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.net_salary);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'gross_salary', //gross_salary
    header: 'Sueldo Bruto',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.gross_salary);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'incomes',
    header: 'Ingresos',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.incomes);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'deductions',
    header: 'Deducciones',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.deductions);
      return newAmount;
    },
  },
  {
    accessorKey: 'salary_base',
    header: 'Salario base',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.salary_base);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'social_insurance_employee',
    header: 'Seguro social empleado',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.social_insurance_employee);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'social_insurance_company',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.social_insurance_company);
      return newAmount;
    },
    header: 'Seguro social empresa',
    size: 120,
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 120,
  },
]

export const columnsPayrollDetail2: MRT_ColumnDef<IPayrollDetail>[] = [
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'gross_biweekly_salary',
    header: 'Sueldo Bruto Quincena',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.gross_biweekly_salary);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'net_biweekly_salary',
    header: 'Sueldo neto Quincena',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.net_biweekly_salary);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'total_biweekly_deduction',
    header: 'Deducciones quincena',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.total_biweekly_deduction);
      return newAmount;
    },
  },
  {
    accessorKey: 'salary_base',
    header: 'Salario base',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.salary_base);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 120,
  },
]
//bono 14
export const columnsPayrollDetail3: MRT_ColumnDef<IPayrollDetail>[] = [
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'salary_base',
    header: 'Salario base',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.salary_base);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'bono14',
    header: 'Bono 14',
    accessorFn: (row: any) => {
      if(row.bono14 === '0.00'){
        return 'No aplica para este periodo';
      }else{
        const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.bono14);
        return newAmount;
      }
    },
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 120,
  },  
]

//aguinaldo
export const columnsPayrollDetail4: MRT_ColumnDef<IPayrollDetail>[] = [
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'salary_base',
    header: 'Salario base',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.salary_base);
      return newAmount;
    },
    size: 120,
  },
  {
    accessorKey: 'aguinaldo',
    header: 'Aguinaldo',
    accessorFn: (row: any) => {
      if(row.aguinaldo === '0.00'){
        return 'No aplica para este periodo';
      }{
        const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.aguinaldo);
        return newAmount;
      }
    },
  },
  
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 120,
  },  
]

export const columnsPayrollDetailPDF = [
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Sueldo Neto', dataKey: 'net_salary' },
  { header: 'Sueldo Bruto', dataKey: 'gross_salary' },
  { header: 'Ingresos', dataKey: 'incomes' },
  { header: 'Deducciones', dataKey: 'deductions' },
  { header: 'Salario base', dataKey: 'salary_base' },
  { header: 'Seguro social empleado', dataKey: 'social_insurance_employee' },
  { header: 'Seguro social empresa', dataKey: 'social_insurance_company' },
  { header: 'Periodo', dataKey: 'payroll_period' },
]

export const columnsPayrollDetailPDF2 = [
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Sueldo Neto', dataKey: 'net_biweekly_salary' },
  { header: 'Sueldo Bruto', dataKey: 'gross_biweekly_salary' },
  { header: 'Deducciones', dataKey: 'total_biweekly_deduction' },
  { header: 'Salario base', dataKey: 'salary_base' },
  { header: 'Periodo', dataKey: 'payroll_period' },
]

export const columnsPayrollDetailPDF3 = [
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Salario base', dataKey: 'salary_base' },
  { header: 'Bono 14', dataKey: 'bono14' },
  { header: 'Periodo', dataKey: 'payroll_period' },
]

export const columnsPayrollDetailPDF4 = [
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Salario base', dataKey: 'salary_base' },
  { header: 'Aguinaldo', dataKey: 'aguinaldo' },
  { header: 'Periodo', dataKey: 'payroll_period' },
]


export const columnsPermission: MRT_ColumnDef<IPermission>[] = [
  {
    accessorKey: 'id',
    header: 'NO.',
    size: 40,
  },
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'date_request',
    header: 'Fecha del permiso',
    size: 200,
    accessorFn: (row: any) => {
      const newDate = new Date(row.date_request);
      return newDate.toLocaleDateString();
    },
  },
  {
    accessorKey: 'reason',
    header: 'Motivo',
    size: 200,
  },
  {
    accessorKey: 'status',
    header: 'Estado',
  },
];

export const columnsPermissionPDF = [
  { header: 'NO.', dataKey: 'id' },
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Fecha de permiso', dataKey: 'date_requeste' },
  { header: 'Motivo', dataKey: 'reason' },
  { header: 'Estado', dataKey: 'status' },
];

export const columnsSalesOrder: MRT_ColumnDef<ISalesOrder>[] = [
  {
    accessorKey: 'id',
    header: 'NO.',
    size: 40,
  },
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'total',
    header: 'Total',
    accessorFn: (row: any) => {
      const newAmount = new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(row.total);
      return newAmount;
    },
    size: 200,
  },
  {
    accessorKey: 'cancelled',
    header: 'Estado',
    accessorFn: (row: any) => row.cancelled ? 'Cancelado' : 'Pendiente',
  },
  {
    accessorKey: 'company',
    header: 'Empresa',
    size: 200,
  },
  {
    accessorKey: 'date',
    header: 'Fecha',
    accessorFn: (row: any) => {
      const newDate = new Date(row.date);
      return newDate.toLocaleDateString();
    },
    size: 200,
  },
];

export const columnsSalesOrderPDF = [
  { header: 'NO.', dataKey: 'id' },
  { header: 'Empleado', dataKey: 'employee_name' },
  { header: 'Total', dataKey: 'total' },
  { header: 'Estado', dataKey: 'cancelled' },
  { header: 'Empresa', dataKey: 'company' },
  { header: 'Fecha', dataKey: 'date' },
];

export const columnsCompany: MRT_ColumnDef<ICompany>[] = [
  {
    accessorKey: 'id',
    header: 'NO.',
    size: 40,
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    size: 120,
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
    size: 200,
  },
  {
    accessorKey: 'address',
    header: 'Dirección',
    size: 200,
  },
  {
    accessorKey: 'phone',
    header: 'Teléfono',
    size: 200,
  },
];

export const columnsCompanyPDF = [
  { header: 'NO.', dataKey: 'id' },
  { header: 'Nombre', dataKey: 'name' },
  { header: 'Descripción', dataKey: 'description' },
  { header: 'Dirección', dataKey: 'address' },
  { header: 'Teléfono', dataKey: 'phone' },
];