import { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { useState } from 'react';

const App = () => {
  const [feedbackCount, setFeedbackCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateRes = e => {
    setFeedbackCount(prevState => {
      return { ...prevState, [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.keys(feedbackCount).reduce(
      (acc, el) => acc + feedbackCount[el],
      0
    );
  };
  const options = Object.keys(feedbackCount);
  const results = Object.values(feedbackCount);
  return (
    <>
      <Section
        flex={true}
        title={'Please leave feedback'}
        children={<Options options={options} onLeaveFeedback={updateRes} />}
      />
      <Section
        title={'Statistics'}
        children={
          countTotalFeedback() ? (
            <Statistics
              flex={false}
              options={options}
              results={results}
              total={countTotalFeedback()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )
        }
      />
    </>
  );
};
export default App;
