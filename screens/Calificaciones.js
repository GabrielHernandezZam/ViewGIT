import { ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

//Importacion Funcionamiento de tab Navigator
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Calificaciones() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calificaciones</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Semestre:</Text> 8
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Carrera:</Text> Ing. Sistemas Computacionales
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>No. control:</Text> 20210580
        </Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={[styles.tableRow, styles.tableHeaderRow]}>
          <Text style={styles.tableHeader}>Materia</Text>
          <Text style={styles.tableHeader}>Unidad 1</Text>
          <Text style={styles.tableHeader}>Unidad 2</Text>
          <Text style={styles.tableHeader}>Unidad 3</Text>
          <Text style={styles.tableHeader}>Calificación</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Cálculo</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>POO</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Diseño web</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Innovacion</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>NA; No Aprobó</Text>
      </View>
    </ScrollView>
  );
}

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
