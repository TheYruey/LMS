import { useRef } from 'react';
import jsPDF from 'jspdf';

const ReportGenerator = () => {
  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');  // PDF tamaño A4 en formato vertical

    // Encabezados
    doc.setFontSize(10);
    doc.text("MINISTERIO DE SALUD PÚBLICA", 40, 30);
    doc.text("VMGC Viceministerio de Garantía de la Calidad", 400, 30);
    
    doc.setFontSize(12);
    doc.text("LABORATORIO NACIONAL DE SALUD PÚBLICA DR. DEFILLO", 40, 60);
    doc.text("DEPARTAMENTO DE MEDICAMENTOS", 40, 80);
    
    doc.setFontSize(14);
    doc.text("CERTIFICADO DE ANÁLISIS", 200, 100, null, null, 'center');

    // Información general
    doc.setFontSize(10);
    doc.text("No. DMR23-1011", 40, 120);
    doc.text("Pág.: 1/1", 450, 120);
    
    doc.text("Fecha Entrada: 17-may.-2023", 40, 140);
    doc.text("Fecha Salida: 16-mar.-2024", 450, 140);
    
    doc.text("Nombre Producto: TOMOPRES 20 MG", 40, 160);
    doc.text("No. Lote: LP-12212", 40, 180);
    doc.text("No. Oficio: S01-23-51921", 450, 180);
    
    doc.text("Finalidad de Análisis: Registro sanitario", 40, 200);
    doc.text("Forma Farmacéutica: Tableta", 40, 220);
    doc.text("Envase Primario: Blister/Aluminio", 450, 220);
    
    doc.text("Fabricado por: Phoenix- Pharma, S.R.L.", 40, 240);
    doc.text("Distribuido por: Phoenix- Pharma, S.R.L.", 450, 240);
    doc.text("Solicitado por: DIGEMAPS", 40, 260);
    
    // Resultados
    doc.setFontSize(12);
    doc.text("RESULTADOS", 40, 280);
    
    // Encabezados de tabla
    doc.setFontSize(10);
    const startX = 40;
    const col1X = startX;
    const col2X = col1X + 200;
    const col3X = col2X + 150;
    const col4X = col3X + 100;
    const startY = 300;
    let currentY = startY;
    const lineSpacing = 20; // Espacio entre líneas

    doc.text("Descripción", col1X, currentY);
    doc.text("Especificaciones", col2X, currentY);
    doc.text("Resultados", col3X, currentY);
    doc.text("Rango", col4X, currentY);

    // Filas de la tabla
    currentY += lineSpacing;
    doc.text("Tableta de color blanco, ranurada en una de sus caras", col1X, currentY);
    doc.text("Tableta de color blanco, ranurada en una de sus caras", col2X, currentY);
    doc.text("Conforme", col3X, currentY);
    doc.text("Conforme", col4X, currentY);
    
    currentY += lineSpacing;
    doc.text("Desintegración", col1X, currentY);
    doc.text("Menor o igual a 30 minutos", col2X, currentY);
    doc.text("02 minutos", col3X, currentY);
    doc.text("Conforme", col4X, currentY);

    currentY += lineSpacing;
    doc.text("Det. P. Activo - Lisinopril", col1X, currentY);
    doc.text("20.00 mg/tab", col2X, currentY);
    doc.text("21.17 mg/tab (100.8%)", col3X, currentY);
    doc.text("90.0 - 110.0%", col4X, currentY);
    
    currentY += lineSpacing;
    doc.text("Det. Peso Promedio", col1X, currentY);
    doc.text("200.00 mg/tab", col2X, currentY);
    doc.text("199.59 mg/tab (99.8%)", col3X, currentY);
    doc.text("95.0 - 105.0%", col4X, currentY);
    
    currentY += lineSpacing;
    doc.text("Disolución", col1X, currentY);
    doc.text("Q > 80% en 30 minutos", col2X, currentY);
    doc.text("Q > 80% en 30 minutos", col3X, currentY);
    doc.text("Conforme", col4X, currentY);
    
    // Calificación
    currentY += lineSpacing + 10; // Espacio extra
    doc.text("CALIFICACIÓN: APROBADO", col1X, currentY);
    currentY += lineSpacing;
    doc.text("Las muestras analizadas se encontraron conforme con las especificaciones establecidas.", col1X, currentY);

    // Observaciones
    currentY += lineSpacing + 10;
    doc.text("COMENTARIO: Las muestras analizadas se encontraron conforme con las especificaciones establecidas", col1X, currentY);
    currentY += lineSpacing;
    doc.text("OBSERVACIONES", col1X, currentY);
    
    // Encargado y Dirección
    currentY += lineSpacing + 10;
    doc.text("ENC. DEPARTAMENTO", col1X, currentY);
    doc.text("DIRECCIÓN LNSPDD", col3X, currentY);
    
    // Pie de página
    currentY += lineSpacing + 20;
    doc.setFontSize(8);
    doc.text("C/Santo T. de Aquino #1 Esq. Santiago, Zona Universitaria, Santo Domingo, R.D.", col1X, currentY);
    currentY += lineSpacing;
    doc.text("Tel. 809-682-2819 Fax 809-682-2598", col1X, currentY);
    doc.text("17-mar.-2024", col4X, currentY);

    // Guarda el PDF
    doc.save("certificado_analisis_completo.pdf");
  };

  return (
    <div>
      <div>
        <h3 style={{ textAlign: 'center' }}>MINISTERIO DE SALUD PÚBLICA</h3>
        <h4 style={{ textAlign: 'center' }}>VMGC Viceministerio de Garantía de la Calidad</h4>
        <h4 style={{ textAlign: 'center' }}>LABORATORIO NACIONAL DE SALUD PÚBLICA DR. DEFILLO</h4>
        <h4 style={{ textAlign: 'center' }}>DEPARTAMENTO DE MEDICAMENTOS</h4>
        <h4 style={{ textAlign: 'center' }}>CERTIFICADO DE ANÁLISIS</h4>

        <p>No. DMR23-1011 | Pág.: 1/1</p>
        <p>Fecha Entrada: 17-may.-2023 | Fecha Salida: 16-mar.-2024</p>
        <p>Nombre Producto: TOMOPRES 20 MG | No. Lote: LP-12212 | No. Oficio: S01-23-51921</p>
        <p>Finalidad de Análisis: Registro sanitario</p>
        <p>Forma Farmacéutica: Tableta | Envase Primario: Blister/Aluminio</p>
        <p>Fabricado por: Phoenix- Pharma, S.R.L. | Distribuido por: Phoenix- Pharma, S.R.L.</p>
        <p>Solicitado por: DIGEMAPS</p>

        <h5>RESULTADOS</h5>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Especificaciones</th>
              <th>Resultados</th>
              <th>Rango</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tableta de color blanco, ranurada en una de sus caras</td>
              <td>Tableta de color blanco, ranurada en una de sus caras</td>
              <td>Conforme</td>
              <td>Conforme</td>
            </tr>
            <tr>
              <td>Desintegración</td>
              <td>Menor o igual a 30 minutos</td>
              <td>02 minutos</td>
              <td>Conforme</td>
            </tr>
            <tr>
              <td>Det. P. Activo - Lisinopril</td>
              <td>20.00 mg/tab</td>
              <td>21.17 mg/tab (100.8%)</td>
              <td>90.0 - 110.0%</td>
            </tr>
            <tr>
              <td>Det. Peso Promedio</td>
              <td>200.00 mg/tab</td>
              <td>199.59 mg/tab (99.8%)</td>
              <td>95.0 - 105.0%</td>
            </tr>
            <tr>
              <td>Disolución</td>
              <td>Q > 80% en 30 minutos</td>
              <td>Q > 80% en 30 minutos</td>
              <td>Conforme</td>
            </tr>
          </tbody>
        </table>

        <p>CALIFICACIÓN: APROBADO</p>
        <p>Las muestras analizadas se encontraron conforme con las especificaciones establecidas.</p>

        <p>COMENTARIO: Las muestras analizadas se encontraron conforme con las especificaciones establecidas</p>
      </div>
      <button onClick={generatePDF}>Descargar Reporte</button>
    </div>
  );
};

export default ReportGenerator;
