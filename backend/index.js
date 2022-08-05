const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classroom-management-system',
    multipleStatements: true
});

app.listen(3001, ()=>{
    console.log("backend server Running on port 3001");
});

app.post("/studentinfo", (req, res) => {
    const registration = req.body.registration;
    console.log(registration);
  
    db.query(
      "SELECT * FROM student WHERE registration_no = ?",
      [registration],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.post("/courseinfo", (req, res) => {
    const courseCode = req.body.courseCode;
    console.log(courseCode);
  
    db.query(
      "SELECT * FROM course WHERE course_code = ?",
      [courseCode],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


app.post("/deptinfo", (req, res) => {
  const departmentcode = req.body.departmentcode;
  console.log("{ department code: "+departmentcode+" }");
  
  db.query(
    "SELECT * FROM department WHERE department_code = ?",
    [departmentcode],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/createdept", (req, res) => {
  const deptcode = req.body.deptcode;
  const deptname = req.body.deptname;
  const deptbuilding = req.body.deptbuilding;

  db.query(
    "INSERT INTO department (department_code, name, building) VALUES (?,?,?)",
    [deptcode, deptname, deptbuilding],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("updated department database");
        res.send({err:0});
      }
    }
  );
});

app.post("/createstu", (req, res) => {
  const reg = req.body.reg;
  const name = req.body.name;
  const session = req.body.session;
  const department = req.body.department;

  db.query(
    "INSERT INTO student (registration_no, name, session, department) VALUES (?,?,?,?)",
    [reg, name, session, department],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("inserted student database");
        res.send({err:0});
      }
    }
  );
});

app.put("/updatestu", (req, res) => {
  const reg = req.body.reg;
  const name = req.body.name;
  const session = req.body.session;
  const department = req.body.department;
  db.query(
    "UPDATE student SET name = ?,session = ?,department = ? WHERE registration_no = ?",
    [name, session, department,reg],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("updated Student");
        res.send({err: 0});
      }
    }
  );
});


//for user signup
app.post("/userinfo", (req, res) => {
  const userName_signUp = req.body.userName_signUp;
  const userDept_signUp = req.body.userDept_signUp;
  const userMail_signUp = req.body.userMail_signUp;
  const userPass_signUp = req.body.userPass_signUp;
  console.log('User Mail: '+userMail_signUp);

  db.query(
      "INSERT INTO user (user_name, user_dept, user_mail, user_pass) VALUES (?,?,?,?)",
      [userName_signUp, userDept_signUp, userMail_signUp, userPass_signUp],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({err:1});
        } else {
          console.log("inserted user database: "+userMail_signUp);
          res.send({err:0});
        }
      }
    );
});


app.post("/fetch_userinfo", (req, res) => {
 
  const userMail_login = req.body.userMail_login;
  const userPass_login = req.body.userPass_login;
  console.log('User Mail: '+userMail_login);

  db.query(
    "SELECT user_mail,user_pass FROM user WHERE user_mail = ? AND user_pass = ?",
    [userMail_login, userPass_login],
    (err, result) => {
      if (err) {
        res.send({err: err});
      } 
      if (result.length > 0) {
        res.send(result);
      }
      else{
        res.send({message: "wrong username/password"});
      }
    }
  );
});

//router to teacher.js
const teacherRouter = require('./routes/teacher');
app.use('/teacher', teacherRouter);

//router to course.js
const courseRouter = require('./routes/Course');
app.use('/Course', courseRouter);

//router to login.jsx & signUp.jsx
// const loginRourter = require('./routes/Login');
// app.use('./Login', loginRourter);
