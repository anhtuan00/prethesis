import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error, ProtectedRoute } from './pages';
import { JobSearchResources, SharedLayout, GetHelp } from './pages/dashboard';
import Search from './pages/Search';
import Companies from './pages/Companies';
import Jobs from './pages/Jobs';
import MasterData from './pages/MasterData';
import Users from './pages/Users';
import { useAppContext } from './context/appContext';
import InternshipList from './pages/InternshipList';
import InternshipRegulations from './pages/InternshipRegulations';
import SystemEvaluation from './pages/SystemEvaluation';

const Authorization = ({ roles, element }) => {
  const { user } = useAppContext();
  const role = user?.role;
  if (roles.includes(role)) return element;
  return <Error />;
};

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
          <Route path="internship-list" element={<InternshipList />} />
          <Route path="jobs" element={<Authorization roles={['officer']} element={<Jobs />} />} />
          <Route path="companies" element={<Authorization roles={['officer']} element={<Companies />} />} />
          <Route path="master-data" element={<Authorization roles={['officer']} element={<MasterData />} />} />
          <Route path="users" element={<Authorization roles={['officer', 'teacher']} element={<Users />} />} />
          <Route
            path="system-evaluation"
            element={<Authorization roles={['student', 'teacher', 'officer']} element={<SystemEvaluation />} />}
          />
          <Route path="other-resources" element={<JobSearchResources />} />
          <Route path="get-help" element={<GetHelp />} />

          <Route path="internship-regulations" element={<InternshipRegulations />} />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/search-jobs" element={<Search />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
