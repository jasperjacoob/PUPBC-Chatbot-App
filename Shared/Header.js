import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Modal, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default  function Header({navigation}) {

    // state for modal to open
    const [modalOpen, setModalOpen] = useState(false);
    return (  
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <View style={styles.kanziBg}> 
                <Text style={styles.headerText}> Kanzi </Text>
            </View>

            <View style={styles.btnContainer}>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <MaterialIcons name='admin-panel-settings' size={22}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalOpen(true)}>
                    <View style={styles.button}>
                        <MaterialIcons name='settings' size={22}/>
                    </View>
                </TouchableOpacity>
            </View>

            {/* modal for settings */}
            <Modal visible={modalOpen} animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>  
                        <View style={styles.modalHeader}> 
                            <Text style={styles.modalText}> Settings</Text>
                            <MaterialIcons name='close' color={'white'} size={30} onPress={() => setModalOpen(false)}/>
                        </View>
                        <View style={styles.imageContent}>
                            <Image style={styles.logo} source={require('../assets/maintenance.png')}/>
                            <Text style={styles.footText}>Soon to Develop!</Text>
                        </View>
                    </View>
                </View>  
            </Modal>   


        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'

    },

    headerText: {
        fontFamily: 'Oswald-Bold',
        fontSize: 22,
        letterSpacing: 1,
        color: 'maroon',
    },

    btnContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginRight: 30,
    },

    button: {
        backgroundColor: 'whitesmoke',
        borderRadius: 60,
        padding: 6,
        alignSelf: 'flex-end',
        margin: 3,
    },

    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 20,
        flexDirection: 'column',
    },

    modalHeader: {
        backgroundColor: 'maroon',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    modalText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
    },    

    // kanziBg:{
    //     backgroundColor: 'white',
    //     marginLeft: 1,
    // },
    logo: {
        paddingRight: 30,
        height: 280,
        width: '100%',
        backgroundColor: 'transparent',
      },

     footText: {
       fontWeight: 'bold',
       alignSelf: 'center',
       fontSize: 16,
       textTransform: 'uppercase',
     },

     imageContent:{
         padding: 8,
     },
});

