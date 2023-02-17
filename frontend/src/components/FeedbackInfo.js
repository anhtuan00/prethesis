import Wrapper from '../assets/wrappers/FeedbackInfo';

const FeedbackInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default FeedbackInfo;
