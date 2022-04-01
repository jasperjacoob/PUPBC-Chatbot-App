import React, { Component }  from 'react';
import { View, ScrollView, Linking, StyleSheet, ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { GiftedChat, Bubble, MessageImage, Day, Send } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import {Card} from 'react-native-elements';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env';
import {LogBox} from 'react-native';
import { LocationView } from "./components/LocationView";
import FlatButton from './components/Button';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';




const botAvatar = require ('../assets/images/icon.jpg')

const BOT = {
  _id: 2,
  name: 'Kanzi',
  avatar: botAvatar
}

class ChatBot extends Component{

  state = {
    messages: [
    {
      _id: 2, 
      text: 'Hello there! My Name is Kanzi, and I am here to assist you. What are your concerns ?',
      createdAt: new Date(), 
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'How to enroll?', values: 'How to enroll in PUP'},
          {title: 'Start of Enrollment', values: 'Enrollment'},
          {title: 'Location of PUPBC' , values: 'PUPBC Address'},
          {title: 'PUP Organization' , values: 'PUP Organization'}

        ]   
      }
    },
    {
    _id:1, 
    name: ''
    }
    ] 
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }
// dialogflow chatbot response
  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  async sendBotResponse(text) {
    let msg;

 
  if (text == 'Enrollment') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Hello, I am sad to say that I will not be able to help you regarding to your concerns. However I will not let you hanging I have here the link of the official Facebook page of the PUP Biñan they will announce the start of enrollment there. Here is the link of the PUP Biñan Facebook page: https://www.facebook.com/PUP-Bi%C3%B1an-Page-101117505176956/',
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'How to enroll?', values: 'How to enroll in PUP'},
          {title: 'Location of PUPBC' , values: 'PUPBC Address'},
          {title: 'PUP Organization' , values: 'PUP Organization'},
          {title: 'Is PUPBC had tuition fee?' , values: 'Tuition'}
        ]   
      } 
    };
  }
  else if (text == 'pupiapply') {
    msg = {
      _id: this.state.messages.length + 1, 
      text:'Here is the link on how to enroll in pup: https://osssac.pup.edu.ph/knowledgebase.php?article=62',
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'Available Courses', values: 'Courses'},
          {title: 'Grade Qualification', values: 'Admissions'},
          {title: 'Location of PUPBC' , values: 'PUPBC Address'},
          {title: 'PUP Organization' , values: 'PUP Organization'},
          {title: 'Is PUPBC had tuition fee?' , values: 'Tuition'}

        ]   
      }
    };
  }
  else if (text == 'courseoffered'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the courses that PUP offers: \n \n • Bachelor of Science in Information Technology (BSIT). \n \n• Bachelor of Science of in Industrial Engineering (BSIE). \n \n• Bachelor of Science in Computer Engineering (BSCpE). \n \n• Bachelor of Elementary Education (BEED). \n \n• Bachelor of Secondary Education major in English (BSEDEN). \n \n• Bachelor of Secondary Education major in Social Studies (BSEDSS). \n \n• Bachelor of Science in Business Administration major in Human Resource Management (BSBA-HRM). \n \n• Bachelor of Science of in Accountancy (BSA). \n \n• Diploma in Computer Engineering Technology (DCET). \n \n• Diploma in Information Communication Technology (DICT).',
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'PUPBC Established', values: 'Founded'},
          {title: 'Grade Qualification', values: 'Admissions'},
          {title: 'Location of PUPBC' , values: 'PUPBC Address'},
          {title: 'PUP Organization' , values: 'PUP Organization'},
          {title: 'Is PUPBC had tuition fee?' , values: 'Tuition'},
          {title: 'PUPBC Director' , values: 'Campus Director'}
        ]   
      }
    };
  }
  else if(text == 'pupuniform') {
    msg = {
      _id: this.state.messages.length + 1, 
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/275330894_107435411894631_408835815773225357_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=H8gbdOYeqCYAX8eXji0&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8yg_pwNwJzfWGuAMjsShDv_hGCnxO9FTRZetXn8ibmjg&oe=622C82A3',
      text: 'Every PUP students shall dress up with dignity and respect and must adhere to the conventions of decency and proper grooming.',
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'PUPBC Established', values: 'Founded'},
          {title: 'Grade Qualification', values: 'Admissions'},
          {title: 'Location of PUPBC' , values: 'PUPBC Address'},
          {title: 'PUP Organization' , values: 'PUP Organization'}

        ]   
      }
    };
  }
  else if (text == 'puporg') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Click the page',
      createdAt: new Date(),
      user: BOT,
      isOptions: true,
      data: [
        {
          text: 'https://www.facebook.com/iBITSPUPBC/',
          title: 'Institute of Bachelors in \n Information Technology Studies',
          image:
            'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/65423163_579434242582789_88888127761940480_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=7c-9x0AxYgYAX_Q-90C&_nc_ht=scontent-hkt1-1.xx&oh=00_AT9GIdIjycI5WjwhV60mfdrj7hU67MFUOYcgHK2mtLA_ZA&oe=6243A04D'
        },
        {
          text: 'https://www.facebook.com/acespupbc/',
          title: 'Association of \n Computer Engineering Students',
          image:
            'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/35123440_1815400601850437_534856821446279168_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xMUkw7ki1TMAX-0CYC2&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT_4GJAqxfLevs_w85N6uU0PG40G_jtxWwwTF1xQ6mBCZg&oe=621A4BB0',
          
        },
        {
          text: 'https://www.facebook.com/PIIEPUPBSC/',
          title: 'Philippine Institute of \n Industrial Engineers',
          image:
            'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/187377484_1399343800398781_6270137783009856287_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElDCvb_LiOQjMp9tZrvRNfXcqeGWmFzJddyp4ZaYXMl0EhYfXB2hsHDoZLG8S-MoruGDU0gqPDkOavP5eNQlzy&_nc_ohc=tY1ZTDA7CDoAX_Ydftw&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT_sLBsUWnFr7vO6zowE_YAucMJ_OeCzW2Mkf9UMJfwipw&oe=621AAD6A',
          
        },
        {
          text: 'https://www.facebook.com/HRSSPUPBC/',
          title: 'Human Resource \n Students Society',
          image:
            'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/118351601_118347579983107_2585199019383034894_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF3Y1z3efG--uTGlnMrXRS0C3QbPIzZyTQLdBs8jNnJNEJUVFGN-0TT194smMJW9KVCASfyrQALcy6zDwtJ5k6O&_nc_ohc=q5pJoB24gV8AX_X90Rl&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT-8VMJxs9_AE_Q50hMUThsXbW4vKPg3YvAEFk_5Lm0Few&oe=62194EAA',
          
        },
        {
          text: 'https://www.facebook.com/yesorgpupbc/',
          title: 'Young Educators \n Society',
          image:
            'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/66247124_663132327498665_7328558802322587648_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFbgbH0uEw68IAqtoLPEcR7v3gNmSMUWPy_eA2ZIxRY_Ei54HaWqJoLRgDD2-qBP_c4WkwIyI64mXt7kN9hfAzp&_nc_ohc=PtHgUHO95f0AX8OTIDj&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT-FI0WJlCxqDu3P3mt-bReix-gfAWwXydC-9Qzqec4t8Q&oe=621CC7A3',
          
        },
        {
          text: 'https://www.facebook.com/PUPJPIABinan/',
          title: 'Junior Philippine \n Institute of Accountants',
          image:
            'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/272055435_885071275510945_2318473886805461542_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFedQHrhb6CPczS4VTFK2wj_8k-fSTm5Lf_yT59JObkt3Yvr-CqpK7mledGy6mWYck8FuwSH8B3Lp74qXgKT7dl&_nc_ohc=qGUBiQ6cAmYAX_M0lsV&tn=HVSLO8dX8v2zZaco&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8h6Gl_O6F-178by_xDCo4uv4rMZhCSYAJp982en7HNUA&oe=61F9F5D3',
          
        },
        {
          text: 'https://www.facebook.com/CSCPUPBN/',
          title: 'Central \n Student Council',
          image:
            'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/243482651_3319507104942788_1803574091571913504_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE9q3T0qyBvi7WR_zbnjOLBb1qdPuyLhRZvWp0-7IuFFmeWXIJ4HINa9r_ME5FDuUr0Fu9-4PYwXMRGeh7t4u8o&_nc_ohc=Ts4wtpuZv6cAX8YFYNG&tn=6OQK3iKJU2s7Vx5Y&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT-mhaz7DfgV3-5AgXEL5-kZgamUYJAjX0lfuSYqrHBkPw&oe=621EB89C',
          
        }       
      ],
     
    }
  }
  else if (text == 'pupestablish'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Polytechnic University of the Philippines - Binan (PUP - Binan) is a public external unit of Polytechnic Univesity of the Philippines situated in Binan, Laguna. The campus was established through a Memorandum of Agreement (MOA) between the University and the City of Government of Binan in 2010',
      image: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/147306868_141801797775193_1845435092686489228_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=k7ZmSOrUdrQAX85QWia&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT8P_IUHVSvTjQaehibg1R0M3-pTlNacdURwE16VgHdgPg&oe=62227D82',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupmap'){
    msg = {
      _id: this.state.messages.length + 1,
      text,
      haha: true,
      location: {
        latitude: 14.313542,
        longitude: 121.078340},
        data: [
          {
              text: 'Polytechnic University of the Philippines, Biñan or PUP Biñan is a PUP campus located in Brgy. Zapote, City of Biñan, Laguna, Philippines. \nIt is behind the Municipal Hall of Biñan and Alonte Sports Arena. \n\nClick the map to navigate the address:',
          }
        ],
      createdAt: new Date(),
      user: BOT,
      
    };
  }
  else if (text == 'pupcsc'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Central Student Council in PUP Biñan: \n \nExecutive Body: \n \nPresident:  \nFrancis D. Bustarde \n \nExecutive Vice President : \nRalph Matthew S. Casbadillo \n  \nExecutive Board Secretary: \nGenivive Garcia \n \nAssociate Secretary: \nRose Joy C. Balonzo \n  \nVice President for Budget and Finance: \nMenchie C. Jimenez \n  \nAssociate Treasurer: \nMarvin A. Del Mundo \n  \nVice President for Audit: \nPiolo E. Laspiñas \n  \nVice President for Internal Affairs: \nKenn Aldrin R. Tabusao \n \nVice President for External Affairs: \nKaren M. Revilla \n \nVice President for Academic Affairs: \nJohn Warren V. Ching \n \nVice President for Non-Academic Affairs: \nClaudette R. Martillano \n \nVice President for Public Relations: \nSalma Fae A. Lumaoang \n \nVice President for Research and Development: \nBryll Kenryl T. Murro \n \nVice President for Marketing and Management: \nErica Mae C. Navarrete \n \n4th Year Representative: \nKristine Kaye B. Zamora \n \n3rd Year Representative: \nCarmela Joy Reyes \n \n2nd Year Representative: \nNicole H. Tamayo \n \n1st Year Representative: \nAlexandra Ruri Mae A. Albesa \n \nChairpersons: \n \nChairperson on Sports: \nJerald Buitizon \n \nChairperson on Culture and Arts: \nKarl Justine Dizon \n \nChairperson on Gender and Equality: \nRafhael A. Catindig \n \nChairperson on Student Health and Welfare: \nChristine Joy Magallanes \n \nChairperson on Environment: \nJovelyn D. Aloner \n \nChairperson on Safety and Order: \nJerome C. Bayanin \n \nChairperson on Ministry: \nKhrenly G. Alpeche ',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'puppiie'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Philippine Institute of Industrial Engineers in PUP Biñan: \n \nPresident: \nGio M. Marcos\n \nVice President for Internal Affairs: \nKaizen Ariela P. Ramiscal \n \nVice President for External Affairs Secretary: \nRudolf Christian O. Soberano \n  \nVice President fo Academics and Research: \nTrisha Mae Z. Molina  \n \n Assistant Vice President for Academics and Research: \nMaricris B. Oquendo \n \nVice President for Activities: \nJohn Harvey A. Manibug  \n \nAssistant Vice President for Activities: \nMarielle G. Talape  \n \nVice President for Finance: \nAlecks A. Brito  \n \nVice President for Publications: \nFederico Joaquin C. Rivera \n \nVice President for Marketing: \nJake Ryan S. Cataroja \n\nAssistant Vice President for Marketing: \nJeremiah Luis Buhain  ',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'puphrss') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Human Resource Students Society in PUP Biñan: \n \nPresident: \nMark Renzo A. Garrison\n \nExecutive Vice President: \nWacky C. Chua\n \nExecutive Board Secretary: \nPatricia Mae E. Sioco\n \nExecutive Board Audito: \nKaironizza P. Villanera\n \nVice President for Finance and Budgeting: \nLyris Maire D. Gutierrez\n \nVice President for External Affairs: \nLuke Abram M. Yarra\n \nVice President for Public Affairs: \nJanea Cristine A. Barrientos\n \nVice President for Multimedia & Development: \nGian Karlo V. Badayos\n \nVP for Student Relations-Academics: \nElyssa Marie Bechachino\n \nVP for Student Relation-Arts: \nDionard V. Sixta\n \nVP for Student Relation-Sports: \nQueenie P. David\n \nAmbassadress: \nAime M. Matsumoto\n \nAssociate Board Secretary: \nGeraldine A. Maravilla\n \nAssociate VP for Finance and Budgeting: \nCyberlin T. Leria',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupjpia') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Junior Philippine Institute of Accountants in PUP Biñan: \n \nPresident: \nAriane Rei Aloria \n \nExec VP: \nJasper Carillo \n \nVP Acads: \nMaria Fe Pulvera \n \nVP NAcads: \nJhanna Mea Dumlao \n\nVP Membership: \nHannah Jemimah Magnaye\n \nVP Communication: \nChristine Joy Nava \n \nVP Finance: \nJasmine Joyce Aluciman \n \nVP Audit: \nRaelyn Fae Faller \n \nVP Information and Publicity: \nLeslie Saez \n \nSecretary-General: \nAllaine Saniel',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupbsit') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Institute of Bachelors in Information Technology Studies in PUP Biñan: \n \nPresident: \nAntonitte Jane Magsombol \n \nVice President for Internal: \nRand angel a. Padua \n \nVice President For External: \nTherrence S. Catalan\n \nVice President for  Documentations: \nJerry Mae M. Apoon\n \nVice President for Budget and Finance :\n Maria Mae S. Tanduyan \n \nVice President for Audit: \nJhon Patrick Q. Potian\n \nVice President for Logistics: \nKyle C. Castronuevo \n \nVice President for Engagement: \nMaxinne Nigos \n \nVice President for Creatives and Marketing: \nDesirie T. Cecilio \n \nVice President for Communications and Partnership: \nJudea Sebuc Guillen \n \nCreatives Specialist: \nRyan Yosef B. Pumares \n \nIBITS Sports Lead: \nJan Lorenz B. Buhain \n \nIBITS Learning and Academics Lead: \nAnne Crisel P. Garcia \n \n1st Year Representative: \nFernalyn E. Lonquias \n \n2nd Year Representative: \nCassandra Mariel P. Villaruel\n \n3rd Year Representative: \nElton John S. Navarro \n \n4th Year Representative: \nMiguel Carlos J. Gellaco ',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupaces') {
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Association of Computer Engineering Students in PUP Biñan: \n \nPresident : \nRonneil Valdez \n \nVice President for Internal Affairs : \nMau Janela Asilo \n \nVice President for External Affairs : \nMaura Franchesca Pasion \n \nAsst. Vice President for External Affairs: \nWarren Olgado \n \nSecretary : \nSuzaine Anne Cafino \n \nFinance Executive : \nRuby Lyn Martin \n \nAuditor : \nJohn Filbert Altamirano \n \nPRO : \nAmiel Joseph Agregado \n \nDirector for Academics : \nRechelle Victorio \n \nAsst. Director for Academics : \nKaisser Florendo \n \nDirector for Arts : \nBeneth Faye Cabrera \n \nAsst. Director for Arts : \nKyle Alagano',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupyes'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Here are the list of the officers of Young Educators Society in PUP Biñan: \n \nCouncil Chairperson : \nJohn Cedrick G. Ellazo \n \n Senior Council Representative : \nRebekah Grace Abanto \n \nJunior Council Representatives : \nMoses Tamondong \nAlthea Gipit',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'puphymn'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'PUP HYMN: \n \nSintang Paaralan\nTanglaw ka ng bayan\nPandayan ng isip ng kabataan\nKami ay dumating nang salat sa yaman\nHanap na dunong ay iyong alay\nAng layunin mong makatao\nDinarangal ang Pilipino\nAng iyong aral, diwa, adhikang taglay\nPUP, aming gabay\nPaaralang dakila\nPUP, pinagpala\nGagamitin ang karunungan\nMula sa iyo, para sa bayan\nAng iyong aral, diwa, adhikang taglay\nPUP, aming gabay\nPaaralang dakila\nPUP, pinagpala',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'puplogo'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'The star in the logo stands for the perfection of the human person as well as the search for truth, while the five concentric circles depict infinite wisdom. Both the five-pointed star and the five concentric circles stand for quintessence, meaning the highest form of quality or the most perfect example of creation. The star is golden yellow not only because this is a stars natural color but also because, together with the dark maroon used as background, it is the traditional color of the University. The five concentric circles are white because it symbolizes purity.',
      image:'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/89037667_103114807972814_218545970588155904_n.png?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=NkvyvwH8lSAAX8IUkN2&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-16qgvopOcmreQkOy9hZVm3BiX0wsNozbNAlzqtg9WWw&oe=6221EA49',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupsis'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Kanzi cannot be able to provide the specific answer to your concern however, Kanzi will do all his best to help you my fellow scholar. Please refer the link below: \nhttps://www.youtube.com/watch?v=EJj9YyB4xzY',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'puppresident'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://pbs.twimg.com/media/EQKE_RiVAAA_cCT?format=jpg&name=medium',
      text: 'The 13th and current president of Polytechnic University of the Philippines is Dr. Manuel Muhi. He was appointed by the university Board of Regents in accordance with the provisions of the Republic Act 8292, otherwise known as the Higher Education Modernization Act of 1997.',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'pupdean'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'The current campus director in Polytechnic University of the Philippines Biñan Campus is Dr. Margarita T. Sevilla',
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,   
        values: [  
          {title: 'PUPBC Established', values: 'Founded'},
          {title: 'PUP Organization' , values: 'PUP Organization'},
          {title: 'Is PUPBC had tuition fee?' , values: 'Tuition'},
          {title: 'PUP President' , values: 'Current President'}
        ]   
      }
    };
  }
  else if (text == 'puphsas'){
    msg = {
      _id: this.state.messages.length + 1, 
      image: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/275363365_107435421894630_4705890354704559759_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=GrXLKd7XyFQAX-Pq4K6&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT82zoIZRRptK8OyZaA1aZExirG4J2MVseu17RJPjkfxLg&oe=622C0793',
      text: 'The Head of Student Affairs and Services in Polytechnic University of the Philippines Biñan Campus is Ms. Cheryl Joyce D. Jurado.',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'ibitsadviser'){
    msg = {
      _id: this.state.messages.length + 1, 
      image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t31.18172-8/23551122_1954430077906181_7396227824052808616_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGhlh1m7QaNSxoqISAxdqFfAEV9FRcPCRMARX0VFw8JE3T4yF2VquLfUSuiyuI-74CF-CEKE5bH8GJH1d_Ygx8P&_nc_ohc=m2fh1o2m73MAX9HeMOC&tn=2-4ODovvBSyRYaF-&_nc_ht=scontent.fmnl4-3.fna&oh=00_AT-fSdC5MOOHB3O1gNHZvFneVz3PRWgQiXI3cG3mnlHeRA&oe=622ADAC6',
      text: 'The Institute of Bachelors in Information Technology Studies Adviser is Prof. Michael Anjelo O. Miguel.',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'gradequalification'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Admission Criteria for the Different Courses \n\nFor BSA and BSBA, Click the link below: \nhttps://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/275460695_107435255227980_7431208225240465367_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=HVHIrHviEt4AX_ADYm8&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT9m5T6iZc2ELvuayZGv7QLeRaPHan6mLmY8tjwC1bprhQ&oe=622C8B70 \n\nFor BSIT, Click the link below: \nhttps://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/275420827_107435238561315_4901165546429878540_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=lx6SbyTskn0AX-8F_or&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT8w65P_8IxzLViA9mpArRzDWIqBqGa9sahsdLYe3LgBuQ&oe=622CD846 \n\nFor BSSEDEN, BSSEDSS and BEED; Click the link below: \nhttps://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/275476504_107435368561302_4786554867373805889_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=pQwwmQgJ6K8AX8haoa8&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT9qPqiMvc7tOMUPIvhZRTNa5ugdQUhAZ-3ujBgVO7NK-g&oe=622B2F08 \n\nFor BSCPE and BSIE, Click the link below: \nhttps://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/275480541_107435245227981_8130669793456736128_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=PogiHGdFutEAX87kT6_&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8geyELR0ke5QJUTgIZxwplFnPk6vOHmN3fivzdLDDAIA&oe=622C11DC \n\nFor DICT, Click the link below: \nhttps://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/275371696_107435321894640_7409657055618684156_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=4OsGlKCMmTEAX_Npi4n&_nc_oc=AQm98CEl-w5gzVG43d-fCxUG-r-bnYfvgoBKDtjNOh-h__h1dX08J51rxbyQESnBGGU&tn=Rpjh0j0ULufO8aFY&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_Ir-VmmoECiz20_RMex6aN31QjmMRcH6byhZnNwPVtfg&oe=622C676E \n\nFor DCET, Click the link below: \nhttps://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/275443942_107435241894648_1418078569442121152_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=u_QGsVK-peAAX9-VDmE&tn=Rpjh0j0ULufO8aFY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT-MxT8z5Glv-o5546cNNcH2et3u20vu4xnbZwTFxNeRbw&oe=622BCB4B',
      createdAt: new Date(),
      user: BOT,
      
      
    };
  }
  else if (text == 'gradingsystem'){
    msg = {
      _id: this.state.messages.length + 1, 
      image:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/275377621_107435338561305_2630093534472888962_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=IPKH-8USJaoAX_rfzY6&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT9Qd90Z14e5B7cUZioYzn1t9H8_GevTCfOoqcgX8p01uA&oe=622CEC05',
      text: 'This is the Grading System of Polytechnic University of the Philippines-Biñan Campus.',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bsit'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Science in Information Technology (BSIT) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides the student with the knowledge to successfully apply information technology theory and principles to address real world business opportunities and challenges. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/iBITSPUPBC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bsedss'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Secondary Education Major in Social Studies (BSEDSS) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides the students with the knowledge and skills in teaching secondary students about the complex, culturally rich world of the 21st Century. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/yesorgpupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bscpe'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Science in Computer Engineering (BSCpE) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It is a program that embodies the science and technology of design, development, implementation, maintenance and integration of software and hardware. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/acespupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bseden'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Secondary Education Major in English (BSEDEN) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides the student with the necessary foundations, principles and current strategies that they can apply in teaching English as a second language. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/yesorgpupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bsba'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Science in Business Administration (BSBA) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides students with training in core principles of business and with critical and analytical skills. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/HRSSPUPBC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bsa'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Science in Accountancy (BSA) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides general accounting education to learners who wish to pursue a professional career as accountants. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/PUPJPIABinan/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'beed'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Elementary Education (BEED) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides academic and appropriate training for future elementary school teachers of Grades 1-6 through the general education courses, professional education, and specialization courses. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/yesorgpupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'bsie'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Bachelor of Science in Industrial Engineering (BSIE) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It provides the students with knowledge and skills needed for designing, installing, managing, and maintaining production/manufacturing systems. \n \nHere is the link of their oragnization: \nhttps:https://www.facebook.com/PIIEPUPBSC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'dcet'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Diploma in Computer Engineering Technology (DCET) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It prepares the student to use basic engineering principles and technical skills for installing, servicing, and maintaining computers, peripherals, networks, and microprocessor and computer controlled equipment. \n \nHere is the link of their oragnization: \nhttps:https://www.facebook.com/acespupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'dict'){
    msg = {
      _id: this.state.messages.length + 1, 
      text: 'Diploma in Information Communication Technology (DICT) is one of the courses that Polytechnic University of the Philippine-Biñan campus offered. It intends to equip learners with wide range of software, technical and technological ICT skills. The students is expected to develop and apply ICT solutions to solve practical business issues. \n \nHere is the link of their oragnization: \nhttps://www.facebook.com/iBITSPUPBC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'ibits'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/65423163_579434242582789_88888127761940480_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=7c-9x0AxYgYAX_Q-90C&_nc_ht=scontent-hkt1-1.xx&oh=00_AT9GIdIjycI5WjwhV60mfdrj7hU67MFUOYcgHK2mtLA_ZA&oe=6243A04D', 
      text: 'Institute of Bachelors in Information Technology Studies (IBITS) is the organization in Polytechnic University of the Philippines-Biñan Campus of BSIT and DICT. \nClick the link below to check their FB Page: /nhttps://www.facebook.com/iBITSPUPBC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'aces'){
    msg = {
      _id: this.state.messages.length + 1, 
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/35123440_1815400601850437_534856821446279168_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xMUkw7ki1TMAX-0CYC2&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT_4GJAqxfLevs_w85N6uU0PG40G_jtxWwwTF1xQ6mBCZg&oe=621A4BB0',
      text: 'Association of Computer Engineering Students (ACES) is the organization in Polytechnic University of the Philippines-Biñan Campus of BSCPE and DCET. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/acespupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'piie'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/187377484_1399343800398781_6270137783009856287_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElDCvb_LiOQjMp9tZrvRNfXcqeGWmFzJddyp4ZaYXMl0EhYfXB2hsHDoZLG8S-MoruGDU0gqPDkOavP5eNQlzy&_nc_ohc=tY1ZTDA7CDoAX_Ydftw&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT_sLBsUWnFr7vO6zowE_YAucMJ_OeCzW2Mkf9UMJfwipw&oe=621AAD6A', 
      text: 'Philippine Institute of Industrial Engineers (PIIE) is the organization in Polytechnic University of the Philippines-Biñan Campus of BSIE. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/PIIEPUPBSC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'hrss'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/118351601_118347579983107_2585199019383034894_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF3Y1z3efG--uTGlnMrXRS0C3QbPIzZyTQLdBs8jNnJNEJUVFGN-0TT194smMJW9KVCASfyrQALcy6zDwtJ5k6O&_nc_ohc=q5pJoB24gV8AX_X90Rl&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT-8VMJxs9_AE_Q50hMUThsXbW4vKPg3YvAEFk_5Lm0Few&oe=62194EAA', 
      text: 'Human Resource Students Society (HRSS) is the organization in Polytechnic University of the Philippines-Biñan Campus of BSBA. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/HRSSPUPBC/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'yes'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/66247124_663132327498665_7328558802322587648_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFbgbH0uEw68IAqtoLPEcR7v3gNmSMUWPy_eA2ZIxRY_Ei54HaWqJoLRgDD2-qBP_c4WkwIyI64mXt7kN9hfAzp&_nc_ohc=PtHgUHO95f0AX8OTIDj&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT-FI0WJlCxqDu3P3mt-bReix-gfAWwXydC-9Qzqec4t8Q&oe=621CC7A3', 
      text: 'Young Educators Society (YES) is the organization in Polytechnic University of the Philippines-Biñan Campus of BEED, BSEDEN, and BSEDSS. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/yesorgpupbc/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'jpia'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/272055435_885071275510945_2318473886805461542_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFedQHrhb6CPczS4VTFK2wj_8k-fSTm5Lf_yT59JObkt3Yvr-CqpK7mledGy6mWYck8FuwSH8B3Lp74qXgKT7dl&_nc_ohc=qGUBiQ6cAmYAX_M0lsV&tn=HVSLO8dX8v2zZaco&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8h6Gl_O6F-178by_xDCo4uv4rMZhCSYAJp982en7HNUA&oe=61F9F5D3', 
      text: 'Junior Philippine Institute of Accountants (JPIA) is the organization in Polytechnic University of the Philippines-Biñan Campus of BSA. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/PUPJPIABinan/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else if (text == 'csc'){
    msg = {
      _id: this.state.messages.length + 1,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/243482651_3319507104942788_1803574091571913504_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE9q3T0qyBvi7WR_zbnjOLBb1qdPuyLhRZvWp0-7IuFFmeWXIJ4HINa9r_ME5FDuUr0Fu9-4PYwXMRGeh7t4u8o&_nc_ohc=Ts4wtpuZv6cAX8YFYNG&tn=6OQK3iKJU2s7Vx5Y&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT-mhaz7DfgV3-5AgXEL5-kZgamUYJAjX0lfuSYqrHBkPw&oe=621EB89C', 
      text: 'Central Student Council (CSC) is the organization in Polytechnic University of the Philippines-Biñan Campus. It is a group of elected and volunteer students working together with an adult advisor within the framework of a constitution or bylaws to provide a means for student expression and assistance in school affairs and activities, give opportunities for student experience in leadership and encourage student / faculty / community relations. \nClick the link below to check their FB Page: \nhttps://www.facebook.com/CSCPUPBN/',
      createdAt: new Date(),
      user: BOT,
    };
  }
  else {
    msg = {
      _id: this.state.messages.length + 1, 
      text,
      createdAt: new Date(),
      user: BOT,
    };
  }
  
  

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));

 
  }

// sending message
onSend( messages = []){
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, messages)
  }));
  
  let message = messages[0].text;

  Dialogflow_V2.requestQuery(
    message,
    (result) => this.handleGoogleResponse(result),
    (error) => console.log(error)
  );
  
}
// sending quick replies
onQuickReply( quickReply ){ 
  let message = quickReply[0].title
  let mesg = {
    _id: this.state.messages.length + 1,
    text: message,
    createdAt: new Date(),
    user: {_id:1}
  }

  this.setState((previousState) => ({
  messages: GiftedChat.append(previousState.messages, mesg)
  }));


  Dialogflow_V2.requestQuery(
    message,
    (result) => this.handleGoogleResponse(result),
    (error) => console.log(error)
  );
  
}


