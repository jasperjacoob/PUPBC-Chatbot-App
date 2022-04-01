import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import HyperLink from 'react-native-hyperlink';
import FlatButton from './components/Button';

export default function CourseDetails({navigation, route}) {
    const {item} = route.params;
  return (
    // <View style={styles.container}>
    <View style={[styles.listContent, {backgroundColor: item.color}]}>
        <StatusBar style="auto" />
            <Text style={styles.headerText}>{item.title}</Text>
            <Text style={styles.listText}>{item.description}</Text>
        
        <View style={styles.bg}>
           
            <Text style={styles.contentHeader}> Current Course Population </Text>
        <PieChart
            data={item.data}
            width={400}
            height={300}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"35"}
            center={[10, 10]}
            absolute
            />

            <Text style={styles.contentText}>Current Organization:</Text>
            <Text style={styles.desText}>{item.org}</Text>
            <Text style={styles.contentText}>Current Organization Adviser:</Text>    
            <HyperLink linkDefault={true}>
                <Text style={styles.desText}>{item.adviser}</Text>
            </HyperLink>
         </View>
     

    </View>
    // </View>
  );
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    width: '100%',
    height: '80%',
    elevation: 20,
    borderRadius: 8,
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    backgroundColor: 'white',
    width: Dimensions.get('screen').width,
    height: '100%',
    transform: [{translateY: 200}],
    borderRadius: 32,
    padding: 8,
    alignItems: 'center',
  },

  contentHeader: {
    color: 'black',
    fontSize: 22,
    letterSpacing: 2,
    fontFamily: 'Oswald-Regular',
    margin: 4,
  },

  contentText:{
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: 2,
  },

  desText: {
      fontSize: 14,
      marginBottom: 15,
  },
});
