import { type MRT_ColumnDef } from 'material-react-table';
import { IPayrollPeriod, IPayrollConcept, IPayroll, IPayrollDetail } from '@/interfaces/pm';

export const columnsPayrollPeriod: MRT_ColumnDef<IPayrollPeriod>[] = [
    {
      accessorKey: 'id',
      header: 'NO.',
      size: 40,
    },
    {
      accessorKey: 'name',
      header: 'Periodo',
      size: 120,
    },
    {
      accessorKey: 'start_date',
      header: 'Fecha de inicio',
      size: 200,
    },
    {
      accessorKey: 'end_date',
      header: 'Fecha de fin',
      size: 200,
    },
    {
      accessorKey: 'status',
      header: 'Estado',
    },
    {
      accessorKey: 'type',
      header: 'Tipo',
      size: 120,
    },
];

export const columnsPayrollPeriodPDF = [
    { header: 'NO.', dataKey: 'id' },
    { header: 'Periodo', dataKey: 'name' },
    { header: 'Fecha de inicio', dataKey: 'start_date' },
    { header: 'Fecha de fin', dataKey: 'end_date' },
    { header: 'Estado', dataKey: 'status' },
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
    size: 120,
  },
  {
    accessorKey: 'employee',
    header: 'Empleado',
    size: 200,
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 200,
  },
  {
    accessorKey: 'date',
    header: 'Fecha',
  },
  {
    accessorKey: 'reason',
    header: 'Motivo',
    size: 120,
  },
  {
    accessorKey: 'overtime_minutes',
    header: 'Minutos extra',
    size: 120,
  },
  {
    accessorKey: 'public_holiday',
    header: 'Feriado',
    size: 120,
  },
  {
    accessorKey: 'sales',
    header: 'Ventas',
    size: 120,
  },
  {
    accessorKey: 'production',
    header: 'Producción',
    size: 120,
  },
  {
    accessorKey: 'amount',
    header: 'Monto',
    size: 120,
  },
  {
    accessorKey: 'cancelled',
    header: 'Cancelado',
    size: 120,
  },
  {
    accessorKey: 'is_active',
    header: 'Activo',
    size: 120,
  },
  {
    accessorKey: 'created_at',
    header: 'Creado',
    size: 120,
  },
];

export const columnsPayrollConceptPDF = [
  { header: 'NO.', dataKey: 'id' },
  { header: 'Concepto', dataKey: 'concept' },
  { header: 'Empleado', dataKey: 'employee' },
  { header: 'Periodo', dataKey: 'payroll_period' },
  { header: 'Fecha', dataKey: 'date' },
  { header: 'Motivo', dataKey: 'reason' },
  { header: 'Minutos extra', dataKey: 'overtime_minutes' },
  { header: 'Feriado', dataKey: 'public_holiday' },
  { header: 'Ventas', dataKey: 'sales' },
  { header: 'Producción', dataKey: 'production' },
  { header: 'Monto', dataKey: 'amount' },
  { header: 'Cancelado', dataKey: 'cancelled' },
  { header: 'Activo', dataKey: 'is_active' },
  { header: 'Creado', dataKey: 'created_at' },
];

export const columnsPayrollDetail: MRT_ColumnDef<IPayrollDetail>[] = [
  {
    accessorKey: 'employee_name',
    header: 'Empleado',
    size: 120,
  },
  {
    accessorKey: 'total',
    header: 'Total',
    size: 200,
  },
  {
    accessorKey: 'incomes',
    header: 'Ingresos',
    size: 200,
  },
  {
    accessorKey: 'deductions',
    header: 'Deducciones',
  },
  {
    accessorKey: 'salary_base',
    header: 'Salario base',
    size: 120,
  },
  {
    accessorKey: 'social_insurance_employee',
    header: 'Seguro social empleado',
    size: 120,
  },
  {
    accessorKey: 'social_insurance_company',
    header: 'Seguro social empresa',
    size: 120,
  },
  {
    accessorKey: 'payroll_period',
    header: 'Periodo',
    size: 120,
  },
]

export const columnsPayrollDetailPDF = [
  { header: 'Empleado', dataKey: 'employee' },
  { header: 'Total', dataKey: 'total' },
  { header: 'Ingresos', dataKey: 'incomes' },
  { header: 'Deducciones', dataKey: 'deductions' },
  { header: 'Salario base', dataKey: 'salary_base' },
  { header: 'Seguro social empleado', dataKey: 'social_insurance_employee' },
  { header: 'Seguro social empresa', dataKey: 'social_insurance_company' },
  { header: 'Periodo', dataKey: 'payroll_period' },
]
