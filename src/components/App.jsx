import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import { Statistics } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const percentage = ((good / total) * 100).toFixed(0);

  const inputFeedback = e => {
    // console.log('e---', e.target.textContent);
    switch (e.target.textContent) {
      case 'good':
        setGood(good + 1);

        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            typeFeedback={{ good, neutral, bad }}
            inputFeedback={inputFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback given" />
          )}
        </Section>
      </Container>
    </>
  );
};

//   inputFeedback = typeFeedback => {
//     this.setState(prevState => ({
//       [typeFeedback]: (prevState[typeFeedback] += 1),
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const percentage = ((this.state.good / total) * 100).toFixed(0);
//     return (
//       <>
//         <Container>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               typeFeedback={this.state}
//               inputFeedback={this.inputFeedback}
//             />
//           </Section>
//           <Section title="Statistic">
//             {total > 0 ? (
//               <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={total}
//                 positivePercentage={percentage}
//               />
//             ) : (
//               <Notification message="There is no feedback given" />
//             )}
//           </Section>
//         </Container>
//       </>
//     );
//   }
// }
