import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

/* import components */
import Icon from 'react-native-vector-icons/FontAwesome';

const Ticket = ({chgTck}) => {

    const backIcon = <Icon name="arrow-left" size={30} color="#C7C7FF" style={styles.btnBack} onPress={()=>{chgTck(false)}} />;

    return (
        <View style={styles.ticketBody}>
            {backIcon}
            <View style={styles.bodyTitle}>
                <Text style={styles.textTitle}>Billet</Text>
            </View>
            <View style={styles.qrCodeBody}>
                <Image
                    source={require('../../assets/images/Logo_shang_chi.png')}
                />
                <Image
                    style={styles.qrCodeImg}
                    source={require('../../assets/images/codeQr_shangChi.png')}
                    />
            </View>
            <View style={styles.bodyInfos}>
                <Text style={styles.textInfos}>Shang Chi</Text>
                <Text style={styles.textInfos}>22/07/2021</Text>
                <Text style={styles.textInfos}>19H30</Text>
                <Text style={styles.textInfos}>Salle 6</Text>
                <Text style={styles.textInfos}>N°789023</Text>
            </View>
            

        </View>
    )
}

export default Ticket
