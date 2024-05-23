import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Ajusta la ruta según donde hayas guardado firebaseConfig.js

// Componente SubHeader: muestra un encabezado secundario
const SubHeader = ({ text }) => (
  <View style={styles.subHeaderContainer}>
    <Text style={styles.subHeaderText}>{text}</Text>
  </View>
);

// Componente de perfil: muestra la información del estudiante
const Profile = ({ student }) => (
  <View style={styles.profileContainer}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>No. control: {student.id}</Text> {/* Mostrar ID del Documento */}
      <Text style={styles.infoText}>Nombre: {student.nombre}</Text>
      <Text style={styles.infoText}>Carrera: {student.carrera}</Text>
      <Text style={styles.infoText}>Semestre: {student.semestre}</Text>
    </View>
  </View>
);

// Componente de tabla de calificaciones: muestra las calificaciones del estudiante en una tabla
const CalificacionesTable = ({ grades }) => (
  <View style={styles.tableContainer}>
    <View style={[styles.tableRow, styles.tableHeaderRow]}>
      <Text style={styles.tableHeader}>Materia</Text>
      <Text style={styles.tableHeader}>Unidad 1</Text>
      <Text style={styles.tableHeader}>Unidad 2</Text>
      <Text style={styles.tableHeader}>Unidad 3</Text>
      <Text style={styles.tableHeader}>Calificación</Text>
    </View>
    {grades.map((grade, index) => (
      <View style={styles.tableRow} key={index}>
        <Text style={styles.tableCell}>{grade.materiaNombre}</Text>
        <Text style={styles.tableCell}>{grade.unidad_1}</Text>
        <Text style={styles.tableCell}>{grade.unidad_2}</Text>
        <Text style={styles.tableCell}>{grade.unidad_3}</Text>
        <Text style={styles.tableCell}>{grade.CalFinal}</Text>
      </View>
    ))}
  </View>
);

// Componente principal: obtiene los datos del estudiante y sus calificaciones y los muestra
export default function Calificaciones() {
  const [student, setStudent] = useState(null); // Estado para almacenar los datos del estudiante
  const [grades, setGrades] = useState([]); // Estado para almacenar las calificaciones

  useEffect(() => {
    // Función para obtener los datos del estudiante y sus calificaciones
    const fetchStudentAndGrades = async () => {
      try {
        // Obtener los datos del primer estudiante
        const studentQuerySnapshot = await getDocs(collection(db, 'Alumno'));
        const studentData = studentQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
        setStudent(studentData);

        if (studentData) {
          // Crear una consulta para obtener las calificaciones del estudiante usando su referencia
          const gradesQuery = query(collection(db, 'Calificaciones'), where('alumno', '==', doc(db, `Alumno/${studentData.id}`)));
          const gradesQuerySnapshot = await getDocs(gradesQuery);

          // Resolver las referencias de materia y almacenar los datos de calificaciones
          const gradesData = await Promise.all(gradesQuerySnapshot.docs.map(async doc => {
            const gradeData = doc.data();
            const materiaDoc = await getDoc(gradeData.materia);
            const materiaNombre = materiaDoc.exists() ? materiaDoc.data().nombre : 'Desconocida';

            return { ...gradeData, materiaNombre };
          }));

          setGrades(gradesData);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchStudentAndGrades();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calificaciones</Text>
      </View>

      <View style={styles.infoContainer}>
        <SubHeader text="Alumno" />
        {student ? (
          <Profile student={student} />
        ) : (
          <Text>Cargando datos...</Text>
        )}
      </View>

      <SubHeader text="Calificaciones" />
      {grades.length > 0 ? (
        <CalificacionesTable grades={grades} />
      ) : (
        <Text style={styles.infoText}>No hay calificaciones disponibles.</Text>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>NA; No Aprobó</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginTop: 30,
  },
  subHeaderContainer: {
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    marginVertical: 10,
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  tableHeaderRow: {
    backgroundColor: '#4CAF50',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: 'red',
  },
});