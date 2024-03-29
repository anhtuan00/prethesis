// const seeder = require('mongoose-seed');
import mongoose from 'mongoose';

const cs = 'mongodb+srv://user:YK8WBUbotHLmpBSf@demo.kto4awg.mongodb.net/prethesis?retryWrites=true&w=majority'


var jobs = [
    {
        "_id": "63332772c583ecc1882dec85",
        "company": "Company A",
        "position": "Dev 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:40:18.045Z",
        "updatedAt": "2022-09-27T16:40:18.045Z",
        "__v": 0
    },
    {
        "_id": "6333278ac583ecc1882dec87",
        "company": "Company B",
        "position": "Tester 2",
        "status": "declined",
        "jobType": "part-time",
        "jobLocation": "Da Nang",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:40:42.787Z",
        "updatedAt": "2022-09-27T16:40:42.787Z",
        "__v": 0
    },
    {
        "_id": "633327aec583ecc1882dec89",
        "company": "Company C",
        "position": "Dev 2",
        "status": "interview",
        "jobType": "remote",
        "jobLocation": "Ha Noi",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:41:18.712Z",
        "updatedAt": "2022-09-27T16:41:30.038Z",
        "__v": 0
    },
    {
        "_id": "63332911c583ecc1882dec9d",
        "company": "Company E",
        "position": "Dev 4",
        "status": "pending",
        "jobType": "internship",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:47:13.097Z",
        "updatedAt": "2022-09-27T16:47:13.097Z",
        "__v": 0
    },
    {
        "_id": "633329dbc583ecc1882decb1",
        "company": "Company D",
        "position": "Tester 3",
        "status": "interview",
        "jobType": "internship",
        "jobLocation": "Ha Noi",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:50:35.190Z",
        "updatedAt": "2022-09-27T16:50:35.190Z",
        "__v": 0
    },
    {
        "_id": "6334033d3bd6dc96317ad475",
        "company": "Company 2",
        "position": "Team Lead 2",
        "status": "interview",
        "jobType": "full-time",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-28T08:18:05.731Z",
        "updatedAt": "2022-09-28T08:18:05.731Z",
        "__v": 0
    },
    {
        "_id": "6392c0955a1bd75eb931ff40",
        "company": "Maang",
        "position": "Tester 3",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "my city",
        "createdBy": "6392bfd665d66ccc7622174c",
        "approve": "unapproved",
        "createdAt": "2022-12-09T04:59:01.208Z",
        "updatedAt": "2022-12-09T04:59:01.208Z",
        "__v": 0
    },
    {
        "_id": "63a48fea34dfbb64d81ff583",
        "company": "Comp 1",
        "position": "Pos 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "my city",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "approve": "approved",
        "createdAt": "2022-12-22T17:12:10.020Z",
        "updatedAt": "2022-12-22T17:12:10.020Z",
        "__v": 0
    },
    {
        "_id": "63a9116e4370e5b0f12450c7",
        "company": "Comp 1",
        "position": "Pos 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "HCM city",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "approve": "unapproved",
        "createdAt": "2022-12-26T03:13:50.992Z",
        "updatedAt": "2022-12-26T03:13:50.992Z",
        "__v": 0
    },
    {
        "_id": "63b00e653b727b2d41144f30",
        "company": "c1",
        "position": "Pos 3",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "Your Location",
        "createdBy": "63aff6763b727b2d41144f0b",
        "approve": "unapproved",
        "createdAt": "2022-12-31T10:26:45.260Z",
        "updatedAt": "2022-12-31T10:26:45.260Z",
        "__v": 0
    }
].map(({ __v, ...rest }) => rest);

var fb = [
    {
        "_id": "63afc6123d5854ba2e6510e1",
        "fbstudentName": "Student Name One",
        "fbstudentId": "ITITIU18179",
        "fbstudentPhone": "0902437625",
        "fbcompanyName": "Comp Name One",
        "fbcompanyPhone": "0902437625",
        "fbposition": "Pos One",
        "fblocation": "Location One",
        "fbstartDate": "2023-01-01T00:00:00.000Z",
        "fbendDate": "2023-01-06T00:00:00.000Z",
        "fbComment": "adsa asd ad",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "createdAt": "2022-12-31T05:18:10.374Z",
        "updatedAt": "2022-12-31T05:18:10.374Z",
        "__v": 0
    },
    {
        "_id": "63c2e800247ed974bf84570c",
        "fbstudentName": "Student Name Six",
        "fbstudentId": "ITITIU18178",
        "fbstudentPhone": "0902437625",
        "fbcompanyName": "Comp Name Six",
        "fbcompanyPhone": "0913161528",
        "fbposition": "Pos Six",
        "fblocation": "Location Six",
        "fbstartDate": "2023-02-02T00:00:00.000Z",
        "fbendDate": "2023-02-11T00:00:00.000Z",
        "fbComment": "Feedback Six Edit Old",
        "createdBy": "63aff6763b727b2d41144f0b",
        "createdAt": "2023-01-14T17:36:00.312Z",
        "updatedAt": "2023-01-15T06:09:52.056Z",
        "__v": 0
    }
].map(({ __v, ...rest }) => rest);

