import { Button, Buttons } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ typeFeedback, inputFeedback }) => {
  const typeButton = Object.keys(typeFeedback);
  // console.log('type', typeFeedback);
  return (
    <>
      <Buttons>
        {typeButton.map(el => (
          <Button key={el} textBtn={el} onClick={inputFeedback}>
            {el}
          </Button>
        ))}
      </Buttons>
    </>
  );
};
