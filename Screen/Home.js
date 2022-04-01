import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  const pressHandler = () =>{
    navigation.push('Kanzi');
}
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Talk to Kanzi </Text>
          </View>
      <TouchableOpacity onPress={pressHandler}> 
          <View style={styles.imageContent}>
            <Image style={styles.logo} source={require('../assets/chatbot.png')}/>
          </View>
        <Text style={styles.footerText}> Click to Start a new Chat! </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.qouteContent}>
       <Image style={styles.qouteLogo} source={require('../assets/qoute.png')}/>
       <Text style={styles.qouteText}> You all know that chatbots are a new technology altogether. It's like the early
         age of the web. Things are still shaky yet growing at the speed of light.
       </Text>
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
    marginTop: 10,
  },

  header: {
    paddingTop: 2,
    height: 35,
    backgroundColor: '#5c2932',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white',
  },

  footerText: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    color: 'maroon',
    alignSelf: 'center',
  },

  content: {
    backgroundColor: 'white',
    width: '85%',
    elevation: 20,
    borderRadius: 8,
    paddingBottom: 5,
    marginBottom: 20,
    height: 450,
  },

  imageContent: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 1,
    
  },

  logo: {
    paddingRight: 30,
    height: 380,
    width: '90%',
    backgroundColor: 'transparent',
  },
  
  qouteContent:{
    backgroundColor: '#5c2932',
    width: '85%',
    elevation: 20,
    borderRadius: 8,
    paddingBottom: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  qouteLogo: {
    alignSelf: 'flex-start',
    height: 40,
    width: 40,
    backgroundColor: '#5c2932',
    borderRadius: 8,
  },

  qouteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
    margin: 2,
    padding: 2,
    textAlign: 'center',
  },

});
