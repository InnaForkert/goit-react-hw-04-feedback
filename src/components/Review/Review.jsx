import React, { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';

class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateRes = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acc, el) => acc + this.state[el], 0);
  };

  render() {
    const options = Object.keys(this.state);
    const results = Object.values(this.state);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Options options={options} updateRes={this.updateRes.bind(this)} />
        <h2>Statistics</h2>
        <Statistics
          options={options}
          results={results}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}
export default Review;
