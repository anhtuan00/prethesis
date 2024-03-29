import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  SET_EDIT_FEEDBACK,
  EDIT_FEEDBACK_BEGIN,
  EDIT_FEEDBACK_SUCCESS,
  EDIT_FEEDBACK_ERROR,
  DELETE_FEEDBACK_BEGIN,
  GET_FEEDBACKS_BEGIN,
  GET_FEEDBACKS_SUCCESS,
  CREATE_FEEDBACK_BEGIN,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_ERROR,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      role: action.payload.user.role,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: '',
      userLocation: '',
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    switch (action.payload) {
      case 'job':
        return {
          ...state,
          isEditing: false,
          editJobId: '',
          position: '',
          company: '',
          jobLocation: state.userLocation,
          jobType: 'full-time',
          status: 'pending',
          startDate: '',
          endDate: '',
        };
      case 'feedback':
        return {
          ...state,
          isEditing: false,
          editFeedbackId: '',
          fbstudentName: '',
          fbstudentId: '',
          fbposition: '',
          fbstudentPhone: '',
          fbcompanyName: '',
          fblocation: '',
          fbcompanyPhone: '',
          fbstartDate: '',
          fbendDate: '',
          fbComment: '',
        };
      default:
        return state;
    }
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_USERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload.users,
      totalUsers: action.payload.totalUsers,
      numOfPagesUsers: action.payload.numOfPagesUsers,
    };
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status, startDate, endDate } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
      startDate,
      endDate,
    };
  }

  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Job Updated!',
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === CREATE_FEEDBACK_BEGIN) {
    return { ...state, createFeedbackLoading: true };
  }
  if (action.type === CREATE_FEEDBACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Feedback created successfully!',
    };
  }
  if (action.type === CREATE_FEEDBACK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_FEEDBACKS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_FEEDBACKS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      feedbacks: action.payload.feedbacks,
      totalFeedbacks: action.payload.totalFeedbacks,
      feedbackPage: action.payload.page,
      totalFeedbackPages: action.payload.numOfPages,
    };
  }

  if (action.type === SET_EDIT_FEEDBACK) {
    const feedback = state.feedbacks.find((feedback) => feedback._id === action.payload.id);

    const {
      _id,
      fbstudentName,
      fbstudentId,
      fbposition,
      fbstudentPhone,
      fbcompanyName,
      fblocation,
      fbcompanyPhone,
      fbstartDate,
      fbendDate,
      fbComment,
    } = feedback;
    return {
      ...state,
      isEditing: true,
      editFeedbackId: _id,
      fbstudentName,
      fbstudentId,
      fbposition,
      fbstudentPhone,
      fbcompanyName,
      fblocation,
      fbcompanyPhone,
      fbstartDate,
      fbendDate,
      fbComment,
    };
  }

  if (action.type === EDIT_FEEDBACK_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_FEEDBACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Feedback Updated!',
    };
  }
  if (action.type === EDIT_FEEDBACK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_FEEDBACK_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
      searchUsers: '',
      searchEmail: '',
      searchStudentId: '',
      sortUsers: 'latest',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }

  if (action.type === 'CHANGE_PAGE_NAME') {
    return { ...state, pageName: action.payload };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
