import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import jsPdf from 'jspdf';
import autoTable from "jspdf-autotable";
const today = new Date();
const csvConfig = mkConfig({useKeysAsHeaders: true, filename: `reporte-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`});

export function downloadCsv(data: any[]) {
  const csvExporter = generateCsv(csvConfig)(data as any);
  download(csvConfig)(csvExporter)
}

export function downLoadPdf(data: any[], columns: any[], title: string) {
  //const columnss = Object.keys(data[0]);
  const doc = new jsPdf('landscape','pt','a4');
  doc.text(`Reporte: ${title}  Fecha: ${today.toLocaleDateString()}`, 40, 40);
  
  autoTable(doc, {
    columnStyles: { europe: { halign: 'center' } }, // European countries centered
    margin: { top: 50 },
    body: data as any,
    columns: columns as any,
  }); 
  doc.save('table.pdf');

}

export function formatDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
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

export function generateUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
  });
}