// editan ng ui
  renderBubble = props => {
    if (props.currentMessage.isOptions) {
      return (

        <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
          {props.currentMessage.data.map((item) => (
            <Card
              containerStyle={{
                padding: 0,
                borderRadius: 15,
                paddingBottom: 7,
                overflow: 'hidden',
              }}
              key={item.title}>
              <Card.Image
                style={{width: 230, height: 230}}
                resizeMode="cover"
                source={{uri: item.image}}></Card.Image>
              <Card.Divider />
              <Card.Title>{item.title}</Card.Title>
              
              <FlatButton 
                text="Go to FB Page"
                style={{height: 35}}
                onPress={() => Linking.openURL(item.text) }
              />                      
            </Card>
          ))}
        </ScrollView>
      );
   
    }
    const {currentMessage} = props;
    //map location 
    if (currentMessage.haha) {
      return(
        <View style={{backgroundColor: 'white', width: 250, height: 470, borderRadius: 15}}>
          {props.currentMessage.data.map((item) => (
          <Text style = {{fontSize: 16, marginLeft: 10}}>{item.text}</Text>  
        ))}
      <LocationView location={currentMessage.location}
      />
      </View>
        )
      
      
    }


    return(

    <Bubble {...props} 
    textStyle={{
      
      left: {color:'black'},
      right: {color: 'white'},
      
    }}
    wrapperStyle={{
      left: {backgroundColor: 'white' },//width: 156},
      right: {backgroundColor: 'maroon'}
    }}
    />    
    )   
  }
  
