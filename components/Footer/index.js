import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

/* import install components */
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    const actualiterIcon = <Icon name="newspaper-o" size={30} color="#C7C7FF" />;
    const calandarIcon = <Icon name="calendar" size={30} color="#C7C7FF" />;
    return (
        <View style={styles.footerBody}>
            {actualiterIcon}
            {calandarIcon}
        </View>
    )
}

export default Footer
