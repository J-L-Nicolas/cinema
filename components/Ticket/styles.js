import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    ticketBody:{
        flex: 1,
        backgroundColor: "#4C49AC",
    },
    bodyTitle:{
        alignItems: "center",
    },
    textTitle:{
        fontSize: 50,
        color: "#FFFFFF"
    },
    qrCodeBody: {
        alignItems: "center"
    },
    qrCodeImg:{
        width: 400,
        height:400
    },
    bodyInfos:{
        paddingLeft: 50,
    },
    textInfos: {
        color: "#FFFFFF"
    },
    btnBack:{
        position: 'absolute',
        left: 15,
        top: 15,
    }
}) 
    
export default styles;

