import React, {useState} from 'react'
import { View, BackHandler } from 'react-native'

/* import Compoments */
import Header from './components/Header'
import Actu from './components/Actu'
import Footer from "./components/Footer"
import Ticket from './components/Ticket'

const DisplayTicket = ({show, chg}) => (
  show 
  ? <Ticket chgTck={(e)=> chg(e)}/>
  : <> 
      <Header /> 
      <Actu chgactu={(e) => chg(e)}/>
    </>
)

const App = () => {

  //init state 
  const [ticketShow, setticketShow] = useState(false)

  const changeTicket = (bol) =>{
    setticketShow(bol)
  }

  //back event
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    ()=>{
      if (ticketShow){
        setticketShow(false)
      }else{
        BackHandler.exitApp()
      }
      return true
    }
  );

  return (
    <View style={{flex: 1}}>
      <DisplayTicket show={ticketShow} chg={(e) => changeTicket(e)} />
      <Footer />
    </View>
  )
}

export default App
