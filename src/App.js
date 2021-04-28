

import React from 'react';
import {Alert,Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import imgSrc from './Young_Sophie.jpg'


class App extends React.Component {
  
  state = {
    person:{
fullName:"Sophie Hatter",
bio:"Sophie Hatter (ソフィー・ハッター, Sofī Hattā) is the female protagonist and heroine of the first book in the Castle Series, Howl's Moving Castle, and of the movie Howl's Moving Castle.Sophie is a young woman living in the small town of Market Chipping in the kingdom of Ingary, and she is the eldest of three sisters. In the land of Ingary, this, of course, means that Sophie is destined to never find her fortune and live a dull life at home. She works in her late father's hat shop as her stepmother, Fanny Hatter's, apprentice.",
imgSrc:imgSrc,
profession:"Hatter"
  },
show:false ,
intervel:0 }

componentDidMount() {
  this.interval = setInterval(()=>{this.setState((state) => {return {intervel:this.state.intervel+1}})}, 1000);
}
  render() { 
    
    if (this.state.show) { return (
      <div className="App"> 
      
        <Alert variant="Success" onClose={() => this.setState((state) => {return {show:false}})} dismissible>
         <Card style={{ width: '40vw' }}>
           <Card.Img variant="top" src={this.state.person.imgSrc} />
           <Card.Body>
             <Card.Title>{this.state.person.fullName}</Card.Title>
             <Card.Text>{this.state.person.bio}</Card.Text>
          </Card.Body>
         </Card>
       </Alert>

      </div>
    
      );
    }
    return <div className="App">
      <Button style={{ backgroundColor:"grey", border:"inset"}} onClick={() => this.setState((state) => {return {show:true}})}>Show Profile !!</Button>
      <br/>
      <label>Timer</label>
      <input type={Text} readOnly value={this.state.intervel} style={{textAlign:"center"}}></input>
  
      </div>} 
  }

 
export default App;
