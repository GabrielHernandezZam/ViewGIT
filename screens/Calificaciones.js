import { ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { collection, getDocs } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import { db } from './firebaseConfig'; // Asegúrate de que la ruta a tu configuración de Firebase sea correcta

//Importacion Funcionamiento de tab Navigator
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


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
      <Text style={styles.infoText}>Semestre: {student.semestre}</Text>
    </View>
  </View>
);

export default function Calificaciones() {

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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calificaciones</Text>
      </View>

      <View style={styles.infoContainer}>
        <SubHeader text="Alumno" />
        {student && <Profile student={student} />}
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