var users = [
    {
        "_id": "63b1cd548617131a24f6fd69",
        "name": "Test User",
        "email": "TestUserThree@gmail.com",
        "password": "$2a$10$TTzSFLC.cXrqdEx52xL7DeFwN3TznP0J9nnL5kK5Nk4yDqNXfwsi2",
        "role": "user",
        "lastName": "Last Name",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0,
        "studentId": "ITITIU18173"
    },
    {
        "_id": "63c3be21127f19ba1e4ab3e9",
        "name": "Name Nine",
        "email": "UserNine@gmail.com",
        "password": "$2a$10$JLrwNtpuADWpbQXCLLD4leKskwT3jFGwL3sfcqzuJAyTarGZSXdLa",
        "role": "user",
        "lastName": "Last Name Nine",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0,
        "studentId": "ITITIU18178"
    },
    {
        "_id": "63c3c3830467dadf98df1149",
        "name": "Admin Nine",
        "email": "AdminNine@gmail.com",
        "password": "$2a$10$vyLcqlwWv5Qk9f126Mueg.Zmn38oEX5.3G/XIBJEUDROlsedc9mo2",
        "role": "admin",
        "lastName": "Last Name",
        "studentId": "ITITIU12345",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63c94ae9cf5294d283e17703",
        "name": "Name Six",
        "email": "UserSix@gmail.com",
        "password": "$2a$10$T3Za2Kk63QNLKaDqStEktOUnil9Bq0GU09nV/3WpBK/6GGElFeBge",
        "role": "user",
        "lastName": "Last Name",
        "studentId": "ITITIU18176",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63c97d15cf5294d283e17743",
        "name": "Name Eleven",
        "email": "UserEleven@gmail.com",
        "password": "$2a$10$2VpJ1rSiyh5Ht586eYftX.HTiHzlBFwb.l9FWXQP0EAH//eYtu1Ke",
        "role": "user",
        "lastName": "Last Name",
        "studentId": "ITITIU18111",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63c97e0c0bf87007fc54526c",
        "name": "Name Twelve",
        "email": "UserTwelve@gmail.com",
        "password": "$2a$10$Wx4Nxg.oyLJkJ8zcow1ybO9v.Epsc61LCml..L2CPXrsGUrM8NnFu",
        "role": "user",
        "lastName": "Last Name",
        "studentId": "ITITIU18123",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63dcfa1d67c00959690c9a37",
        "name": "Name User",
        "email": "Email20@gmail.com",
        "password": "$2a$10$3We1GGg6ncIl8GrMx6T3Z.QG/7inhIVDF0XvXb2FMBxW4m8kC2xga",
        "role": "user",
        "lastName": "Last Name",
        "studentId": "ITITIU18***",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63de4f5457e73f201b2aaba6",
        "name": "Company",
        "email": "companyEmail@gmail.com",
        "password": "$2a$10$0Rsz4UbDkmNVy3/bhwOsZ.iqOnH53mPh5W93F.1FMF4RNHRpPIkTm",
        "role": "company",
        "lastName": "Last Name",
        "studentId": "ITITIU18***",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63de6d4a2f299a0338b0a4da",
        "name": "Teacher",
        "email": "TeacherEmail@gmail.com",
        "password": "$2a$10$NGZAM6mj8xgc5LMZPXlfkOrcD.PHVXawDqb2mrGZEJte1UajphaH2",
        "role": "teacher",
        "lastName": "Last Name",
        "studentId": "ITITIU18***",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    },
    {
        "_id": "63e2e6f34cd608d27fbc52a3",
        "name": "Student Name",
        "email": "StudentEmail@gmail.com",
        "password": "$2a$10$8eccgyBge3rmn1sAEGPJX.zFRuXC4vsNqcu8o3AllbTTb14f/O/9S",
        "role": "user",
        "lastName": "Last Name",
        "studentId": "ITITIU18***",
        "location": "Your Location",
        "hasSentFeedback": false,
        "__v": 0
    }
].map(({ __v, ...rest }) => rest);


let data = [
    {
        'model': 'Job',
        'documents': jobs
    },
    {
        'model': 'User',
        'documents': users
    },
    {
        'model': 'Feedback',
        'documents': fb
    }
]


const main = async () => {
    await mongoose.connect(cs);
    console.log('connect');
    for (const { model, documents } of data) {
        try {
            const { default: m } = await import(`../models/${model}.js`);
            await m.deleteMany({});
            await m.insertMany(documents);
        } catch (error) {
            console.log(error, model)
        }
    }
    await mongoose.connection.close();
}

