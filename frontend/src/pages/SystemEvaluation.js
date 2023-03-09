import React, { useState } from 'react';
import Likert from 'react-likert-scale';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useAppContext } from '../context/appContext';
import { Alert } from '@mui/material';

const studentQuestions = {
  question1: '1. Was the process of creating an account and logging in to the system perceived as easy?',
  question2: '2. Was the interface easy to navigate and use?',
  question3:
    '3. How helpful was the search function in finding internships and jobs that match the user interests and qualifications?',
  question4: '4. Were there any technical issues experienced while using the system?',
  question5: '5. Was it possible to save and manage internship and job applications within the system?',
  question6:
    '6. How satisfied was the user with the communication between the user and the school internship coordinator through the system?',
  question7: '7. Was it easy to communicate with potential employers through the system?',
  question8: '8. Was useful feedback provided on internship or job applications through the system?',
  question9: '9. Would the user recommend this system to their peers?',
  question10: '10. Are there any features that the user would like to see added or improved in the system?',
};

const teacherQuestions = {
  question1: '1. Was the process of creating an account and logging in to the system perceived as easy?',
  question2: '2. Was the interface easy to navigate and use?',
  question3:
    '3. How helpful was the search function in finding internships and jobs that match the user interests and qualifications that teacher can view as reference?',
  question4: '4. Were there any technical issues experienced while using the system?',
  question5: '5. Was it possible to view and manage internship and job applications of students within the system?',
  question6:
    '6. How satisfied was the teacher with the communication between the student and the school internship coordinator through the system?',
  question7: '7. Was it easy to see student updated information about internship through the system?',
  question8: '8. Was useful feedback provided on internship or job applications through the system?',
  question9: '9. Would the user recommend this system to their peers?',
  question10: '10. Are there any features that the user would like to see added or improved in the system?',
};

const officerQuestions = {
  question1: '1. Was the process of creating an account and logging in to the system perceived as easy?',
  question2: '2. Was the interface easy to navigate and use?',
  question3:
    '3. How helpful was the search function in finding internships and jobs that match the user interests and qualifications?',
  question4: '4. Were there any technical issues experienced while using the system?',
  question5: '5. Was it possible manage internship and job applications within the system?',
  question6:
    '6. How satisfied was the officer with the communication between the student and the school internship coordinator through the system?',
  question7: '7. Was it easy to communicate with teacher through the system?',
  question8:
    '8. Was useful officer view student internship or job applications and notify to teacher through the system?',
  question9: '9. Would the user recommend this system to their peers?',
  question10: '10. Are there any features that the user would like to see added or improved in the system?',
};

