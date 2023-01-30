import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AllJobs,
  Profile,
  AddJob,
  AddFeedback,
  AllFeedback,
  GetHelp,
  JobSearchResources,
  ViewAllFeedbacks,
  ViewUsers,
  AddApproval,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/* Routes available to both users and admins */}
          <Route path="get-help" element={<GetHelp />} />
          <Route path="profile" element={<Profile />} />
          {/* Routes available to users */}
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-feedback" element={<AllFeedback />} />
          <Route path="add-feedback" element={<AddFeedback />} />
          <Route path="job-search-resources" element={<JobSearchResources />} />
          {/* Routes available to admins */}
          <Route path="view-users" element={<ViewUsers />} />
          <Route path="view-all-feedback" element={<ViewAllFeedbacks />} />
          <Route path="add-approve" element={<AddApproval />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
