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
  Grade,
  CompanyFeedback,
  ManageEvaluationReport,
  ManageInternshipReport,
  ManageCompanyPartnershipProposal,
  InternshipConfirmation,
  StudentFeedback,
  CoordinatorFeedback,
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
          <Route
            path="internship-confirmation"
            element={<InternshipConfirmation />}
          />
          <Route path="student-feedback" element={<StudentFeedback />} />
          {/* Routes available to admins */}
          <Route path="view-users" element={<ViewUsers />} />
          <Route path="view-all-feedback" element={<ViewAllFeedbacks />} />
          <Route path="add-approval" element={<AddApproval />} />

          {/* Routes available for company */}
          <Route path="company-feedback" element={<CompanyFeedback />} />
          <Route path="grade" element={<Grade />} />

          {/* Routes available for teacher */}
          <Route
            path="manage-evaluation-report"
            element={<ManageEvaluationReport />}
          />
          <Route
            path="manage-internship-report"
            element={<ManageInternshipReport />}
          />
          <Route
            path="manage-company-partnership-proposal"
            element={<ManageCompanyPartnershipProposal />}
          />
          <Route path="teacher-feedback" element={<CoordinatorFeedback />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
