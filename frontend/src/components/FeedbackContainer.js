import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Feedback from "./Feedback";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const FeedbackContainer = () => {
  // get the necessary state and functions from the app context
  const {
    getFeedback,
    feedback,
    isLoading,
    page,
    totalFeedback,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();

  // useEffect hook to fetch the feedback data when the page, search, searchStatus, searchType, or sort values change
  useEffect(() => {
    getFeedback();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  // if the data is still being fetched, display the loading component
  if (isLoading) {
    return <Loading center />;
  }

  // if there are no feedback to display, display a message
  if (feedback.length === 0) {
    return (
      <Wrapper>
        <h2>No feedback to display...</h2>
      </Wrapper>
    );
  }

  // render the feedback data, mapping over each feedback and passing the data to the Feedback component
  return (
    <Wrapper>
      {/* display the number of feedback found */}
      <h5>
        {totalFeedback} feedback{feedback.length > 1 && "s"} found
      </h5>
      {/* map over the feedback data and render the Feedback component for each feedback / */}
      <div className="feedback">
        {feedback.map((feedback) => {
          return <Feedback key={feedback._id} {...feedback} />;
        })}
      </div>
      {/* only render the PageBtnContainer if there are more than 1 page of jobs to display */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default FeedbackContainer;
