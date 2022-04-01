import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.headerContent}>
          <Text style={styles.listHeader}>What's new</Text>
        <View style={styles.list}>
          <AntDesign name='check' size={16} color={'maroon'}/>
          <Text style={styles.listText}>Fixed bugs</Text>
        </View>
      </View>

      <View style={styles.descContent}>
        <Text style={styles.listHeader}>Description</Text>
        <View style={styles.descContent2}>
          <Text style={styles.listText}>Check PUPBC recent school events, courses offered, and more in this app made for PUP students and for those who want to become one. </Text>
        </View>

        <View style={styles.descContent2}>
          <Text style={styles.listText}>The PUPBC Kanzi ChatBot App keeps necessary school information in this free and easy-to-use app. With this ChatBot app you can now:</Text>
        </View>

        <View style={styles.list}>
          <AntDesign name='check' size={16} color={'maroon'}/>
          <Text style={styles.listText}>Ask question about school related information</Text>
        </View>
        <View style={styles.list}>
          <AntDesign name='check' size={16} color={'maroon'}/>
          <Text style={styles.listText}>Keep track of the old school events</Text>
        </View>
        <View style={styles.list}>
          <AntDesign name='check' size={16} color={'maroon'}/>
          <Text style={styles.listText}>GIves instruction on how to enroll on the semester</Text>
        </View>  
        <View style={styles.list}>  
          <AntDesign name='check' size={16} color={'maroon'}/>
          <Text style={styles.listText}>Helps you decide and see what courses offers in the institution</Text>
        </View>
      </View>


      <View style={styles.appContent}>
        <Text style={styles.listHeader}>App info</Text>
        <View style={styles.appList}> 
          <Text style={styles.listText}>Version</Text>
          <Text style={styles.listText}>1.0.0</Text>
        </View>
        <View style={styles.appList}> 
          <Text style={styles.listText}>Updated On</Text>
          <Text style={styles.listText}>Feb 02, 2022</Text>
        </View>
        <View style={styles.appList}> 
          <Text style={styles.listText}>Offered By</Text>
          <Text style={styles.listText}>PUP Binan Campus</Text>
        </View>
        <View style={styles.appList}> 
          <Text style={styles.listText}>Developed By</Text>
          <Text style={styles.listText}>PUPBC BSIT STUDENTS</Text>
        </View>
      </View>

    <View style={styles.discContent}>
      <Text style={styles.listHeader}>Disclaimer</Text>
      <View style={styles.descContent2}>
          <Text style={styles.listText}>The information contained herein is not on real-time and for information purposes only the information may not be up to date and requires further validation from the school administrator</Text>
        </View>

        <View style={styles.descContent2}>
          <Text style={styles.listText}>If you have further questions that kanzi can't answer, please do not hesitate to get in touch with the school administrator.</Text>
        </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 8,
  },

  headerContent: {
    backgroundColor: 'white',
    width: '100%',
    height: '10%',
    padding: 4,
    elevation: 18,
  },

  list: {
    flexDirection: 'row',
    margin: 4,
  },
  
  listHeader: {
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  listText: {
    color: '#7F7F7F',
    marginLeft: 8,
    fontSize: 12,
  },

  descContent: {
    backgroundColor: 'white',
    marginTop: 2,
    width: '100%',
    height: '40%',
    padding: 4,
    elevation: 18,
  },

  descContent2: {
    margin: 4,
  },

  appContent: {
    backgroundColor: 'white',
    marginTop: 2,
    width: '100%',
    height: '25%',
    padding: 8,
    elevation: 18,
  },
  
  appList: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  discContent: {
    backgroundColor: 'white',
    marginTop: 2,
    width: '100%',
    height: '25%',
    padding: 8,
    elevation: 18,
  }

});
