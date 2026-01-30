import { useState } from 'react'
import style from "./app.module.css"
import Display from './display'
import Container from './buttons-container';

function App() {
  let [calval,setcal] = useState('');
  const onbuttonclick = (buttontext) => {
    if(buttontext==='C'){
      setcal('');
    }else if(buttontext === '='){
      const result = eval(calval);
      setcal(result);
    }else{
      const newdisplayvalue = calval  + buttontext ;
      setcal(newdisplayvalue);
    }
  }
  return (
    <div className = {style["Calculator"]}>
    <Display displayvalue = {calval}></Display>
    <Container onbuttonclick = {onbuttonclick}></Container>
    </div>
  )
}
export default App