const SystemEvaluation = () => {
  // const [showAlert, setShowAlert] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(null);
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);

  const [question3, setQuestion3] = useState(null);

  const [question4, setQuestion4] = useState(null);

  const [question5, setQuestion5] = useState(null);

  const [question6, setQuestion6] = useState(null);

  const [question7, setQuestion7] = useState(null);

  const [question8, setQuestion8] = useState(null);

  const [question9, setQuestion9] = useState(null);

  const [question10, setQuestion10] = useState(null);

  const [otherComment, setOtherComment] = useState(null);

  const { user } = useAppContext();
  let currentQuestions = [];

  if (user.role === 'student') {
    currentQuestions = studentQuestions;
  } else if (user.role === 'teacher') {
    currentQuestions = teacherQuestions;
  } else if (user.role === 'officer') {
    currentQuestions = officerQuestions;
  }

  const defaultResponse = [
    { value: 1, text: 'Strongly Agree' },
    { value: 2, text: 'Agree' },
    { value: 3, text: 'Neutral' },
    { value: 4, text: 'Disagree' },
    { value: 5, text: 'Strongly Disagree' },
  ];

  const likertOptions1 = {
    question: currentQuestions.question1,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion1(val);
    },
  };

  const likertOptions2 = {
    question: currentQuestions.question2,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion2(val);
    },
  };
  const likertOptions3 = {
    question: currentQuestions.question3,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion3(val);
    },
  };
  const likertOptions4 = {
    question: currentQuestions.question4,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion4(val);
    },
  };
  const likertOptions5 = {
    question: currentQuestions.question5,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion5(val);
    },
  };
  const likertOptions6 = {
    question: currentQuestions.question6,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion6(val);
    },
  };
  const likertOptions7 = {
    question: currentQuestions.question7,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion7(val);
    },
  };
  const likertOptions8 = {
    question: currentQuestions.question8,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion8(val);
    },
  };
  const likertOptions9 = {
    question: currentQuestions.question9,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion9(val);
    },
  };

  const likertOptions10 = {
    question: currentQuestions.question10,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion10(val);
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if both opinion and recommendation have been selected
    if (
      question1 &&
      question2 &&
      question3 &&
      question4 &&
      question5 &&
      question6 &&
      question7 &&
      question8 &&
      question9 &&
      question10 &&
      otherComment
    ) {
      const data = {
        question1: question1.value,
        question2: question2.value,
        question3: question3.value,
        question4: question4.value,
        question5: question5.value,
        question6: question6.value,
        question7: question7.value,
        question8: question8.value,
        question9: question9.value,
        question10: question10.value,
        otherComment: otherComment,
        userName: user.name,
        userEmail: user.email,
        userRole: user.role,
      };
      console.log(data);
      alert('User: ' + user.name + ' has submitted feedback');
      // you can then send this data to the backend
    } else {
      alert('Please select all the questions');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '16px',
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        {user.role === 'student' && (
          <>
            <h1>Student System Evaluation</h1>
            <h3>Student Information</h3>
            <b>Student name: </b>
            <span>{user.name}</span>
            <br />
            <b>Student email: </b>
            <span>{user.email}</span>
            <br />
            <b>Role: </b>
            <span>{user.role}</span>
            <br />
          </>
        )}
        {user.role === 'teacher' && (
          <>
            <h1>Teacher System Evaluation</h1>
            <h3>Teacher Information</h3>
            <p>Teacher name: {user.name}</p>
            <p>Teacher email: {user.email}</p>
            <p>Role: {user.role}</p>
          </>
        )}
        {user.role === 'officer' && (
          <>
            <h1>Officer System Evaluation</h1>
            <h3>Officer Information</h3>
            <p>Officer name: {user.name}</p>
            <p>Officer email: {user.email}</p>
            <p>Role: {user.role}</p>
          </>
        )}

        {/* <div>
        {Object.keys(user).map((key) => (
          <p key={key}>
            {key}: {user[key]}
          </p>
        ))}
      </div> */}

        {/* <TextareaAutosize
        style={{ width: '40%', padding: 8 }}
        minRows={1}
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
        placeholder="Student Name"
      />
      <br />
      <TextareaAutosize
        style={{ width: '40%', padding: 8 }}
        minRows={1}
        value={studentEmail}
        onChange={(event) => setStudentEmail(event.target.value)}
        placeholder="Student Email"
      />
      <br />
      <TextareaAutosize
        style={{ width: '40%', padding: 8 }}
        minRows={1}
        value={studentId}
        onChange={(event) => setStudentId(event.target.value)}
        placeholder="Student ID"
      /> */}
        <h3>Questions</h3>

        <Likert {...likertOptions1} />
        <Likert {...likertOptions2} />
        <Likert {...likertOptions3} />
        <Likert {...likertOptions4} />
        <Likert {...likertOptions5} />
        <Likert {...likertOptions6} />
        <Likert {...likertOptions7} />
        <Likert {...likertOptions8} />
        <Likert {...likertOptions9} />
        <Likert {...likertOptions10} />

        <h3>Other Comments</h3>
        <TextareaAutosize
          style={{ width: '40%', padding: 8 }}
          minRows={3}
          value={otherComment}
          onChange={(event) => setOtherComment(event.target.value)}
          placeholder="Other comment"
        />
        <br />
        <button style={{ width: '40%' }} className="btn btn-block" type="submit">
          Submit
        </button>
        {/* {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            User: {user.name} has submitted feedback
          </Alert>
        )} */}
        {/* {submitSuccess === true && <Alert severity="success">User: {user.name} has submitted feedback</Alert>}
        {submitSuccess === false && <Alert severity="error">Failed to submit feedback. Please try again later.</Alert>} */}
      </form>
    </div>
  );
};

export default SystemEvaluation;
