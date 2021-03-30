import React, { Component } from "react";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      userName: '',
    }
  }

  names = ['Julio', 'Cesar', 'Vero'];

  increment = () => {
    this.setState({count: this.state.count + 1 })
    //this.setState({userName: this.names[this.state.count]})
    this.showName();
  }

  showName = () => {
    this.setState({userName: this.names[this.state.count]})
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.nombre}</h1>
        <div onClick={() => this.increment()}>Counter</div>
        <p>Counter value: {this.state.count}</p>
        <p>User name: {this.state.userName}</p>
      {
        this.names.map(e => {
          return <h2>{e}</h2>
        })
      }
      </div>
    );
  }
}

export default Formulario;
