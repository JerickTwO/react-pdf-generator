import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './components/pdfDocument';

const App = () => {
  const [name, setName] = useState('John Doe');
    const [studentCode, setStudentCode] = useState('123456789');

  return (
    <div>
      <h1>Generador de PDF</h1>
      <PDFDownloadLink document={<PDFDocument name={name} studentCode={studentCode} />} fileName="constancia.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Cargando documento...' : <button>Descargar PDF</button>
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;

