import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Ajusta la ruta según donde hayas guardado firebaseConfig.js
import usuarioImage from '../assets/usuario.png'; // Ajusta la ruta según donde hayas guardado usuario.png

export default function AjustesUsuario() {
  const [student, setStudent] = useState(null);
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const docRef = doc(db, 'Alumno', '20100289'); // Usando el ID del documento proporcionado
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const studentData = docSnap.data();
          setStudent(studentData);
          setTelefono(studentData.telefono || '');
          setDireccion(studentData.direccion || '');
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching student data: ', error);
      }
    };

    fetchStudent();
  }, []);

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, 'Alumno', '20100289'); // Usando el ID del documento proporcionado
      await updateDoc(docRef, {
        telefono: telefono,
        direccion: direccion,
      });
      ToastAndroid.show('Información actualizada', ToastAndroid.LONG);
    } catch (error) {
      console.error('Error updating student data: ', error);
      ToastAndroid.show('Error al actualizar la información', ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Text style={styles.tituloText}>Actualización de Información</Text>
          <Text style={styles.subtitulo}>Estudiante</Text>
          <Image source={usuarioImage} style={styles.logo} />
        </View>

        {student ? (
          <View style={styles.formInfo}>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Nombre:</Text> {student.nombre}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Carrera:</Text> {student.carrera}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Matrícula:</Text> 20100289
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Semestre:</Text> {student.semestre}
            </Text>

            <View style={styles.formInput}>
              <Text style={styles.inputText}>Número de Teléfono:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={telefono}
                onChangeText={setTelefono}
              />
            </View>

            <View style={styles.formInput}>
              <Text style={styles.inputText}>Dirección:</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                value={direccion}
                onChangeText={setDireccion}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Actualizar Información"
                onPress={handleUpdate}
                color="#39b54a"
              />
            </View>
          </View>
        ) : (
          <Text>Cargando datos...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitulo: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  form: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    elevation: 3,
  },
  formInfo: {
    marginTop: 20,
  },
  infoText: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputText: {
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: '50%',
  },
});
