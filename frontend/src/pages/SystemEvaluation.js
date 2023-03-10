import React, { useState, useRef } from 'react';
import Likert from 'react-likert-scale';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useAppContext } from '../context/appContext';
// import { Alert } from '@mui/material';
import usePageName from '../utils/usePageName';

const studentQuestions = {
  question1:
    '1. The student website provides easy access to the necessary information for signing up for internships and jobs',
  question2: '2. It was easy to register and create a student account on the website',
  question3: '3. I am satisfied with the job search functionality on the website',
  question4: '4. The job and internship application process is clear and straightforward',
  question5: '5. I am satisfied with the confirmation process after submitting my job or internship application',
  question6: '6. It was easy to submit my feedback to the company after applying for a job or internship',
  question7:
    '7. I am satisfied with the process of submitting my evaluation report and internship report for an internship',
  question8: '8. The system provides easy access to view my grades',
  question9: '9. I am satisfied with the process of submitting my system evaluation report',
  question10: '10. It was easy to submit my internship report through the website',
  question11: '11. Overall, the website role in assisting me with finding internships and jobs is satisfactory',
  question12: '12. Are there any features that the user would like to see added or improved in the system?',
  question13: '13. Are there any features that the user would like to see added or improved in the system?',
  question14: '14. Are there any features that the user would like to see added or improved in the system?',
  question15: '15. Are there any features that the user would like to see added or improved in the system?',
};

const teacherQuestions = {
  question1:
    '1. The teacher website provides easy access to the necessary information for viewing for internships and jobs',
  question2: '2. It was easy to register and create a teacher account on the website',
  question3: '3. I am satisfied with the job search functionality on the website',
  question4: '4. The viewing internship application process is clear and straightforward',
  question5: '5. I am satisfied with the confirmation process after viewing my student internship application',
  question6: '6. It was easy to view my student feedback to the company after applying for a internship',
  question7: '7. I am satisfied with the process of viewing my student evaluation report for an internship',
  question8: '8. The system provides easy access to submit my student grades',
  question9: '9. I am satisfied with the process of submitting my system evaluation report',
  question10: '10. It was easy to view my student internship report through the website',
  question11:
    '11. Overall, the website role in assisting me with tracking student internships and manage student list is satisfactory',
  question12: '12. I am likely to recommend the website to my peers who are also searching for internships and jobs',
  question13:
    '13. There are additional features or functionalities that I would like to see added to the website to better assist me in my job and internship search',
  question14:
    '14. The website adequately communicates the expectations and requirements for internships and jobs to teachers',
  question15: '15. I am satisfied with the support and assistance provided by the website customer service team',
};

const officerQuestions = {
  question1:
    '1. The officer website provides easy access to the necessary information for viewing for internships and jobs',
  question2: '2. It was easy to register and create a officer account on the website',
  question3: '3. I am satisfied with adding information to the job search functionality on the website',
  question4: '4. The viewing internship application process is clear and straightforward',
  question5: '5. I am satisfied with the confirmation process after viewing my student internship application',
  question6: '6. It was easy to view my student feedback to the company after applying for a internship',
  question7: '7. I am satisfied with the process of viewing my student evaluation report for an internship',
  question8: '8. The system provides easy access to view my student grades',
  question9: '9. I am satisfied with the process of submitting my system evaluation report',
  question10: '10. It was easy to view my student internship report through the website',
  question11:
    '11. Overall, the website role in assisting me with tracking student internships and manage users information is satisfactory',
  question12: '12. I am likely to recommend the website to my peers who are also searching for internships and jobs',
  question13:
    '13. There are additional features or functionalities that I would like to see added to the website to better assist me in my job and internship search',
  question14:
    '14. The website adequately communicates the expectations and requirements for internships and jobs to teachers',
  question15: '15. I am satisfied with the support and assistance provided by the website customer service team',
};

const SystemEvaluation = () => {
  // const [showAlert, setShowAlert] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(null);

  const formRef = useRef(null);

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
  const [question11, setQuestion11] = useState(null);

  const [question12, setQuestion12] = useState(null);

  const [question13, setQuestion13] = useState(null);

  const [question14, setQuestion14] = useState(null);

  const [question15, setQuestion15] = useState(null);

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
  const likertOptions11 = {
    question: currentQuestions.question11,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion11(val);
    },
  };
  const likertOptions12 = {
    question: currentQuestions.question12,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion12(val);
    },
  };
  const likertOptions13 = {
    question: currentQuestions.question13,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion13(val);
    },
  };
  const likertOptions14 = {
    question: currentQuestions.question14,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion14(val);
    },
  };

  const likertOptions15 = {
    question: currentQuestions.question15,
    responses: defaultResponse,
    onChange: (val) => {
      setQuestion15(val);
    },
  };

  const resetForm = () => {
    formRef.current.reset();
    setQuestion1(null);
    setQuestion2(null);
    setQuestion3(null);
    setQuestion4(null);
    setQuestion5(null);
    setQuestion6(null);
    setQuestion7(null);
    setQuestion8(null);
    setQuestion9(null);
    setQuestion10(null);
    setQuestion11(null);
    setQuestion12(null);
    setQuestion13(null);
    setQuestion14(null);
    setQuestion15(null);
    setOtherComment(null);
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
      question11 &&
      question12 &&
      question13 &&
      question14 &&
      question15 &&
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
        question11: question11.value,
        question12: question12.value,
        question13: question13.value,
        question14: question14.value,
        question15: question15.value,
        otherComment: otherComment,
        userName: user.name,
        userEmail: user.email,
        userRole: user.role,
      };
      console.log(data);
      resetForm();
      alert('User: ' + user.name + ' has submitted feedback');
    } else {
      alert('Please select all the questions');
    }
  };

  usePageName('System Evaluation');

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '5px',
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto',
      }}
    >
      <form onSubmit={handleSubmit} ref={formRef}>
        {user.role === 'student' && (
          <>
            <h1 style={{ textAlign: 'center' }}>Student System Evaluation</h1>
            <h3>Student Information</h3>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Student name: </b>
              <span style={{ display: 'inline-block' }}>{user.name}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Student email: </b>
              <span style={{ display: 'inline-block' }}>{user.email}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Role: </b>
              <span style={{ display: 'inline-block' }}>{user.role}</span>
            </p>
          </>
        )}
        {user.role === 'teacher' && (
          <>
            <h1 style={{ textAlign: 'center' }}>Teacher System Evaluation</h1>
            <h3>Teacher Information</h3>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Teacher name: </b>
              <span style={{ display: 'inline-block' }}>{user.name}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Teacher email: </b>
              <span style={{ display: 'inline-block' }}>{user.email}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Role: </b>
              <span style={{ display: 'inline-block' }}>{user.role}</span>
            </p>
          </>
        )}
        {user.role === 'officer' && (
          <>
            <h1 style={{ textAlign: 'center' }}>Officer System Evaluation</h1>
            <h3>Officer Information</h3>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Officer name: </b>
              <span style={{ display: 'inline-block' }}>{user.name}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Officer email: </b>
              <span style={{ display: 'inline-block' }}>{user.email}</span>
            </p>
            <p>
              <b style={{ display: 'inline-block', minWidth: '150px' }}>Role: </b>
              <span style={{ display: 'inline-block' }}>{user.role}</span>
            </p>
          </>
        )}

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
        <Likert {...likertOptions11} />
        <Likert {...likertOptions12} />
        <Likert {...likertOptions13} />
        <Likert {...likertOptions14} />
        <Likert {...likertOptions15} />

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
      </form>
    </div>
  );
};

export default SystemEvaluation;
