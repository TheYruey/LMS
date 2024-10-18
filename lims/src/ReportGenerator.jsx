import { useRef } from 'react';
import jsPDF from 'jspdf';

const ReportGenerator = () => {
  const reportRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');  // Crea un PDF con orientación vertical, tamaño A4
    doc.text("Reporte Generado", 20, 30);    // Título del PDF
    doc.text(reportRef.current.innerText, 20, 60);  // Inserta el contenido del div en el PDF
    doc.save("reporte.pdf");                 // Guarda el PDF con el nombre "reporte.pdf"
  };

  return (
    <div>
      <div ref={reportRef}>
        <h2>Este es el contenido de tu reporte</h2>
        <p>Aquí puedes colocar cualquier contenido que quieras que se vea en el PDF.</p>
      </div>
      <button onClick={generatePDF}>Descargar Reporte</button>
    </div>
  );
};

export default ReportGenerator;
