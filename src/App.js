import React, { Component } from 'react';
import Validation from './components/Validation';
import Chart from './components/Chart'; 
import './App.css';

class App extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value.toUpperCase()});
  }

  handleClick = (index) => {
    const newText = this.state.text.split('');
    newText.splice(index, 1);
    const updatedText = newText.join('');
    this.setState({text: updatedText});
  }

  render() {

    const charList = this.state.text.split("").map((item, index) => 
    <Chart 
    click={() => this.handleClick(index)} 
    key={index} 
    char={item} 
    />)
    
    return (
      <div className="App">
        <h1>Namasteh</h1> 
        <input onChange={this.handleChange} type="text" value={this.state.text}/>
        <Validation
        num={this.state.text.length}
        />
        {charList}
      </div>  
    )
  }  
}

export default App;
