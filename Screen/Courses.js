import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Dimensions, } from 'react-native';

const Course = [
  {
    id: 1,
    title: "Bachelor of Science in Information Technology (BSIT)",
    description: "It provides the student with the knowledge to successfully apply information technology theory and principles to address real world business opportunities and challenges. ",
    color: '#5c2932',
    org: 'Institute of Bachelors in Information Technology Studies (IBITS)',
    adviser: 'Michael Anjelo O. Miguel, MIT',
    data: [{
      name: '1st year',
      population: 64,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 32,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 43,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 54,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 2,
    title: "Bachelor of Secondary Education Major in Social Studies (BSEDSS)",
    description: "It provides the students with the knowledge and skills in teaching secondary students about the complex, culturally rich world of the 21st Century.",
    color: '#c5b699',
    org: 'Young Educators Society (YES)',
    adviser: 'Ms. Cheryl Joyce Jurado',
    data: [{
      name: '1st year',
      population: 53,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 42,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 50,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 30,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 3,
    title: "Bachelor of Science in Computer Engineering (BSCpE)",
    description: "It is a program that embodies the science and technology of design, development, implementation, maintenance and integration of software and hardware.",
    color: '#ccb4a4',
    org: 'Association of Computer Engineering Students (ACES)',
    adviser: 'Engr. Hannah Ledda Ferrer',
    data: [{
      name: '1st year',
      population: 50,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 30,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 38,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 39,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 4,
    title: "Bachelor of Secondary Education Major in English (BSEDEN)",
    description: "It provides the student with the necessary foundations, principles and current strategies that they can apply in teaching English as a second language.",
    color: '#717580',
    org: 'Young Educators Society (YES)',
    adviser: 'Ms. Cheryl Joyce Jurado',
    data: [{
      name: '1st year',
      population: 50,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 30,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 38,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 39,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 5,
    title: "Bachelor of Science in Business Administration (BSBA)",
    description: "It provides students with training in core principles of business and with critical and analytical skills.",
    color: '#4c4d5f',
    org: 'Human Resource Student Society (HRSS)',
    adviser: 'Prof. Manolo David Rivera',
    data: [{
      name: '1st year',
      population: 99,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 104,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 104,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 54,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 6,
    title: "Bachelor of Science in Accountancy (BSA)",
    description: "It provides general accounting education to learners who wish to pursue a professional career as accountants.",
    color: '#c4b494',
    org: 'Junior Philippines Institute of Accountants (JPIA)',
    adviser: 'Prof. Melody Lontoc Carreon',
    data: [{
      name: '1st year',
      population: 56,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 32,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 43,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 42,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 7,
    title: "Bachelor of Elementary Education (BEED)",
    description: "It provides academic and appropriate training for future elementary school teachers of Grades 1-6 through the general education courses, professional education, and specialization courses.",
    color: '#6c7484',
    org: 'Young Educators Society (YES)',
    adviser: 'Ms. Cheryl Joyce Jurado',
    data: [{
      name: '1st year',
      population: 50,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 30,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 38,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 39,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 8,
    title: "Bachelor of Science in Industrial Engineering (BSIE)",
    description: "It provides the students with knowledge and skills needed for designing, installing, managing, and maintaining production/manufacturing systems.",
    color: '#7c7474',
    org: 'Philippine Institute of Industrial Engineers (PIIE)',
    adviser: 'Engr. Chirstopher Mira',
    data: [{
      name: '1st year',
      population: 60,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 31,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 31,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 43,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 9,
    title: "Diploma in Computer Engineering Technology (DCET)",
    description: "It prepares the student to use basic engineering principles and technical skills for installing, servicing, and maintaining computers, peripherals, networks, and microprocessor and computer controlled equipment.",
    color: '#ccb4a4',
    org: 'Association of Computer Engineering Students (ACES)',
    adviser: 'Engr. Hannah Ledda Ferrer',
    data: [{
      name: '1st year',
      population: 50,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 30,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 38,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 39,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  },

  {
    id: 10,
    title: "Diploma in Information Communication Technology (DICT)",
    description: "It intends to equip learners with wide range of software, technical and technological ICT skills. The students is expected to develop and apply ICT solutions to solve practical business issues.",
    color: '#5c2932',
    org: 'Institute of Bachelors in Information Technology Studies (IBITS)',
    adviser: 'Michael Anjelo O. Miguel, MIT',
    data: [{
      name: '1st year',
      population: 32,
      color: "#5c2932",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '2nd year',
      population: 27,
      color: "#c5b699",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '3rd year',
      population: 23,
      color: "#4c4d5f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: '4th year',
      population: 0,
      color: "#717580",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]
  }, 
]

export default function Courses({navigation}) {
  
  return (
    <SafeAreaView>
      
      <FlatList
        data={Course}
        contentContainerStyle={{
          padding: 2,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {navigation.navigate('Course Details', { item }); }}>
          <View style={styles.container}>
            <View style={[styles.listContent, {backgroundColor: item.color}]}>
              <Text style={styles.headerText}>{item.title}</Text>
              <Text style={styles.listText}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity> 
        )}
      />
    <View style={styles.bg}/>
  </SafeAreaView>  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  listContent: {
    width: '90%',
    height: 230,
    elevation: 20,
    borderRadius: 8,
    marginBottom: 25,
    justifyContent: 'center',
    padding: 4,
  },

  listText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 15,
    textAlign: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Oswald-Bold',
    margin: 8,
  },

  bg: {
    position: 'absolute',
    backgroundColor: 'red',
    width: Dimensions.get('screen').width,
    height: '100%',
    transform: [{translateY: Dimensions.get('screen').height}],
    borderRadius: 32,
  },
});
