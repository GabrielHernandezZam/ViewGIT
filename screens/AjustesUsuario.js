import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//Importacion Funcionamiento de tab Navigator
import { TouchableOpacity } from 'react-native';
//Importacion de imagen
import usuarioImage from '../assets/usuario.png';

export default function AjustesUsuario() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Text style={styles.tituloText}>Actualización de Información</Text>
          <Text style={styles.subtitulo}>Estudiante</Text>
          <Image source={usuarioImage} style={styles.logo} />
        </View>

        <View style={styles.formInfo}>
          <Text style={styles.infoText}>
            <Text style={styles.boldText}>Nombre:</Text> Jesus Gabriel Hernandez Zamarripa
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.boldText}>Carrera:</Text> Ing. Sistemas Computacionales
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.boldText}>Matrícula:</Text> 20110580
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.boldText}>Semestre:</Text> 8
          </Text>

          <View style={styles.formInput}>
            <Text style={styles.inputText}>Número de Teléfono:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.inputText}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Actualizar Información"
              onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
              color="#39b54a"
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
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
