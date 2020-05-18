import React, { Component } from 'react';
import { Container } from './styles';

class Stores extends Component{
  
  constructor(props) {
    super(props);     
    this.toggle= this.toggle.bind(this);
    this.state = {
        details: false
      } 
  }  
  toggle(f){
    const currentState = this.state.details;

    switch(f.target.className) {
      case 'planta':
        localStorage.setItem('@store/bg-color', '#33A539');
        localStorage.setItem('@store/type', '12');
        this.setState({ details: !currentState }); 
        return true;
      case 'agua':
        localStorage.setItem('@store/bg-color', '#3F9CFF');
        localStorage.setItem('@store/type', '11');
        this.setState({ details: !currentState }); 
        return true;
      case 'fogo':
        localStorage.setItem('@store/bg-color', '#FC3001');
        localStorage.setItem('@store/type', '10');
        this.setState({ details: !currentState }); 
        return true;
      case 'fantasma':
        localStorage.setItem('@store/bg-color', '#7F006E');
        localStorage.setItem('@store/type', '8');
        this.setState({ details: !currentState }); 
        return true;
      case 'terra':
        localStorage.setItem('@store/bg-color', '#5B2A00');
        localStorage.setItem('@store/type', '5');
        this.setState({ details: !currentState }); 
        return true;
      default:
        return true;
    }
  }

  render() {
    return (
      <>
        <Container>
          <button type="button" className="agua" onClick={this.toggle}>Água</button>
          <button type="button" className="planta" onClick={this.toggle}>Planta</button>
          <button type="button" className="fogo" onClick={this.toggle}>Fogo</button>
          <button type="button" className="fantasma" onClick={this.toggle}>Fantasma</button>
          <button type="button" className="terra" onClick={this.toggle}>Terra</button>
        </Container>
      </>
    );
  }
}

export default Stores;