//edit date color
  renderDay(props) {
    return <Day {...props} textStyle={{color: '#BB371A'}}/>
  }
//send button
  renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send' size={32} color='#BB371A' />
          </View>
      </Send>
    );
  }

  
//message image ui
  renderMessageImage =(props) => {
    return (
      <MessageImage
        {...props}
        imageStyle={{
          width: 275, height: 265,
     
        }}
      />
    )
    }  
    
  render() {
    
    return (
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style = { {flex: 1, backgroundColor: 'whitesmoke'}}>
          <GiftedChat
          
          messages = {this.state.messages}
          onSend = {( message ) => this.onSend (message)}
          onQuickReply = {( quickReply) => this.onQuickReply (quickReply)}
          renderBubble = { this.renderBubble}
          renderMessageImage = {this.renderMessageImage}
          renderMessageText = {this.renderMessageText}
          renderQuickReplies={(props) => <QuickReplies color= '#BB371A' {...props} />}
          renderDay={this.renderDay}
          renderSend={this.renderSend}

          user={{_id: 1}}

          />
         
        </View>
        </TouchableWithoutFeedback>
    );
    
  }
}
//send button ui
const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
 
 
});

LogBox.ignoreLogs(['Animated.event now requires a second argument for options',
 'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`', 'Each child in a list should have a unique "key" prop', 'Cannot record touch end without a touch start']);
export default ChatBot;