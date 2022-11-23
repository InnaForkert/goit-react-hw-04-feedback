import React, { Component } from 'react';
import Option from './Option';
import Result from './Result';

class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateRes = option => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <h1>Please leave feedback</h1>
        {options.map((option, i) => {
          return (
            <Option
              optionName={option}
              key={i}
              updateRes={() => this.updateRes(option)}
            />
          );
        })}
        <h2>Statistics</h2>
        <ul>
          {options.map((option, i) => {
            const res = this.state[option];
            return <Result optionName={option} optionRes={res} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Review;
