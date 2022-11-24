import { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
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
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <Options
              options={options}
              onLeaveFeedback={this.updateRes.bind(this)}
            />
          }
        />
        <Section
          title={'Statistics'}
          children={
            this.countTotalFeedback() ? (
              <Statistics
                options={options}
                results={results}
                total={this.countTotalFeedback()}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )
          }
        />
      </>
    );
  }
}
export default App;
