import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

/* import install components */
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const Header = () => {

    const account = async () => {
        await GoogleSignin.signIn();
    }
    
    const userIcon = <Icon name="user" size={30} color="#C7C7FF" style={styles.btnUser} onPress={account}/>;

    return (
        <View style={styles.headerBody}>
            <View style={styles.subBody1}>
                <Text style={styles.titleHeader}>CINEMA</Text>
            </View>
            {userIcon}
        </View>
    )
}

export default Header
