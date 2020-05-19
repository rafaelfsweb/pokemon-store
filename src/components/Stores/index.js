import React, { Component } from 'react';
import { Container } from './styles';

class Stores extends Component{

  handleChangeStore(f){

    switch(f.target.className) {
      case 'planta':
        localStorage.setItem('@store/bg-color', '#33A539');
        localStorage.setItem('@store/type', '12');
        window.location.href = '/'; 
        break;
      case 'agua':
        localStorage.setItem('@store/bg-color', '#3F9CFF');
        localStorage.setItem('@store/type', '11');
        window.location.href = '/'; 
        break;
      case 'fogo':
        localStorage.setItem('@store/bg-color', '#FC3001');
        localStorage.setItem('@store/type', '10');
        window.location.href = '/'; 
        break;
      case 'fantasma':
        localStorage.setItem('@store/bg-color', '#7F006E');
        localStorage.setItem('@store/type', '8');
        window.location.href = '/'; 
        break;
      case 'terra':
        localStorage.setItem('@store/bg-color', '#5B2A00');
        localStorage.setItem('@store/type', '5');
        window.location.href = '/'; 
        break;
      default:
        localStorage.setItem('@store/bg-color', '#3F9CFF');
        localStorage.setItem('@store/type', '11');
        break;
    }
  }

  render() {
    return (
      <>
        <Container>
          <button type="button" className="agua" onClick={this.handleChangeStore}>Água</button>
          <button type="button" className="planta" onClick={this.handleChangeStore}>Planta</button>
          <button type="button" className="fogo" onClick={this.handleChangeStore}>Fogo</button>
          <button type="button" className="fantasma" onClick={this.handleChangeStore}>Fantasma</button>
          <button type="button" className="terra" onClick={this.handleChangeStore}>Terra</button>
        </Container>
      </>
    );
  }
}

export default Stores;