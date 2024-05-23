import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { collection, getDocs } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import { db } from './firebaseConfig'; // Asegúrate de que la ruta a tu configuración de Firebase sea correcta
import ittImage from '../assets/itt.png';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>ITT ID</Text>
  </View>
);

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image
      source={ittImage}
      style={styles.logoImage}
    />
  </View>
);

const SubHeader = ({ text }) => (
  <View style={styles.subHeaderContainer}>
    <Text style={styles.subHeaderText}>{text}</Text>
  </View>
);

const Profile = ({ student }) => (
  // Ajusta los campos dentro de esta vista según los nombres de los campos en tus documentos de Firestore
  <View style={styles.profileContainer}>
    <Image
      style={styles.profileImage}
      source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/user.png' }}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>No. control:  {student.id}</Text> {/* Mostrar ID del Documento */}
      <Text style={styles.infoText}>Nombre: {student.nombre}</Text>
      <Text style={styles.infoText}>Carrera: {student.carrera}</Text>
      <Text style={styles.infoText}>Semestre: {student.semestre}</Text>
    </View>
  </View>
);

export default function Menu() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      // Cambia 'students' por el nombre de tu colección en Firestore
      const querySnapshot = await getDocs(collection(db, "Alumno"));
      // Si hay múltiples documentos y solo necesitas el primero, ajusta esto según sea necesario
      const studentData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
      setStudent(studentData);
    };

    fetchStudent();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Logo />
      <SubHeader text="Alumno" />
      {student && <Profile student={student} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  logoImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  subHeaderContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
    fontWeight: '600',
  },
});