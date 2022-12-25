import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AllJobs,
  Profile,
  SharedLayout,
  AddJob,
  AddFeedback,
  AllFeedback,
} from "./pages/dashboard";

// App component is the root component of the application
// It uses BrowserRouter, Routes and Route components from react-router-dom to setup the routing for the application
// The routes are as follows:
// '/' -> ProtectedRoute -> SharedLayout -> '/all-jobs' -> AllJobs
// '/' -> ProtectedRoute -> SharedLayout -> '/add-job' -> AddJob
// '/' -> ProtectedRoute -> SharedLayout -> '/profile' -> Profile
// '/register' -> Register
// '/landing' -> Landing
// '*' -> Error
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
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedback" element={<AddFeedback />} />
          <Route path="/all-feedback" element={<AllFeedback />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
