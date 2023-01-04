// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Register, Landing, Error, ProtectedRoute } from "./pages";
// import {
//   AllJobs,
//   Profile,
//   SharedLayout,
//   AddJob,
//   AddFeedback,
//   AllFeedback,
//   GetHelp,
//   JobSearchResources,
// } from "./pages/dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <SharedLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="all-jobs" element={<AllJobs />} />
//           <Route path="add-job" element={<AddJob />} />
//           <Route path="add-feedback" element={<AddFeedback />} />
//           <Route path="all-feedback" element={<AllFeedback />} />
//           <Route path="job-search-resources" element={<JobSearchResources />} />
//           <Route path="get-help" element={<GetHelp />} />
//           <Route path="profile" element={<Profile />} />
//           {/* add the get help route */}
//         </Route>
//         <Route path="/register" element={<Register />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

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
import { useAppContext } from "./context/appContext";

function App() {
  const { user } = useAppContext();
  console.log("Da chay App");
  console.log(user);
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
          if (user && user.role === "user"){" "}
          {
            <>
              <Route path="all-jobs" element={<AllJobs />} />
              <Route path="add-job" element={<AddJob />} />
              <Route path="all-feedback" element={<AllFeedback />} />
              <Route path="add-feedback" element={<AddFeedback />} />
              <Route
                path="job-search-resources"
                element={<JobSearchResources />}
              />
            </>
          }
          {/* Routes available to admins */}
          if (user && user.role === "admin"){" "}
          {
            <>
              <Route path="view-users" element={<ViewUsers />} />
              <Route path="view-all-feedback" element={<ViewAllFeedbacks />} />
              <Route path="add-approve" element={<AddApproval />} />
            </>
          }
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
