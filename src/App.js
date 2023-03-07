import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    advice: '',
    textColor: '',
    bgColor: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        const { textColor, bgColor } = this.generateRandomColors();
        this.setState({ advice, textColor, bgColor });
      })
      .catch ((error) => {
        console.log(error);
      })
  }

  generateRandomColors = () => {
    const textColors = ['#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ff9800', '#795548'];
    const bgColors = ['#F9EBEA', '#E8F8F5', '#F4ECF7', '#FDEDEC', '#FEF9E7', '#EAECEE'];
    const textColor = textColors[Math.floor(Math.random() * textColors.length)];
    const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    return { textColor, bgColor };
  }

  render() {
    const { advice, textColor, bgColor } = this.state;

    return (
      <div className="app" style={{ backgroundColor: bgColor }}>
        <div className="card" style={{ color: textColor }}>
          <h1 className="heading">
            {advice}
          </h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give Me Advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
