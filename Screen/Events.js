import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity,} from 'react-native';
import { Card, Button, Paragraph, Title } from 'react-native-paper';
import Pinchable from 'react-native-pinchable';
const Data = [
  {
    id: 1,
    title: '𝐏𝐔𝐏: 𝐏𝐚𝐠 𝐔𝐬𝐚𝐩𝐚𝐧𝐠 𝐏𝐚𝐠-𝐢𝐛𝐢𝐠 ❤️',
    description: "Are you ready for the most awaited kiligan event this year? 🎉 \nMalapit na mag valentine's day pero wala ka parin ka-date? Okay lang yan dahil nandito ang Central Student Council para samahan at pasayahin kayo, pangako na hindi namin kayo sasaktan at iiwan! 🤚 \nHindi man tayo magkakasama personally, we will make this event a most memorable one kahit na we will celebrate virtually. \nAanhin mo naman ang lovelife kung nandito kami para ipaalala sa'yo na you should love life? \nWhy don't we seize the opportunity to ease our lives by celebrating this Valentine's Day and giving the 'kilig' sensation of knowing that we are loved? \nPlease stay tuned as we prepare the most nakakakilig at nakaka panakit ng damdamin na event para sa inyo! ❤️ \n#cscpupbc \n#PagUsapangPagIbig2022 \n#smcedits \nEdited By: Leanne Martin", 
    color: 'white',
    date: 'Feb 08,2022',
    image: require('../assets/events/feb.jpg'),
   
  },
  {
    id: 2,
    title: 'Year End Party ',
    description: "𝑰𝒕'𝒔 𝒕𝒉𝒆 𝒉𝒂𝒑𝒑𝒊𝒆𝒔𝒕 𝒕𝒊𝒎𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒚𝒆𝒂𝒓. 🎉 𝑨 𝒏𝒊𝒈𝒉𝒕 𝒇𝒊𝒍𝒍𝒆𝒅 𝒘𝒊𝒕𝒉 𝒍𝒂𝒖𝒈𝒉𝒕𝒆𝒓 𝒂𝒏𝒅 𝒎𝒆𝒎𝒐𝒓𝒊𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒆 𝒑𝒂𝒔𝒕. 𝑱𝒐𝒊𝒏 𝒖𝒔 𝒊𝒏 𝒄𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒏𝒈 𝒕𝒉𝒆 𝒉𝒐𝒍𝒊𝒅𝒂𝒚 𝒔𝒆𝒂𝒔𝒐𝒏, 𝒂𝒏𝒅 𝒍𝒆𝒕'𝒔 𝒓𝒊𝒏𝒈 𝒊𝒏 𝟐𝟎𝟐𝟐 𝒘𝒊𝒕𝒉 𝒂 𝒃𝒂𝒏𝒈! 𝑴𝒂𝒌𝒆 𝒕𝒉𝒊𝒔 𝒔𝒆𝒂𝒔𝒐𝒏 𝒅𝒆𝒍𝒊𝒈𝒉𝒕𝒇𝒖𝒍 𝒂𝒏𝒅 𝒂𝒎𝒂𝒛𝒊𝒏𝒈 𝒃𝒚 𝒂𝒕𝒕𝒆𝒏𝒅𝒊𝒏𝒈 𝒕𝒉𝒆 𝑪𝒆𝒏𝒕𝒓𝒂𝒍 𝑺𝒕𝒖𝒅𝒆𝒏𝒕 𝑪𝒐𝒖𝒏𝒄𝒊𝒍'𝒔 𝒚𝒆𝒂𝒓-𝒆𝒏𝒅 𝒑𝒂𝒓𝒕𝒚, 𝑰𝒔𝒌𝒐 𝑷𝒂𝒔𝒌𝒐 𝟐𝟎𝟐𝟏: 𝑨 𝑽𝒊𝒓𝒕𝒖𝒂𝒍 𝒀𝒆𝒂𝒓 𝑬𝒏𝒅𝒆𝒓 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒕𝒉𝒆𝒎𝒆 𝑰𝒌𝒂𝒘 𝒂𝒕 𝑨𝒌𝒐 (𝑰𝑲𝑨𝑲𝑶)! 𝑳𝒆𝒕 𝒖𝒔 𝒉𝒆𝒍𝒑 𝒚𝒐𝒖 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒐𝒓 𝒔𝒉𝒐𝒘 𝒐𝒇𝒇 𝒚𝒐𝒖𝒓 𝒕𝒂𝒍𝒆𝒏𝒕𝒔, 𝒘𝒉𝒆𝒕𝒉𝒆𝒓 𝒊𝒕'𝒔 𝒔𝒊𝒏𝒈𝒊𝒏𝒈, 𝒅𝒂𝒏𝒄𝒆, 𝒐𝒓 𝒑𝒐𝒆𝒕𝒓𝒚. 𝑺𝒆𝒆 𝒚𝒐𝒖 𝒕𝒉𝒆𝒓𝒆, 𝒂𝒏𝒅 𝒍𝒆𝒕'𝒔 𝒇𝒊𝒏𝒊𝒔𝒉 𝒕𝒉𝒆 𝒚𝒆𝒂𝒓 𝒘𝒊𝒕𝒉 𝒂 𝒃𝒂𝒏𝒈! \nEdited by: Ma. Jesheryl Angel (Graphic Designer - SMC) Caption by: Genivive Garcia (Executive Board Secretary) \n#cscpupbc \n#PUPBC \n#iskopasko2021 \n#roadto2022", 
    color: 'white',
    date: 'Dec 16,2021',
    image: require('../assets/events/yearEnd.jpg'),
  },
  {
    id: 3,
    title: 'E4E 2021',
    description: 'This week, PUP Biñan celebrates its 12th Founding Anniversary! Cheers to everyone, to the ISKOmunity, to our beloved students, admin., and faculty who survived another year amidst the challenges brought by the pandemic. \nBehold! Because this new normal will never hinder us from celebrating and make our 12th Founding Anniversary memorable and exciting.\n #NurturingAcademicExcellenceInTheNewNormal \n #PadayonPUPBC \n #MATATAGmula2009 \n #MulaSayoParaSaBAYAN', 
    color: 'white',
    date: 'Sept 08,2021',
    image: require('../assets/events/e4e.jpg'),
    
  },
]


  
  

const CardItem = ({item}) => { 
  const [showMore, setShowMore] = useState(false)
  return(
    <Card style={styles.cardStyle}>
     {/* <TouchableOpacity onPress={() => setModalOpen(true)}> */}
    <Card.Cover source={ item.image }/>
    {/* </TouchableOpacity>  */}
    <Card.Content>
      <Title style={styles.titleText}>{ item.title }</Title>
      <Title style={styles.dateText}>{ item.date }</Title>
      <Paragraph style={styles.parText} numberOfLines={showMore ? 0 : 2}>{ item.description }</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Read More"}</Button>
    </Card.Actions>
</Card>

)}

export default function Events({navigation}) {
   const [modalOpen, setModalOpen] = useState(false);
  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
         <CardItem item={item}/>
        )}
      />
      
  </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'flex-start',
    margin: 8,
  },

  dateText: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#7F7F7F',
  },

  cardStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  titleText: {
    letterSpacing: 1,
  },

  
});
