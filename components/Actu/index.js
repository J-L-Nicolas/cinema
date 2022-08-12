import React, {useEffect,} from 'react'
import { View, ToastAndroid , ScrollView, Image } from 'react-native'
import styles from './styles'

/* import components */
import Menu from '../menu'

// import function api test
import {apiRequest} from '../Apis/index'

const Actu = ({chgactu}) => {

    // api test and view Toast
    const showToast = (userName, state) => {
        ToastAndroid.show(`Hello ${userName} of ${state}`, ToastAndroid.LONG);
    };

    const apiLaunch = async() =>{
        let user = await apiRequest()
        user != "error"
        ? showToast(user.results[0].name.first, user.results[0].location.state)
        : console.log("error api rest")
    }
    
    useEffect(() => {
        apiLaunch()
    }, [])
    // end test api
    
    return (
        <View style={styles.actuBody}>
            <View style={styles.subBody}>
                <ScrollView>
                    <ScrollView
                        style={styles.hScroll}
                        horizontal={true}>
                            <Image
                                style={styles.pictureBg}
                                 source={require('../../assets/images/bg_shang_chi.jpg')}>

                            </Image>
                            <Image
                                style={styles.pictureBg}
                                 source={require('../../assets/images/bg_eternals.jpeg')}>

                            </Image>
                            <Image
                                style={styles.pictureBg}
                                 source={require('../../assets/images/bg_spider_man.jpg')}>

                            </Image>
                    </ScrollView>
                    <Menu chgmenu={(e)=> chgactu(e)}/>
                    <View style={styles.bodyAllJacet}>
                        <Image
                            style={styles.pictureJk}
                            source={require('../../assets/images/jk_3.jpg')}>

                        </Image>
                        <Image
                            style={styles.pictureJk}
                            source={require('../../assets/images/jk_1.jpg')}>

                        </Image>
                        <Image
                            style={styles.pictureJk}
                            source={require('../../assets/images/jk_2.jpg')}>

                        </Image>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Actu
