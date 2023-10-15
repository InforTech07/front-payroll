import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import jsPdf from 'jspdf';
import autoTable from "jspdf-autotable";
const today = new Date();
const csvConfig = mkConfig({useKeysAsHeaders: true, filename: `reporte-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`});

export function downloadCsv(data: any[]) {
  const csvExporter = generateCsv(csvConfig)(data as any);
  download(csvConfig)(csvExporter)
}

export function downLoadPdf(data: any[], columns: any[]) {
  //const columnss = Object.keys(data[0]);
  const doc = new jsPdf('landscape','pt','a4');
  autoTable(doc, {
    columnStyles: { europe: { halign: 'center' } }, // European countries centered
    body: data as any,
    columns: columns as any,
  }); 
  doc.save('table.pdf');

}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertDateDDMMYYYY(date: string) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}