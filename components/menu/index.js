import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'

/* import components */
import Icon from 'react-native-vector-icons/FontAwesome';


const menu = ({chgmenu}) => {
    
    const add = <Icon name="plus" size={30} color="#C7C7FF" />;
    const car = <Icon name="car" size={30} color="#C7C7FF" />;
    const ticket = <Icon name="ticket" size={30} color="#C7C7FF" />;
    const play = <Icon name="play" size={30} color="#C7C7FF" />;
    return (
        <View style={styles.menuBody}>
            <TouchableOpacity style={styles.btnPressable}>
                {add}
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPressable}>
                {car}
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPressable} onPress={()=> chgmenu(true)}>
                {ticket}
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPressable}>
                {play}
            </TouchableOpacity>
        </View>
    )
}

export default menu
