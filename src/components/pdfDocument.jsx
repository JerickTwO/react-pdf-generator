import React from 'react';
import { Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import Logo from './logo1.png'
const styles = StyleSheet.create({
  body: {
    padding: 0,
    backgroundColor: '#f2f2f2',
  },
  container: {
    margin: '0 auto',
    backgroundColor: 'white',
    padding: 25, // Reducir el padding para el PDF
    border: 1,
    borderColor: '#ccc',
    boxShadow: '0 0 10 rgba(0, 0, 0, 0.1)',
  },
  header: {
    marginBottom: 10,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    objectFit: 'fill',
  },
  middleText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    gap: 15,
    margin: '0 20px',
  },
  span: {
    borderStyle: 'solid',
    borderWidth: 2,
    display: 'block',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    padding: '15px 5px',
  },
  span1: {
    boxShadow: '2px 3px 3px #9BABC2',
    borderColor: '#9BABC2',
    backgroundColor: 'rgba(152, 175, 211, 1)',
    backgroundGradient: 'linear-gradient(0deg, rgba(152,175,211,1) 0%, rgba(255,255,255,1) 100%)',
  },
  span2: {
    boxShadow: '2px 3px 3px #B3C9A0',
    borderColor: '#B3C9A0',
    backgroundColor: 'rgba(198, 228, 178, 1)',
    backgroundGradient: 'linear-gradient(0deg, rgba(198,228,178,1) 0%, rgba(255,255,255,1) 100%)',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  paragraph: {
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    marginLeft: 20,
  },
  footer: {
    marginTop: 40,
    textAlign: 'left',
  },
  horizontalRule: {
    borderTopWidth: 2,
    borderTopColor: '#000',
  },
  footerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
});


const PDFDocument = ({ name, studentCode }) => (

  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <Image style={styles.logo} src={Logo} />
            <View style={styles.middleText}>
              <Text style={[styles.span, styles.span1]}>UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC</Text>
              <Text style={[styles.span, styles.span2]}>UNIDAD DE INVESTIGACIÓN DE LA FACULTAD DE INGENIERÍA</Text>
            </View>
            <Image style={styles.logo} src={Logo} />
          </View>
          <Text style={styles.footerText}>
            “AÑO DEL BICENTENARIO, DE LA CONSOLIDACIÓN DE NUESTRA INDEPENDENCIA, Y DE LA
            CONMEMORACIÓN DE LAS HEROICAS DE JUNÍN Y AYACUCHO”
          </Text>
        </View>
        <Text style={styles.title}>CONSTANCIA Nº 018-2024-D. UIFI-UNAMBA</Text>
        <Text style={styles.paragraph}>
          EL DIRECTOR DE LA UNIDAD DE INVESTIGACIÓN DE LA FACULTAD DE INGENIERÍA DE LA UNIVERSIDAD NACIONAL MICAELA
          BASTIDAS DE APURÍMAC
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>HACE CONSTAR:</Text>
        </Text>
        <Text style={styles.paragraph}>
          Que, el <Text style={styles.bold}>Bach. {name}</Text>, identificado(a) con <Text style={styles.bold}>DNI N° {studentCode}</Text>
          y <Text style={styles.bold}>Código de estudiante N° {studentCode}</Text>...
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
