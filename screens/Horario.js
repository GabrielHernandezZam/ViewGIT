import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//Importacion Funcionamiento de tab Navigator
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');

const studentInfo = {
  name: "Carlos Manuel Molina Reyes",
  controlNumber: "2016230019",
  courses: [
    { name: "Patrones de Diseño de Software", teacher: "MC. Rene Solis Reyes", time: "10:00 - 12:00", day: "Lunes", room: "CF-1" },
    { name: "Análisis Avanzado de Desarrollo de Software", teacher: "MC. Jose De Jesus Piñera Galaviz", time: "14:00 - 16:00", day: "Martes", room: "9114" },
    { name: "Patrones de Diseño de Software", teacher: "MC. Rene Solis Reyes", time: "10:00 - 12:00", day: "Miércoles", room: "CF-1" },
    { name: "Análisis Avanzado de Desarrollo de Software", teacher: "MC. Jose De Jesus Piñera Galaviz", time: "14:00 - 16:00", day: "Jueves", room: "9114" }
  ]
};

const hours = Array.from({ length: 15 }, (_, i) => `${7 + i}:00`);
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const ScheduleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reinscripción</Text>
        <Text style={styles.subHeaderText}>{studentInfo.name}</Text>
        <Text style={styles.subHeaderText}>No. Control: {studentInfo.controlNumber}</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <View style={styles.daysRow}>
          <Text style={styles.timeHeader}></Text>
          {days.map((day) => (
            <Text key={day} style={styles.dayText}>{day}</Text>
          ))}
        </View>
        {hours.map((hour, index) => (
          <View key={index} style={styles.hourRow}>
            <Text style={styles.timeText}>{hour}</Text>
            {days.map((day) => (
              <View key={day} style={styles.hourBlock}>
                {studentInfo.courses.map((course, i) => {
                  const courseStartHour = parseInt(course.time.split(" - ")[0].split(":")[0]);
                  const hourStart = parseInt(hour.split(":")[0]);
                  if (course.day === day && courseStartHour === hourStart) {
                    return (
                      <View key={i} style={styles.courseBlock}>
                        <Text style={styles.courseText}>{course.name}</Text>
                        <Text style={styles.courseText}>{course.teacher}</Text>
                        <Text style={styles.courseText}>{course.room}</Text>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 14,
    marginTop: 3,
    color: '#fff',
  },
  scheduleContainer: {
    paddingHorizontal: 5,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  timeHeader: {
    width: 50,
  },
  timeText: {
    fontSize: 10,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  hourRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  hourBlock: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 2,
    minHeight: 50,
  },
  courseBlock: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 2,
    alignItems: 'center',
    width: '100%',
  },
  courseText: {
    fontSize: 8,
    color: '#fff',
    textAlign: 'center',
  },
});
export default ScheduleScreen;
