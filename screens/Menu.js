import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import ittImage from '../assets/itt.png';
//Importacion Funcionamiento de tab Navigator
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ITT ID</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={ittImage}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Estudiante</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/user.png' }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nombre: Jesus Gabriel Hernandez Zamarripa</Text>
          <Text style={styles.infoText}>Carrera: Ing. Sistemas Computacionales</Text>
          <Text style={styles.infoText}>No. control: 20210580</Text>
          <Text style={styles.infoText}>Semestre: 8</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4CAF50', // Green color
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