var jobs = [
    {
        "_id": "63332772c583ecc1882dec85",
        "company": "Company A",
        "position": "Dev 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:40:18.045Z",
        "updatedAt": "2022-09-27T16:40:18.045Z",
        "__v": 0
    },
    {
        "_id": "6333278ac583ecc1882dec87",
        "company": "Company B",
        "position": "Tester 2",
        "status": "declined",
        "jobType": "part-time",
        "jobLocation": "Da Nang",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:40:42.787Z",
        "updatedAt": "2022-09-27T16:40:42.787Z",
        "__v": 0
    },
    {
        "_id": "633327aec583ecc1882dec89",
        "company": "Company C",
        "position": "Dev 2",
        "status": "interview",
        "jobType": "remote",
        "jobLocation": "Ha Noi",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:41:18.712Z",
        "updatedAt": "2022-09-27T16:41:30.038Z",
        "__v": 0
    },
    {
        "_id": "63332911c583ecc1882dec9d",
        "company": "Company E",
        "position": "Dev 4",
        "status": "pending",
        "jobType": "internship",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:47:13.097Z",
        "updatedAt": "2022-09-27T16:47:13.097Z",
        "__v": 0
    },
    {
        "_id": "633329dbc583ecc1882decb1",
        "company": "Company D",
        "position": "Tester 3",
        "status": "interview",
        "jobType": "internship",
        "jobLocation": "Ha Noi",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-27T16:50:35.190Z",
        "updatedAt": "2022-09-27T16:50:35.190Z",
        "__v": 0
    },
    {
        "_id": "6334033d3bd6dc96317ad475",
        "company": "Company 2",
        "position": "Team Lead 2",
        "status": "interview",
        "jobType": "full-time",
        "jobLocation": "HCM",
        "createdBy": "6332ecc2d7ea7c1b6cb113c3",
        "createdAt": "2022-09-28T08:18:05.731Z",
        "updatedAt": "2022-09-28T08:18:05.731Z",
        "__v": 0
    },
    {
        "_id": "6392c0955a1bd75eb931ff40",
        "company": "Maang",
        "position": "Tester 3",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "my city",
        "createdBy": "6392bfd665d66ccc7622174c",
        "approve": "unapproved",
        "createdAt": "2022-12-09T04:59:01.208Z",
        "updatedAt": "2022-12-09T04:59:01.208Z",
        "__v": 0
    },
    {
        "_id": "63a48fea34dfbb64d81ff583",
        "company": "Comp 1",
        "position": "Pos 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "my city",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "approve": "approved",
        "createdAt": "2022-12-22T17:12:10.020Z",
        "updatedAt": "2022-12-22T17:12:10.020Z",
        "__v": 0
    },
    {
        "_id": "63a9116e4370e5b0f12450c7",
        "company": "Comp 1",
        "position": "Pos 1",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "HCM city",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "approve": "unapproved",
        "createdAt": "2022-12-26T03:13:50.992Z",
        "updatedAt": "2022-12-26T03:13:50.992Z",
        "__v": 0
    },
    {
        "_id": "63b00e653b727b2d41144f30",
        "company": "c1",
        "position": "Pos 3",
        "status": "pending",
        "jobType": "full-time",
        "jobLocation": "Your Location",
        "createdBy": "63aff6763b727b2d41144f0b",
        "approve": "unapproved",
        "createdAt": "2022-12-31T10:26:45.260Z",
        "updatedAt": "2022-12-31T10:26:45.260Z",
        "__v": 0
    }
].map(({ __v, ...rest }) => rest);

var fb = [
    {
        "_id": "63afc6123d5854ba2e6510e1",
        "fbstudentName": "Student Name One",
        "fbstudentId": "ITITIU18179",
        "fbstudentPhone": "0902437625",
        "fbcompanyName": "Comp Name One",
        "fbcompanyPhone": "0902437625",
        "fbposition": "Pos One",
        "fblocation": "Location One",
        "fbstartDate": "2023-01-01T00:00:00.000Z",
        "fbendDate": "2023-01-06T00:00:00.000Z",
        "fbComment": "adsa asd ad",
        "createdBy": "63a2ab3f3d1c3bcc59445cd3",
        "createdAt": "2022-12-31T05:18:10.374Z",
        "updatedAt": "2022-12-31T05:18:10.374Z",
        "__v": 0
    },
    {
        "_id": "63c2e800247ed974bf84570c",
        "fbstudentName": "Student Name Six",
        "fbstudentId": "ITITIU18178",
        "fbstudentPhone": "0902437625",
        "fbcompanyName": "Comp Name Six",
        "fbcompanyPhone": "0913161528",
        "fbposition": "Pos Six",
        "fblocation": "Location Six",
        "fbstartDate": "2023-02-02T00:00:00.000Z",
        "fbendDate": "2023-02-11T00:00:00.000Z",
        "fbComment": "Feedback Six Edit Old",
        "createdBy": "63aff6763b727b2d41144f0b",
        "createdAt": "2023-01-14T17:36:00.312Z",
        "updatedAt": "2023-01-15T06:09:52.056Z",
        "__v": 0
    }
].map(({ __v, ...rest }) => rest);

main();
