import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Feedback from "./Feedback";
import Wrapper from "../assets/wrappers/FeedbackContainer";

const FeedbackContainer = () => {
  // get the necessary state and functions from the app context
  const { getFeedbacks, feedbacks, isLoading, page } = useAppContext();

  // useEffect hook to fetch the feedbacks data when the page value changes
  useEffect(() => {
    getFeedbacks(page);
    // eslint-disable-next-line
  }, [page]);

  // if the data is still being fetched, display the loading component
  if (isLoading) {
    return <Loading center />;
  }

  // if there are no feedbacks to display, display a message
  if (feedbacks.length === 0) {
    return (
      <Wrapper>
        <h2>No feedbacks to display...</h2>
      </Wrapper>
    );
  }

  // render the feedbacks data, mapping over each feedback and passing the data to the Feedback component
  return (
    <Wrapper>
      {/* map over the feedbacks data and render the Feedback component for each feedback */}
      <div className="feedbacks">
        {feedbacks.map((feedback) => {
          return <Feedback key={feedback._id} {...feedback} />;
        })}
      </div>
    </Wrapper>
  );
};

export default FeedbackContainer;
